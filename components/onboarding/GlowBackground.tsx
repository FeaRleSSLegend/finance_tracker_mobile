import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { colors } from "../../constants/theme";

const { width, height } = Dimensions.get("window");

type GlowBackgroundProps = {
  color?: string;
  secondaryColor?: string;
  position?: "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
};

/**
 * Soft radial glow that sits behind onboarding content.
 * Built from three concentric, semi-transparent circles rather than
 * a gradient shader, so it's immune to the Android gradient-banding
 * issues that both expo-mesh-gradient and expo-linear-gradient hit.
 * Zero native dependencies.
 */
export function GlowBackground({
  color = colors.primary,
  secondaryColor = colors.darkRed,
  position = "top",
}: GlowBackgroundProps) {
  const size = width * 0.85; // smaller, more contained glow

  let anchor: { top: number; left: number };
  if (position === "top") {
    anchor = { top: -size * 0.55, left: width / 2 - size / 2 };
  } else if (position === "bottomLeft") {
    anchor = { top: height * 0.55, left: -size * 0.45 };
  } else if (position === "topLeft") {
    anchor = { top: -size * 0.55, left: -size * 0.45 };
  } else if (position === "topRight") {
    anchor = { top: -size * 0.55, left: size * 0.45 };
  } else {
    anchor = { top: height * 0.55, left: width - size * 0.55 };
  }

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <View style={StyleSheet.absoluteFill}>
        <View
          style={[
            styles.ring,
            {
              width: size * 1.3,
              height: size * 1.3,
              top: anchor.top - size * 0.15,
              left: anchor.left - size * 0.15,
              backgroundColor: secondaryColor,
              opacity: 0.12,
            },
          ]}
        />
        <View
          style={[
            styles.ring,
            {
              width: size * 0.9,
              height: size * 0.9,
              top: anchor.top + size * 0.05,
              left: anchor.left + size * 0.05,
              backgroundColor: color,
              opacity: 0.16,
            },
          ]}
        />
        <View
          style={[
            styles.ring,
            {
              width: size * 0.5,
              height: size * 0.5,
              top: anchor.top + size * 0.25,
              left: anchor.left + size * 0.25,
              backgroundColor: color,
              opacity: 0.22,
            },
          ]}
        />
      </View>
      <BlurView style={StyleSheet.absoluteFill} intensity={35} tint="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    position: "absolute",
    borderRadius: 9999,
  },
});