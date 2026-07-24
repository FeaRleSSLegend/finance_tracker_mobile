import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;

interface LogoutButtonProps {
  label?: string;
  onPress?: () => void;
}

export const LogoutButton = ({ label = "Log Out", onPress }: LogoutButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name="log-out-outline" size={18} color={colors.primary} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: "#3A1418",
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.sm,
  },
  label: {
    color: colors.primary,
    fontSize: fontSize.bodyLg,
    fontFamily: fontFamily.bodySemibold,
  },
});