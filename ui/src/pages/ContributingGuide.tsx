import * as React from "react";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

import { COLORS, PAGE_WIDTH } from "../styles";

const MainPage = styled.div`
  padding: 50px;
  background-color: ${COLORS.BACKGROUND};
  width: ${PAGE_WIDTH};
  text-align: initial;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ContributingGuide = () => {
  return (
    <MainPage>
      <Title>Contributing Guide</Title>
      <Paragraph>Test</Paragraph>
    </MainPage>
  );
};

export default ContributingGuide;
