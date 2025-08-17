import React from "react";
import { Image } from "react-native";
export const Images = () => {
  return (
    <>
      <Image accessibilityRole="image" />
      <Image
        alt="image of"
        accessibilityLabel="Image of"
        accessibilityRole="image"
      />

      <Image accessibilityRole="image" />
    </>
  );
};
