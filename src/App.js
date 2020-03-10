import React from "react";
import styled from "styled-components";

import CurriculumVitae from "./containers/CurriculumVitae";

import { BACKGROUND_COLOR } from "./themes/colors";
import { center } from "./themes/styles";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${BACKGROUND_COLOR};
  ${center}
`;

function App() {
  return (
    <Container>
      <CurriculumVitae />
    </Container>
  );
}

export default App;
