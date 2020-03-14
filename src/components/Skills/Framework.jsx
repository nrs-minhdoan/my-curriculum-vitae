import React, { Fragment } from "react";
import styled from "styled-components";

import useLanguage from "../../hooks/useLanguage";
import Responsive from "../Responsive/Responsive";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

import { PRIMARY, WHITE } from "../../themes/colors";
import { SMALL_DEVICES, normal, xLarge } from "../../themes/size";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 30px 0px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 20px;
  margin-top: 5px;
`;

const Detail = styled.div`
  flex: 1;
  margin-right: 20px;

  @media ${SMALL_DEVICES} {
    margin-right: 0px;
  }
`;

const Name = styled.div`
  font-weight: 700;
  ${xLarge}
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: dashed 1px ${PRIMARY};

  a {
    color: ${PRIMARY};
  }
`;

const Description = styled.div`
  word-break: break-word;
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

const Point = styled.div`
  flex: 1;
  margin-top: 5px;

  @media ${SMALL_DEVICES} {
    margin-top: 0px;
  }
`;

function Framework({ data }) {
  const text = useLanguage();

  return (
    <Responsive>
      {matches =>
        matches ? (
          <Fragment>
            <Container>
              <a href={data.link} rel="noopener noreferrer" target={"_blank"}>
                <Logo src={data.icon} alt={""} />
              </a>
              <Detail>
                <Name>
                  <LinkCustom href={data.link} target={"_blank"}>
                    {data.name}
                  </LinkCustom>
                </Name>
                <Description>
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
                </Description>
              </Detail>
            </Container>
            <Point>
              <ProgressBar points={data.points} />
            </Point>
          </Fragment>
        ) : (
          <Container>
            <a href={data.link}>
              <Logo src={data.icon} alt={""} />
            </a>
            <Detail>
              <Name>
                <LinkCustom href={data.link} target={"_blank"}>
                  {data.name}
                </LinkCustom>
              </Name>
              <Description>
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
              </Description>
            </Detail>
            <Point>
              <ProgressBar points={data.points} />
            </Point>
          </Container>
        )
      }
    </Responsive>
  );
}

export default Framework;