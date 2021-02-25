import React from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import Avatar from "@atlaskit/avatar";
import Spinner from "@atlaskit/spinner";
import SectionMessage from "@atlaskit/section-message";
import { IProfileData } from "../types";
import { FIELDS } from "../utils/fieldsSettings";

type LocationState = {
  displaySuccessBanner?: boolean;
};

interface IPreviewProfile extends RouteComponentProps<{}, any, LocationState> {
  data?: IProfileData;
}

const PreviewProfile = ({ location, data }: IPreviewProfile) => {
  console.log(Object.keys(data || {}).length);
  return (
    <div className="PreviewProfile">
      {location?.state?.displaySuccessBanner && (
        <SectionMessage appearance="confirmation">
          <p>All profile details are saved</p>
        </SectionMessage>
      )}
      <h1>Your Profile</h1>
      {!data && <Spinner size="large" />}
      {data && <Avatar src={data.avatar || ""} size="xxlarge" />}
      {data && data.userId ? (
        <dl>
          <div className="dataRow">
            <dt className="label">{FIELDS.FIRST_NAME.label}:</dt>
            <dd className="value">{data.firstname}</dd>
          </div>
          <div className="dataRow">
            <dt className="label">{FIELDS.LAST_NAME.label}:</dt>
            <dd className="value">{data.lastname}</dd>
          </div>
          <div className="dataRow">
            <dt className="label">{FIELDS.EMAIL.label}:</dt>
            <dd className="value">{data.email}</dd>
          </div>
          <div className="dataRow">
            <dt className="label">{FIELDS.PHONE.label}:</dt>
            <dd className="value">{data.phoneNumber}</dd>
          </div>
          <div className="dataRow">
            <dt className="label">{FIELDS.DOB.label}:</dt>
            <dd className="value">{data.dob}</dd>
          </div>
          <div className="dataRow">
            <dt className="label">{FIELDS.ABOUT.label}:</dt>
            <dd className="value">{data.about}</dd>
          </div>
        </dl>
      ) : (
        <>
          <Link to="/edit">Create Profile</Link>
        </>
      )}
    </div>
  );
};

export default withRouter(PreviewProfile);
