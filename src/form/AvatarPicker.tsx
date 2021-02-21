import React, { useState } from "react";
import { AvatarPickerDialog } from "@atlaskit/media-avatar-picker";
import { ModalTransition } from "@atlaskit/modal-dialog";
import Button from "@atlaskit/button";

// const avatars: Array<Avatar> = [{ dataURI: "some-data-uri" }];

const AvatarPicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Upload Profile Picture
      </Button>
      <ModalTransition>
        {isOpen && (
          <AvatarPickerDialog
            avatars={[]}
            onImagePicked={(selectedImage, crop) => {
              console.log(selectedImage.size, crop.x, crop.y, crop.size);
            }}
            onAvatarPicked={(selectedAvatar) =>
              console.log(selectedAvatar.dataURI)
            }
            onCancel={() => {
              setIsOpen(false);
            }}
          />
        )}
      </ModalTransition>
    </>
  );
};

export default AvatarPicker;
