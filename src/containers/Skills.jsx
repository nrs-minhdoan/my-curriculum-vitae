import React from "react";
import styled from "styled-components";

import skills from "../data/skills";
import Skill from "../components/Skills/Skill";

import { PRIMARY } from "../themes/colors";
import { EXTRA_SMALL_DEVICES, xLarge } from "../themes/size";
import { fadingIn } from "../themes/animations";

const Container = styled.div`
  padding: 60px 20px;
  animation: ${fadingIn} 0.5s ease-in-out;
`;

const Title = styled.div`
  color: ${PRIMARY};
  ${xLarge}
  text-transform: uppercase;
`;

const TitleCustom = styled(Title)`
  padding-top: 20px;
  border-top: solid 1px ${PRIMARY};

  @media ${EXTRA_SMALL_DEVICES} {
    margin-top: 40px;
  }
`;

function Skills() {
  return (
    <Container>
      <Title>● Frameworks:</Title>
      {skills.frameworks.map(item => (
        <Skill key={item.name} data={item} />
      ))}
      <TitleCustom>● Programming Languages:</TitleCustom>
      {skills.languages.map(item => (
        <Skill key={item.name} data={item} />
      ))}
    </Container>
  );
}

export default Skills;
