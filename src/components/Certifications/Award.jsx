import React from "react";
import styled from "styled-components";

import useLanguage from "../../hooks/useLanguage";

import { PRIMARY, WHITE } from "../../themes/colors";
import { SMALL_DEVICES, normal, xLarge, large } from "../../themes/size";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 0px;

  @media ${SMALL_DEVICES} {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100px;
  object-fit: contain;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 5px;

  @media ${SMALL_DEVICES} {
    align-self: center;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;

const Detail = styled.div`
  flex: 1;
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
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  img {
    height: 25px;
    margin-right: 5px;
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
      flex-direction: column;
      margin-bottom: 5px;
    }

    img {
      margin-bottom: 5px;
    }
  }
`;

const Description = styled.div`
  word-break: break-word;
  color: ${WHITE};
  ${large}

  p {
    margin-bottom: 5px;
  }

  a {
    text-decoration: none;
    color: ${PRIMARY};
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Award({ data }) {
  const text = useLanguage();

  return (
    <Container>
      <Image src={data.image} alt={""} />
      <Detail>
        <Name>
          <strong>
            <img src={data.logo} alt={""} />
            {data.name}
          </strong>
          <p>{data.date}</p>
        </Name>
        <Description>
          <p>{text.certifications.description[data.description]}</p>
          <p>
            {text.label.company}:{" "}
            <a href={data.link} rel="noopener noreferrer" target={"_blank"}>
              {text.company[data.company]}
            </a>
          </p>
        </Description>
      </Detail>
    </Container>
  );
}

export default Award;
