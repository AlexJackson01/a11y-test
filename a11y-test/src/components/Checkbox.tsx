import React from "react";
import { StyleSheet, Text, View } from "react-native";
export const Checkbox = () => {
  return (
    <View accessibilityRole="checkbox">
      <Text style={styles.header} accessibilityRole="header">
        Hello once more
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 12,
  },
});
