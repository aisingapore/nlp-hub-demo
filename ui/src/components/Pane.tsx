import styled from "styled-components";

import { COLORS, PAGE_WIDTH } from "../styles";

const Pane = styled.div`
padding: 50px;
background-color: ${COLORS.BACKGROUND};
width: ${PAGE_WIDTH};
text-align: initial;

@media (max-width: 992px) {
  width: 100%;
}
`;

export default Pane;