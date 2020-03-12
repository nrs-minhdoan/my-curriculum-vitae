import React from "react";
import styled from "styled-components";

import certifications from "../data/certifications";
import Award from "../components/Certifications/Award";

import { fadingIn } from "../themes/animations";

const Container = styled.div`
  padding: 60px 20px;
  animation: ${fadingIn} 1s ease-in-out;
`;

function Certifications() {
  return (
    <Container>
      {certifications.map((item, index) => (
        <Award key={`award${index + 1}`} data={item} />
      ))}
    </Container>
  );
}

export default Certifications;
