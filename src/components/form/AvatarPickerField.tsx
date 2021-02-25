import React, { useState } from "react";
import { AvatarPickerDialog } from "@atlaskit/media-avatar-picker";
import Avatar from "@atlaskit/avatar";
import { ModalTransition } from "@atlaskit/modal-dialog";
import Button from "@atlaskit/button";
import { Field } from "@atlaskit/form";
import styled from "styled-components";
import { colors, spacings } from "../../utils/styles";

type PropTypes = {
  name: string;
  label: string;
  defaultValue?: string;
};

const AvatarContainer = styled.div`
  padding: ${spacings.offset};
  display: flex;
  align-items: center;

  button {
    margin-left: ${spacings.offset};
  }
`;

const AvatarPickerField = ({ name, label, defaultValue = "" }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageDataURI, setImageDataURI] = useState(defaultValue);

  return (
    <Field name={name} defaultValue="" label={label}>
      {({ fieldProps }) => (
        <>
          <AvatarContainer>
            <Avatar src={imageDataURI} size="xlarge" />
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {imageDataURI ? "change image" : "add image"}
            </Button>
          </AvatarContainer>
          <ModalTransition>
            {isOpen && (
              <AvatarPickerDialog
                avatars={[]}
                onAvatarPicked={(selectedAvatar) => {
                  setImageDataURI(selectedAvatar.dataURI);
                }}
                onImagePickedDataURI={(exportedImg) => {
                  setImageDataURI(exportedImg);
                  fieldProps.onChange(exportedImg);
                  setIsOpen(false);
                }}
                onCancel={() => {
                  setIsOpen(false);
                }}
              />
            )}
          </ModalTransition>
        </>
      )}
    </Field>
  );
};

export default AvatarPickerField;
