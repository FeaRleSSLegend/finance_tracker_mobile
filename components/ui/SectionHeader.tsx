import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const { colors, spacing, fontSize, fontFamily } = theme;

interface SectionHeaderProps {
  title: string;
  sideLabel?: string;
}

export const SectionHeader = ({ title, sideLabel = "View all" }: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.link}>{sideLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.subheading,
    fontFamily: fontFamily.displaySemibold,
  },
  link: {
    color: colors.primary,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyMedium,
  },
});