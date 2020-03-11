import React from "react";
import styled from "styled-components";

import useLanguage from "../../hooks/useLanguage";

import { PRIMARY, WHITE } from "../../themes/colors";
import { SMALL_DEVICES, normal, large, xLarge } from "../../themes/size";

const EducationItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 30px 0px;

  @media ${SMALL_DEVICES} {
    align-items: flex-start;
  }
`;

const EducationLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-top: 0px;
  margin-right: 20px;
  
  @media ${SMALL_DEVICES} {
    width: 60px;
    height: 60px;
    margin-top: 5px;
  }
`;

const EducationDetail = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const EducationName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  ${xLarge}
  margin-right: 20px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: dashed 1px ${PRIMARY};

  a {
    color: ${PRIMARY};
  }

  p {
    color: ${WHITE};
    font-weight: 400;
    ${normal}
  }

  @media ${SMALL_DEVICES} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-bottom: 10px;

    a {
      margin-bottom: 5px;
    }
  }
`;

const EducationDescription = styled.div`
  color: ${WHITE};
  ${large}

  span {
    color: ${PRIMARY};
  }
`;

const LinkCustom = styled.a`
  text-decoration: none;
  color: ${WHITE};
  cursor: pointer;

  &:hover {
    color: ${PRIMARY};
  }
`;

function Course({ data }) {
  const text = useLanguage();

  return (
    <EducationItem>
      <a href={data.link}>
        <EducationLogo src={data.icon} alt={""} />
      </a>
      <EducationDetail>
        <EducationName>
          <LinkCustom href={data.link} target={"_blank"}>
            {text.education.institution[data.institution]}
          </LinkCustom>
          <p>{data.time}</p>
        </EducationName>
        <EducationDescription>
          {text.label.major}: <span>{text.education.major[data.major]}</span>
          <br />
          {text.label.status}: <span>{text.education.status[data.status]}</span>
        </EducationDescription>
      </EducationDetail>
    </EducationItem>
  );
}

export default Course;
