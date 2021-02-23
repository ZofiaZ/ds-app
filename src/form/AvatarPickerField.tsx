import React, { useState } from "react";
import { AvatarPickerDialog } from "@atlaskit/media-avatar-picker";
import Avatar from "@atlaskit/avatar";
import { ModalTransition } from "@atlaskit/modal-dialog";
import Button from "@atlaskit/button";
import { Field } from "@atlaskit/form";

type PropTypes = {
  name: string;
  label: string;
  defaultValue?: string;
};

const AvatarPickerField = ({ name, label, defaultValue = "" }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageDataURI, setImageDataURI] = useState(defaultValue);

  return (
    <Field name={name} defaultValue="" label={label}>
      {({ fieldProps }) => (
        <>
          <div className="AvatarPicker-container">
            <Avatar src={imageDataURI} size="xlarge" />
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {imageDataURI ? "change image" : "add image"}
            </Button>
          </div>
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
