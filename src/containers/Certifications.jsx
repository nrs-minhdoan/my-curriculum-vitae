import React from "react";
import styled from "styled-components";

import { fadingIn } from "../themes/animations";

const Container = styled.div`
  padding: 60px 20px;
  animation: ${fadingIn} 1s ease-in-out;
`;

function Certifications() {
  return <Container>Certifications</Container>;
}

export default Certifications;
