import React, { Fragment, useCallback } from "react";
import styled from "styled-components";

import experience from "../data/experience";
import useLanguage from "../hooks/useLanguage";
import Project from "../components/Experience/Project";

import { PRIMARY, WHITE } from "../themes/colors";
import { SMALL_DEVICES, large, xLarge } from "../themes/size";
import { fadingIn } from "../themes/animations";

const Container = styled.div`
  padding: 60px 20px;
  animation: ${fadingIn} 1s ease-in-out;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  ${props =>
    props.first
      ? ""
      : `margin-top: 20px; padding-top: 20px; border-top: solid 1px ${PRIMARY};`}

  a {
    display: flex;
    align-items: center;
    color: ${PRIMARY};
    font-weight: 700;
    ${xLarge}
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  a:first-of-type {
    padding-right: 10px;
    margin-right: 10px;
    border-right: solid 1px ${WHITE};
  }

  @media ${SMALL_DEVICES} {
    flex-direction: column;

    a {
      text-align: center;
    }

    a:first-of-type {
      padding-right: 0px;
      margin-right: 0px;
      margin-bottom: 10px;
      border-right: none;
      border-bottom: none;
    }
  }
`;

const Logo = styled.img`
  width: 60px;

  @media ${SMALL_DEVICES} {
    width: 150px;
  }
`;

const Time = styled.div`
  color: ${WHITE};
  ${large}
  padding-left: 10px;
  margin-top: 5px;

  @media ${SMALL_DEVICES} {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: solid 1px ${WHITE};
  }
`;

function Experience() {
  const text = useLanguage();

  const _handleRenderTime = useCallback(
    data => {
      switch (data.status) {
        case "working":
          return data.time + " - " + text.time.current;

        case "freelancer":
          return "Freelancer";

        default:
          return data.time;
      }
    },
    [text]
  );

  return (
    <Container>
      {experience.map((item, index) => (
        <Fragment key={item.company}>
          <Title first={index === 0}>
            <a href={item.link} rel="noopener noreferrer" target={"_blank"}>
              <Logo src={item.logo} alt={""} />
            </a>
            <a href={item.link} rel="noopener noreferrer" target={"_blank"}>
              {text.company[item.company]}
            </a>
          </Title>
          <Time>({_handleRenderTime(item)})</Time>
          {item.projects.map(project => (
            <Project key={project.name} data={project} />
          ))}
        </Fragment>
      ))}
    </Container>
  );
}

export default Experience;
