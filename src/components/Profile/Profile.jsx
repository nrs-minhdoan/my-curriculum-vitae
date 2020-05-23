import React, { useMemo } from "react";
import moment from "moment";
import styled from "styled-components";

import profile from "../../data/profile";
import useLanguage from "../../hooks/useLanguage";
import AvatarImage from "../../assets/images/img_avatar.jpg";

import { PRIMARY, SECONDARY, WHITE, SHADOW_COLOR } from "../../themes/colors";
import {
  EXTRA_SMALL_DEVICES,
  LARGE_DEVICES,
  normal,
  xLarge,
} from "../../themes/size";
import { changingHeight } from "../../themes/animations";

const Container = styled.div`
  width: 55%;
  height: 180px;
  margin-bottom: 50px;

  @media ${LARGE_DEVICES} {
    width: 80%;
  }

  @media ${EXTRA_SMALL_DEVICES} {
    width: 90%;
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${SECONDARY};
  border-radius: 10px;
  box-shadow: 20px 30px 60px 0px ${SHADOW_COLOR};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  box-sizing: border-box;
  overflow: hidden;
  animation ${changingHeight} 1s ease-in-out;

  @media ${EXTRA_SMALL_DEVICES} {
    padding-top: 30px;
    padding-bottom: 30px;
    flex-direction: column;
  }
`;

const Avatar = styled.div`
  width: 140px;
  height: 140px;
  min-width: 140px;
  min-height: 140px;
  border-radius: 120px;
  background-image: url(${AvatarImage});
  background-size: cover;
  background-position: 10px 0px;
  margin-right: 30px;
  margin-bottom: 0px;

  @media ${EXTRA_SMALL_DEVICES} {
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;

const Position = styled.h1`
  color: ${PRIMARY};
  font-weight: 700;
  ${xLarge}
  text-transform: uppercase;

  @media ${EXTRA_SMALL_DEVICES} {
    text-align: center;
  }
`;

const Name = styled(Position)`
  color: ${WHITE};
  margin-top: 5px;
`;

const Information = styled.div`
  color: ${WHITE};
  ${normal}
  margin-top: 5px;
`;

const LinkCustom = styled.a`
  color: ${WHITE};
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    color: ${PRIMARY};
  }
`;

function Profile() {
  const text = useLanguage();

  const age = useMemo(() => {
    return moment().diff(moment(profile.dob, "DD/MM/YYYY"), "years");
  }, []);

  return (
    <Container>
      <Wrapper>
        <Avatar />
        <div>
          <Position>{profile.position}</Position>
          <Name>{profile.name}</Name>
          <Information>
            {text.label.dob}: {profile.dob} ({age} {text.label.age})
          </Information>
          <Information>
            Email:{" "}
            <LinkCustom href={`mailto:${profile.email}`}>
              {profile.email}
            </LinkCustom>
          </Information>
          <Information>
            Github:
            <LinkCustom href={profile.github} target={"_blank"}>
              {profile.github}
            </LinkCustom>
          </Information>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Profile;
