import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const CARD_BG = "#131316";
const CARD_BORDER = "#232326";
const POSITIVE = "#3DD68C";

interface StatCardProps {
  label: string;
  amount: string;
  percentage: string; // e.g. "+40%"
  positive: boolean;
}

export const StatCard = ({ label, amount, percentage, positive }: StatCardProps) => {
  const badgeColor = positive ? POSITIVE : colors.primary;
  const bgColor = positive ? `${POSITIVE}22` : `${colors.primary}22`;

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <View style={[styles.badge, { backgroundColor: bgColor }]}>
        <Text style={[styles.badgeText, { color: badgeColor }]}>{percentage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginRight: spacing.sm,
  },
  label: {
    color: colors.grayMedium,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.body,
    marginBottom: spacing.xs,
  },
  amount: {
    color: colors.white,
    fontSize: fontSize.bodyLg,
    fontFamily: fontFamily.displaySemibold,
    marginBottom: spacing.sm,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: fontFamily.bodySemibold,
  },
});