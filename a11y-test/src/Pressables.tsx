import { startOfDay } from "date-fns";
import React from "react";
import {
  TouchableOpacity,
  Text,
  Button,
  Pressable,
  TouchableHighlight,
} from "react-native";
type PressablesProps = {
  title: string;
  text: string;
};
export const Pressables = ({ title, text }: PressablesProps) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {}}
      >
        <Text>Click me</Text>
      </TouchableOpacity>

      <TouchableHighlight
        onPress={() => {}}
      >
        <Text>press ME</Text>
      </TouchableHighlight>

      <Button title="Click me" />

      <Pressable onPress={() => {}} />

      <Button title={title} />

      <Button
        title={startOfDay(new Date()).toISOString()}
      />

      <Pressable
        onPress={() => {}}
        accessibilityRole="click"
      >
        <Text>{text}</Text>
      </Pressable>
    </>
  );
};
