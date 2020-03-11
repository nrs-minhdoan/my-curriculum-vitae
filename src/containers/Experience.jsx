import React, { Fragment } from "react";
import styled from "styled-components";

import experience from "../data/experience";
import useLanguage from "../hooks/useLanguage";
import Project from "../components/Experience/Project";

import { PRIMARY, WHITE } from "../themes/colors";
import { SMALL_DEVICES, xLarge } from "../themes/size";
import { fadingIn } from "../themes/animations";

const Container = styled.div`
  padding: 60px 20px;
  animation: ${fadingIn} 1s ease-in-out;
`;

const Title = styled.div`
  color: ${PRIMARY};
  font-weight: 700;
  ${xLarge}
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  @media ${SMALL_DEVICES} {
    flex-direction: column;

    p {
      text-align: center;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: solid 1px ${WHITE};
    }
  }
`;

const Logo = styled.img`
  width: 60px;
  padding-right: 10px;
  margin-right: 10px;
  border-right: solid 1px ${WHITE};

  @media ${SMALL_DEVICES} {
    width: 150px;
    padding-right: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    border-right: none;
  }
`;

function Experience() {
  const text = useLanguage();

  return (
    <Container>
      {experience.map(item => (
        <Fragment key={item.company}>
          <Title>
            <Logo src={item.logo} alt={""} />
            <p>{text.experience.company[item.company]}</p>
          </Title>
          {item.projects.map(project => (
            <Project key={project.name} data={project} />
          ))}
        </Fragment>
      ))}
    </Container>
  );
}

export default Experience;
