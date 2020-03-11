import React from "react";
import styled from "styled-components";

import education from "../data/education";
import Course from "../components/Education/Course";

import { fadingIn } from "../themes/animations";

const Container = styled.div`
  padding: 60px 20px;
  animation: ${fadingIn} 1s ease-in-out;
`;

function Education() {
  return (
    <Container>
      {education.map(item => (
        <Course key={item.institution} data={item} />
      ))}
    </Container>
  );
}

export default Education;
