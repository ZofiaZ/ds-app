import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@atlaskit/avatar";
import { getProfileData } from "../utils/api";
import { FIELDS } from "../utils/fieldsSettings";

function PreviewProfile() {
  const [data, setData] = useState<ProfileDataResponse>();

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileData();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="PreviewProfile">
      <h1>Preview Profile</h1>

      {data?.email ? (
        <>
          <Avatar src={data.avatar || ""} size="xxlarge" />
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
        </>
      ) : (
        <Link to="/edit">Create Profile</Link>
      )}
    </div>
  );
}

type ProfileDataResponse = {
  avatar?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  dob?: string;
  phoneNumber?: string;
  about?: string;
};

export default PreviewProfile;
