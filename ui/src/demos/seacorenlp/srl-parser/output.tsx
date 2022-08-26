import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";
import { HighlightContainer } from "../../../components/output/highlight/HighlightContainer";
import { PropbankLabels, ModifierArgumentLabels } from "./tagsets";

interface PredicateData {
  description: string;
  tags: string[];
  verb: string;
}

interface OutputProps {
  responseData: {
    verbs: PredicateData[];
    words: string[];
  }
}

interface Token {
  text: string,
  entity: string
}

const TokenSpan = ({ token }: any) => {
  const entity = token.entity;

  if (entity !== null) {
    let spanCoarseLabel, modifierType;
    if (entity.slice(0,2) === "C-") {
      [spanCoarseLabel, modifierType] = entity.slice(2).split("-");
      spanCoarseLabel = "C-".concat(spanCoarseLabel);
    } else {
      [spanCoarseLabel, modifierType] = entity.split("-");
    }
    let spanType = spanCoarseLabel;
    if (spanCoarseLabel.slice(0, 2) === "C-") {
      if (/ARG\d+/.test(spanCoarseLabel)) {
        spanType = "C-ARG";
      } else {
        spanType = "C-ARGM";
      }
    } else if (/ARG\d+/.test(spanCoarseLabel)) {
      spanType = "ARG";
    }

    const tooltipString = PropbankLabels[spanType].tooltip + (modifierType ? `-${ModifierArgumentLabels[modifierType]}` : '');

    return (
      <Highlight
        label={entity === "V" ? "P" : entity}
        color={PropbankLabels[spanType].color}
        tooltip={tooltipString}
      >
        {token.text}
      </Highlight>
    );
  } else {
    return (<span>{token.text} </span>);
  }
}

const SinglePredicateOutput = (props: any) => {
  const predicateList = props.responseData.verbs;
  const {description, tags, verb} = predicateList[props.id];
  const words = props.responseData.words;

  const formattedTokens: Token[] = [];
  let spanStr = "";

  tags.forEach(function (tag: string, i: number) {
    let tokenObj: any = {};
    if (tag === "O") {
      tokenObj = {
        text: words[i],
        entity: null
      };
      formattedTokens.push(tokenObj);
    } else if (tag[0] === "U") {
      tokenObj = {
        text: words[i],
        entity: tag.slice(2)
      };
      formattedTokens.push(tokenObj);
    } else if (tag[0] === "B") {
      spanStr = `${words[i]}`;
    } else if (tag[0] === "I") {
      spanStr += ` ${words[i]} `;
    } else if (tag[0] === "L") {
      spanStr += ` ${words[i]}`;
      tokenObj = {
        text: spanStr,
        entity: tag.slice(2)
      };
      formattedTokens.push(tokenObj);
    }
  });
  return (
    <>
      <hr style={{marginTop: "32px", marginBottom: "16px"}}/>
      <div>
        <h3>
          Argument structure for
          <Highlight color={"red"} style={{display: "inline-block", marginLeft: "4px", paddingRight: "4px"}}>
            {verb}
          </Highlight>
          :
        </h3>
      </div>

      <HighlightContainer layout="bottom-labels">
        {formattedTokens.map((token, i) => <TokenSpan key={i} token={token} />)}
      </HighlightContainer>
    </>
  )
}

const Output = ({ responseData }: OutputProps) => {
  const { verbs, words } = responseData;
  const predicateRows = verbs.map((predicateData, i) => <SinglePredicateOutput key={i} id={i} responseData={responseData} />)
  return (
    <div>
      <h2>{ verbs.length } Predicates Detected</h2>
      {predicateRows}
    </div>
  )
}

export default Output;
