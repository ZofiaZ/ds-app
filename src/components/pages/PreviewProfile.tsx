import React, { FunctionComponent } from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import Avatar from "@atlaskit/avatar";
import Spinner from "@atlaskit/spinner";
import SectionMessage from "@atlaskit/section-message";
import PageTitle from "../layout/PageTitle";
import { IProfileData } from "../../types";
import { FIELDS } from "../../utils/fieldsSettings";
import styled from "styled-components";
import { colors, spacings } from "../../utils/styles";

type LocationState = {
  displaySuccessBanner?: boolean;
};

interface IPreviewProfile extends RouteComponentProps<{}, any, LocationState> {
  data?: IProfileData;
}

const ProfileContainer = styled.section`
  border: 2px solid ${colors.border};
  padding: ${spacings.offset};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;

  dl {
    padding: 0;
  }

  footer {
    width: 100%;
    text-align: right;
    margin-top: ${spacings.offset};
  }
`;

const AvatarContainer = styled.div`
  padding: ${spacings.offset};
  background-color: ${colors.lightGrey};
  text-align: center;
`;

const DataRow = styled.div`
  padding: 10px;
  text-align: left;
  width: 100%;
  display: flex;

  dt {
    font-weight: bold;
    min-width: 110px;
  }

  dd {
    margin: 0;
  }
`;

const PreviewProfile: FunctionComponent<IPreviewProfile> = ({
  location,
  data,
}) => {
  return (
    <>
      {location?.state?.displaySuccessBanner && (
        <SectionMessage appearance="confirmation">
          <p>All profile details are saved</p>
        </SectionMessage>
      )}
      <PageTitle>Your Profile</PageTitle>
      <AvatarContainer>
        <Avatar src={data?.avatar || ""} size="xxlarge" />
      </AvatarContainer>
      <ProfileContainer>
        {!data && <Spinner size="large" />}
        {data &&
          (data.userId ? (
            <>
              <dl>
                <DataRow>
                  <dt>{FIELDS.FIRST_NAME.label}:</dt>
                  <dd>{data.firstname}</dd>
                </DataRow>
                <DataRow>
                  <dt>{FIELDS.LAST_NAME.label}:</dt>
                  <dd>{data.lastname}</dd>
                </DataRow>
                <DataRow>
                  <dt>{FIELDS.EMAIL.label}:</dt>
                  <dd>{data.email}</dd>
                </DataRow>
                <DataRow>
                  <dt>{FIELDS.PHONE.label}:</dt>
                  <dd>{data.phoneNumber}</dd>
                </DataRow>
                <DataRow>
                  <dt>{FIELDS.DOB.label}:</dt>
                  <dd>{data.dob}</dd>
                </DataRow>
                <DataRow>
                  <dt>{FIELDS.ABOUT.label}:</dt>
                  <dd>{data.about}</dd>
                </DataRow>
              </dl>
              <footer>
                <Link to="/edit">Edit profile details</Link>
              </footer>
            </>
          ) : (
            <>
              <p>
                <span>Your profile is empty - </span>
                <Link to="/edit">Add profile details</Link>
              </p>
            </>
          ))}
      </ProfileContainer>
    </>
  );
};

export default withRouter(PreviewProfile);
