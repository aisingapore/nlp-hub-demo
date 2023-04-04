import * as React from "react";
import {
  ReadOutlined,
  ApartmentOutlined,
  EditOutlined,
  WechatOutlined,
  DeploymentUnitOutlined,
  TwitterOutlined,
  ScissorOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

import { ModelConfig } from "./models";
import { CONTENT_TYPE } from "../constants";

// SGnlp Demos
import RelationExtractionDemo from "./sg-nlp/relation-extraction/RelationExtractionDemo";
import EmotionEntailmentDemo from "./sg-nlp/emotion-entailment/EmotionEntailmentDemo";
import CasualSpanExtractionDemo from "./sg-nlp/causal-span-extraction/CausalSpanExtractionDemo";
import CrossSentenceGECDemo from "./sg-nlp/cross-sentence-gec/CrossSentenceGECDemo";
import RumourDetectionDemo from "./sg-nlp/rumour-detection/RumourDetectionDemo";
import DiscourseParsingDemo from "./sg-nlp/discourse-parsing/DiscourseParsingDemo";
import CrossLingualCrossDomainDemo from "./sg-nlp/cross-lingual-cross-domain/CrossLingualCrossDomainDemo";
import IdentifyFollowUpQuestionDemo from "./sg-nlp/identify-follow-up-question/IdentifyFollowUpQuestionDemo";
import AspectBasedSentimentAnalysisDemo from "./sg-nlp/aspect-based-sentiment-analysis/AspectBasedSentimentAnalysisDemo";
import RvStanceDetectionDemo from "./sg-nlp/rv-stance-detection/RvStanceDetectionDemo";
import CoherenceModelingDemo from "./sg-nlp/coherence-modeling/CoherenceModelingDemo";
import StanceClassificationDemo from "./sg-nlp/stance-classification/StanceClassificationDemo";
import RumourVerificationDemo from "./sg-nlp/rumour-verification/RumourVerificationDemo";

// SEACoreNLP Demos
import TokenizerDemo from "./seacorenlp/tokenizer/TokenizerDemo";
import POSTaggerDemo from "./seacorenlp/pos-tagger/POSTaggerDemo";
import NERTaggerDemo from "./seacorenlp/ner-tagger/NERTaggerDemo";
import ConstituencyParserDemo from "./seacorenlp/const-parser/ConstituencyParserDemo";
import DependencyParserDemo from "./seacorenlp/dep-parser/DependencyParserDemo";
import CoreferenceResolutionDemo from "./seacorenlp/coref-resolver/CoreferenceResolutionDemo";
import SemanticRoleLabelingDemo from "./seacorenlp/srl-parser/SemanticRoleLabelingDemo";

export interface DemoConfig {
  taskId: string;
  title: string;
  desc: string | JSX.Element;
  models: ModelConfig[];
}

export interface Demo {
  component: () => JSX.Element;
  config: DemoConfig;
}

interface DemoGroup {
  label: string;
  icon: any;
  demos: Demo[];
}

const sgnlpConversationalToolsDemos = [
  EmotionEntailmentDemo,
  CasualSpanExtractionDemo,
  IdentifyFollowUpQuestionDemo,
];
const sgnlpGrammarCorrectionDemos = [CrossSentenceGECDemo];
const sgnlpKnowledgeMiningDemos = [RelationExtractionDemo];
const sgnlpSocialMediaAnalysisDemos = [
  RumourDetectionDemo,
  // RvStanceDetectionDemo,
  StanceClassificationDemo,
  RumourVerificationDemo,
];
const sgnlpDocumentAnalysisDemos = [DiscourseParsingDemo, CoherenceModelingDemo];
const sgnlpSentimentAnalysisDemos = [
  AspectBasedSentimentAnalysisDemo,
  CrossLingualCrossDomainDemo,
];

export const sgnlpGroups: DemoGroup[] = [
  {
    label: "Conversational Tools",
    icon: WechatOutlined,
    demos: sgnlpConversationalToolsDemos,
  },
  {
    label: "Grammar Correction",
    icon: EditOutlined,
    demos: sgnlpGrammarCorrectionDemos,
  },
  {
    label: "Knowledge Mining",
    icon: DeploymentUnitOutlined,
    demos: sgnlpKnowledgeMiningDemos,
  },
  {
    label: "Social Media Analysis",
    icon: TwitterOutlined,
    demos: sgnlpSocialMediaAnalysisDemos,
  },
  {
    label: "Document Analysis",
    icon: ReadOutlined,
    demos: sgnlpDocumentAnalysisDemos,
  },
  {
    label: "Sentiment Analysis",
    icon: SmileOutlined,
    demos: sgnlpSentimentAnalysisDemos,
  },
];

const sgnlpNestedDemos = sgnlpGroups.map((group) => group["demos"]);
const sgnlpDemos = [].concat.apply([], sgnlpNestedDemos);
const sgnlpBetaDemos: Demo[] = [];

const seaSegmentationDemos = [TokenizerDemo];
const seaTaggingDemos = [POSTaggerDemo, NERTaggerDemo];
const seaParsingDemos = [ConstituencyParserDemo, DependencyParserDemo];
const seaSemanticAnalysisDemos = [CoreferenceResolutionDemo, SemanticRoleLabelingDemo];

const seacorenlpGroups: DemoGroup[] = [
  {
    label: "Text Segmentation",
    icon: ScissorOutlined,
    demos: seaSegmentationDemos,
  },
  {
    label: "Token-level Tagging",
    icon: EditOutlined,
    demos: seaTaggingDemos,
  },
  {
    label: "Syntactic Parsing",
    icon: ApartmentOutlined,
    demos: seaParsingDemos,
  },
  {
    label: "Semantic Analysis",
    icon: SolutionOutlined,
    demos: seaSemanticAnalysisDemos,
  },
];

const seacorenlpNestedDemos = seacorenlpGroups.map((group) => group["demos"]);
const seacorenlpDemos = [].concat.apply([], seacorenlpNestedDemos);
const seacorenlpBetaDemos: Demo[] = []

export const demos = {
  SGNLP: sgnlpDemos,
  SEACORENLP: seacorenlpDemos,
}[CONTENT_TYPE];

export const betaDemos = {
  SGNLP: sgnlpBetaDemos,
  SEACORENLP: seacorenlpBetaDemos,
}[CONTENT_TYPE];

export const demoGroups = {
  SGNLP: sgnlpGroups,
  SEACORENLP: seacorenlpGroups,
}[CONTENT_TYPE];
