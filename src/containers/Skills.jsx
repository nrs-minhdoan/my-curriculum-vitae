import React, { Fragment } from "react";
import styled from "styled-components";

import data from "../data/data";
import useLanguage from "../hooks/useLanguage";
import ProgressBar from "../components/UI/ProgressBar/ProgressBar";

import { PRIMARY, WHITE } from "../themes/colors";
import { normal, xLarge } from "../themes/size";
import { fadingIn } from "../themes/animations";

const Container = styled.div`
  padding: 60px 20px;
  animation: ${fadingIn} 0.5s ease-in-out;
`;

const SkillItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 30px 0px;
`;

const SkillLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 20px;
`;

const SkillDetail = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const SkillName = styled.div`
  font-weight: 600;
  ${xLarge}
  margin-right: 20px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: dashed 1px ${PRIMARY};

  a {
    color: ${PRIMARY};
  }
`;

const SkillDescription = styled.div`
  color: ${WHITE};
  ${normal}
`;

const LinkCustom = styled.a`
  text-decoration: none;
  color: ${WHITE};
  cursor: pointer;

  &:hover {
    color: ${PRIMARY};
  }
`;

const SkillPoint = styled.div`
  flex: 1;
`;

function Skills() {
  const text = useLanguage();

  return (
    <Container>
      {data.skills.map(item => (
        <SkillItem key={item.name}>
          <a href={item.link}>
            <SkillLogo src={item.icon} alt={""} />
          </a>
          <SkillDetail>
            <SkillName>
              <LinkCustom href={item.link} target={"_blank"}>
                {item.name}
              </LinkCustom>
            </SkillName>
            <SkillDescription>
              <span style={{ textDecoration: "underline" }}>
                {text.label.library}:
              </span>{" "}
              {item.libraries.map(library => (
                <Fragment key={library.name}>
                  <LinkCustom href={library.link} target={"_blank"}>
                    {library.name}
                  </LinkCustom>
                  ,{" "}
                </Fragment>
              ))}
              ...
            </SkillDescription>
          </SkillDetail>
          <SkillPoint>
            <ProgressBar points={item.points} />
          </SkillPoint>
        </SkillItem>
      ))}
    </Container>
  );
}

export default Skills;
