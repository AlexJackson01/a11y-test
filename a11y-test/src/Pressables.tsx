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
        accessibilityLabel="Click me"
        accessibilityRole="button"
      >
        <Text>Click me</Text>
      </TouchableOpacity>

      <TouchableHighlight
        onPress={() => {}}
        accessibilityLabel="Press me"
        accessibilityRole="button"
      >
        <Text>press ME</Text>
      </TouchableHighlight>

      <Button title="Click me" accessibilityLabel="Click me" />

      <Pressable onPress={() => {}} accessibilityRole="button" />

      <Button title={title} accessibilityLabel={title} />

      <Button
        title={startOfDay(new Date()).toISOString()}
        accessibilityLabel={startOfDay(new Date()).toISOString()}
      />

      <Pressable
        onPress={() => {}}
        accessibilityRole="click"
        accessibilityLabel={text}
      >
        <Text>{text}</Text>
      </Pressable>
    </>
  );
};
