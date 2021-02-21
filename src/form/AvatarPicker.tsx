import React, { useState } from "react";
import { AvatarPickerDialog } from "@atlaskit/media-avatar-picker";
import Avatar from "@atlaskit/avatar";
import { ModalTransition } from "@atlaskit/modal-dialog";
import Button from "@atlaskit/button";
import { Field } from "@atlaskit/form";

// const avatars: Array<Avatar> = [{ dataURI: "some-data-uri" }];

const AvatarPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageDataURI, setImageDataURI] = useState("");

  return (
    <Field name="avatar" defaultValue="" label="avatar">
      {({ fieldProps }) => (
        <>
          <div className="AvatarPicker-container">
            <Avatar src={imageDataURI} size="xlarge" />
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              change image
            </Button>
          </div>
          <ModalTransition>
            {isOpen && (
              <AvatarPickerDialog
                avatars={[]}
                onImagePicked={(selectedImage, crop) => {
                  console.log("onImagePicked");
                }}
                onAvatarPicked={(selectedAvatar) => {
                  console.log("onAvatarPicked", selectedAvatar.dataURI);
                  setImageDataURI(selectedAvatar.dataURI);
                }}
                onImagePickedDataURI={(exportedImg) => {
                  console.log("onImagePickedDataURI");
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

export default AvatarPicker;
