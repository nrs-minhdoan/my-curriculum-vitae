import React, { Fragment, memo } from "react";
import styled from "styled-components";

import ProgressBar from "../UI/ProgressBar/ProgressBar";

import { PRIMARY, WHITE } from "../../themes/colors";
import {
  EXTRA_SMALL_DEVICES,
  SMALL_DEVICES,
  normal,
  xLarge,
} from "../../themes/size";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 30px 0px;
`;

const DesktopContainer = styled(Container)`
  @media ${EXTRA_SMALL_DEVICES} {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;

  @media ${EXTRA_SMALL_DEVICES} {
    display: unset;
  }
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
    text-decoration: none;
    color: ${PRIMARY};
    cursor: pointer;
  }

  a:hover {
    color: ${WHITE};
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
  return (
    <Fragment>
      <DesktopContainer>
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
            {data.libraries.map((library) => (
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
      </DesktopContainer>
      <MobileContainer>
        <Container>
          <a href={data.link} rel="noopener noreferrer" target={"_blank"}>
            <Logo src={data.icon} alt={""} />
          </a>
          <Detail>
            <Name>
              <a href={data.link} rel="noopener noreferrer" target={"_blank"}>
                {data.name}
              </a>
            </Name>
            <Description>
              {data.libraries.map((library) => (
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
      </MobileContainer>
    </Fragment>
  );
}

const MemoFramework = memo(Framework);

export default MemoFramework;
