import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
export const Views = () => {
  return (
    <>
      <View accessible>
        <Text>Hello</Text>
        <Text>Hello again</Text>
      </View>

      <View accessible>
        <Pressable>Hello</Pressable>
      </View>

      <View accessible>
        <Text>Hello</Text>
      </View>

      <View>
        <Text style={styles.header} accessibilityRole="header">
          Hello once more
        </Text>
      </View>

      <Switch />

      <Switch aria-checked />

      <ActivityIndicator accessibilityRole="spinner" />
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 12,
  },
});
