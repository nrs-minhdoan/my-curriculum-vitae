import React, { Fragment } from "react";
import styled from "styled-components";

import useLanguage from "../../hooks/useLanguage";

import { PRIMARY, WHITE } from "../../themes/colors";
import { SMALL_DEVICES, normal, xLarge, large } from "../../themes/size";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0px;

  @media ${SMALL_DEVICES} {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 200px;
  object-fit: contain;
  margin-right: 20px;
  margin-left: 10px;

  @media ${SMALL_DEVICES} {
    margin-bottom: 20px;
  }
`;

const Detail = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: dashed 1px ${PRIMARY};

  strong {
    color: ${PRIMARY};
    font-weight: 700;
    ${xLarge}
  }

  p {
    color: ${WHITE};
    font-weight: 400;
    ${normal}
  }

  @media ${SMALL_DEVICES} {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 0px;
    padding-bottom: 10px;
    margin-bottom: 10px;

    strong {
      margin-bottom: 5px;
    }
  }
`;

const Description = styled.div`
  color: ${WHITE};
  ${large}

  p {
    margin-bottom: 5px;
  }

  span {
    color: ${PRIMARY};
  }

  a {
    font-style: italic;
    text-decoration: none;
    color: ${PRIMARY};
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Project({ data }) {
  const text = useLanguage();

  return (
    <Container>
      <Logo src={data.icon} alt={""} />
      <Detail>
        <Name>
          <strong>{data.name}</strong>
          <p>
            {data.time +
              (data.status === "running"
                ? ` - ${text.experience.time.current}`
                : "")}
          </p>
        </Name>
        <Description>
          <p>{text.experience.description[data.description]}</p>
          <p>
            {text.label.customer}: <span>{data.customer}</span>
          </p>
          <p>
            {text.label.position}: <span>{data.position}</span>
          </p>
          {data.status === "running" && (
            <p>
              {text.label.product}:{" "}
              <a
                href={data.product}
                rel="noopener noreferrer"
                target={"_blank"}
              >
                {data.product}
              </a>
            </p>
          )}
          <p>
            {text.label.platform}:{" "}
            {data.platform.map((item, index) => (
              <Fragment key={item}>
                <span>{item}</span>
                {data.platform.length > 2 && index < data.platform.length - 1
                  ? ", "
                  : ""}
              </Fragment>
            ))}
          </p>
          <p>
            {text.label.languages}:{" "}
            {data.languages.map(item => (
              <Fragment key={item}>
                <span>{item}</span>,{" "}
              </Fragment>
            ))}
            ...
          </p>
          <p>
            {text.label.technologies}:{" "}
            {data.technologies.map(item => (
              <Fragment key={item}>
                <span>{item}</span>,{" "}
              </Fragment>
            ))}
            ...
          </p>
          <p>
            {text.label.database}:{" "}
            {data.database.map(item => (
              <Fragment key={item}>
                <span>{item}</span>,{" "}
              </Fragment>
            ))}
            ...
          </p>
          <p>
            {text.label.tools}:{" "}
            {data.tools.map(item => (
              <Fragment key={item}>
                <span>{item}</span>,{" "}
              </Fragment>
            ))}
            ...
          </p>
          <p>
            {text.label.mainRoles}:{" "}
            {data.mainRoles.map(item => (
              <p key={item} style={{ marginLeft: "50px" }}>
                ● {item}
              </p>
            ))}
          </p>
        </Description>
      </Detail>
    </Container>
  );
}

export default Project;
