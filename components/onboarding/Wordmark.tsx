import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors, fontSize, fontFamily } from "../../constants/theme";

export function Wordmark() {
  return <Text style={styles.text}>Zentra</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: fontSize.subheading,
    fontFamily: fontFamily.display,
  },
});