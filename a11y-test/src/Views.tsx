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
        <Pressable accessibilityRole="button">Hello</Pressable>
      </View>

      <View accessible accessibilityLabel="Hello">
        <Text>Hello</Text>
      </View>

      <View>
        <Text style={styles.header} accessibilityRole="header">
          Hello once more
        </Text>
      </View>

      <Switch accessibilityRole="switch" />

      <Switch aria-checked accessibilityRole="switch" />

      <ActivityIndicator accessibilityRole="spinner" />
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 12,
  },
});
