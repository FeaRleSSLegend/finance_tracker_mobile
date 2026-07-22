import React from "react";
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, spacing, radius, fontSize, fontFamily } from "../../constants/theme";

type GradientButtonProps = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

export function GradientButton({ label, onPress }: GradientButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <LinearGradient
        colors={[colors.primary, colors.darkRed]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
  },
  label: {
    color: colors.white,
    fontSize: fontSize.bodyLg,
    fontFamily: fontFamily.bodySemibold,
  },
});