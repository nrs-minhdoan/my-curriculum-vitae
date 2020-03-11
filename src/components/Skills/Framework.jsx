import React, { Fragment } from "react";
import styled from "styled-components";

import useLanguage from "../../hooks/useLanguage";
import Responsive from "../Responsive/Responsive";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

import { PRIMARY, WHITE } from "../../themes/colors";
import { normal, xLarge } from "../../themes/size";

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
  font-weight: 700;
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

function Framework({ data }) {
  const text = useLanguage();

  return (
    <Responsive>
      {matches =>
        matches ? (
          <Fragment>
            <SkillItem>
              <a href={data.link}>
                <SkillLogo src={data.icon} alt={""} />
              </a>
              <SkillDetail>
                <SkillName>
                  <LinkCustom href={data.link} target={"_blank"}>
                    {data.name}
                  </LinkCustom>
                </SkillName>
                <SkillDescription>
                  <span style={{ textDecoration: "underline" }}>
                    {text.label.library}:
                  </span>{" "}
                  {data.libraries.map(library => (
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
            </SkillItem>
            <SkillPoint>
              <ProgressBar points={data.points} />
            </SkillPoint>
          </Fragment>
        ) : (
          <SkillItem>
            <a href={data.link}>
              <SkillLogo src={data.icon} alt={""} />
            </a>
            <SkillDetail>
              <SkillName>
                <LinkCustom href={data.link} target={"_blank"}>
                  {data.name}
                </LinkCustom>
              </SkillName>
              <SkillDescription>
                <span style={{ textDecoration: "underline" }}>
                  {text.label.library}:
                </span>{" "}
                {data.libraries.map(library => (
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
              <ProgressBar points={data.points} />
            </SkillPoint>
          </SkillItem>
        )
      }
    </Responsive>
  );
}

export default Framework;
