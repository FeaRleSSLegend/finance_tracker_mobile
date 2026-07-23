import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const CARD_BG = "#131316";
const CARD_BORDER = "#232326";

interface ScreenHeaderProps {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  extraElement?: ReactNode;
}

export const ScreenHeader = ({ leftElement, rightElement, extraElement }: ScreenHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>{leftElement}</View>
      <View style={styles.rightContainer}>
        {rightElement}
        {extraElement}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: spacing.md,
    marginBottom: spacing.xl,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
});