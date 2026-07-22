import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/theme";

const { width } = Dimensions.get("window");
const CENTER_X = width / 2;

type GlowBackgroundProps = {
  color?: string;
  secondaryColor?: string;
};

/**
 * Soft radial glow that sits behind onboarding content.
 * Built from three concentric, semi-transparent circles rather than
 * an SVG radial gradient, so it stays a zero-dependency drop-in.
 */
export function GlowBackground({
  color = colors.primary,
  secondaryColor = colors.darkRed,
}: GlowBackgroundProps) {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <View style={[styles.ring, styles.ringOuter, { backgroundColor: secondaryColor }]} />
      <View style={[styles.ring, styles.ringMid, { backgroundColor: color }]} />
      <View style={[styles.ring, styles.ringInner, { backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    position: "absolute",
    borderRadius: 9999,
  },
  ringOuter: {
    width: width * 1.5,
    height: width * 1.5,
    top: -width * 0.55,
    left: CENTER_X - width * 0.75,
    opacity: 0.14,
  },
  ringMid: {
    width: width * 1.05,
    height: width * 1.05,
    top: -width * 0.4,
    left: CENTER_X - width * 0.525,
    opacity: 0.18,
  },
  ringInner: {
    width: width * 0.65,
    height: width * 0.65,
    top: -width * 0.22,
    left: CENTER_X - width * 0.325,
    opacity: 0.25,
  },
});