import React from "react";
import { StyleSheet, View } from "react-native";
import { MeshGradientView } from "expo-mesh-gradient";
import { BlurView } from "expo-blur";
import { colors } from "../../constants/theme";

type MeshBackgroundProps = {
  color?: string;
  secondaryColor?: string;
  position?: "top" | "bottomLeft" | "bottomRight";
};

// Mixes two hex colors by t (0 = colorA, 1 = colorB).
// Used to build gradual, many-stop color ramps instead of a hard
// jump between two colors, which is what was causing visible
// banding/ring artifacts in the mesh interpolation.
function mixHex(hexA: string, hexB: string, t: number): string {
  const a = hexA.replace("#", "");
  const b = hexB.replace("#", "");
  const ar = parseInt(a.substring(0, 2), 16);
  const ag = parseInt(a.substring(2, 4), 16);
  const ab = parseInt(a.substring(4, 6), 16);
  const br = parseInt(b.substring(0, 2), 16);
  const bg = parseInt(b.substring(2, 4), 16);
  const bb = parseInt(b.substring(4, 6), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bch = Math.round(ab + (bb - ab) * t);
  return `#${[r, g, bch].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

// High sampling resolution smooths out the cubic interpolation on
// Android; the default is coarse and produces visible rings.
const RESOLUTION = { x: 48, y: 48 };

/**
 * Native mesh gradient background for onboarding screens.
 * Uses a fine grid with many gradual color stops (instead of a
 * hard black/color/black jump) plus a high sample resolution to
 * avoid Android's mesh-gradient banding artifacts.
 */
export function MeshBackground({
  color = colors.primary,
  secondaryColor = colors.darkRed,
  position = "top",
}: MeshBackgroundProps) {
  // 6-row vertical ramp: bright -> secondary -> black, in small
  // gradual steps rather than 2-3 big jumps.
  const ramp = [
    color,
    mixHex(color, secondaryColor, 0.35),
    mixHex(secondaryColor, colors.black, 0.15),
    mixHex(secondaryColor, colors.black, 0.55),
    mixHex(secondaryColor, colors.black, 0.85),
    colors.black,
  ];

  const edgeRamp = ramp.map((c) => mixHex(c, colors.black, 0.6));

  const columns = 3;
  const rows = ramp.length;

  const meshColors: string[] = [];
  const points: number[][] = [];

  for (let r = 0; r < rows; r++) {
    const y =
      position === "top"
        ? -0.05 + (r / (rows - 1)) * 0.75
        : -0.05 + (r / (rows - 1)) * 1.1;

    for (let c = 0; c < columns; c++) {
      const x = -0.05 + (c / (columns - 1)) * 1.1;
      points.push([x, y]);

      // center column gets the brighter ramp, edges get the dimmer one
      const isCenter = c === 1;
      let rowColor = isCenter ? ramp[r] : edgeRamp[r];

      // For bottomLeft/bottomRight, mirror which column is "center"
      // of the glow so it hugs a corner instead of the top-middle.
      if (position === "bottomLeft") {
        rowColor = c === 0 ? ramp[rows - 1 - r] : edgeRamp[rows - 1 - r];
      } else if (position === "bottomRight") {
        rowColor = c === columns - 1 ? ramp[rows - 1 - r] : edgeRamp[rows - 1 - r];
      }

      meshColors.push(rowColor);
    }
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <MeshGradientView
        style={StyleSheet.absoluteFill}
        columns={columns}
        rows={rows}
        colors={meshColors}
        points={points}
        resolution={RESOLUTION}
        smoothsColors
      />
      <BlurView
        style={StyleSheet.absoluteFill}
        intensity={40}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
      />
    </View>
  );
}