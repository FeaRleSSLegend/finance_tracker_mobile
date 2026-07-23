import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const POSITIVE = "#3DD68C";

interface BalanceCardProps {
  balance: number;
  delta: string; // e.g. "12%"
  deltaPositive: boolean;
}

export const BalanceCard = ({ balance, delta, deltaPositive }: BalanceCardProps) => {
  const deltaIcon = deltaPositive ? "arrow-up" : "arrow-down";
  const deltaColor = deltaPositive ? POSITIVE : colors.primary;

  return (
    <LinearGradient
      colors={[colors.deepestRed, colors.black]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <Text style={styles.label}>Total Balance</Text>
      <Text style={styles.amount}>${balance.toFixed(2)}</Text>
      <View style={styles.deltaRow}>
        <Ionicons name={deltaIcon} size={12} color={deltaColor} />
        <Text style={[styles.deltaText, { color: deltaColor }]}>
          {delta} vs last month
        </Text>
      </View>

      <View style={styles.actionsRow}>
        <QuickAction icon="trending-up" label="Income" />
        <QuickAction icon="trending-down" label="Expense" />
        <QuickAction icon="maximize" label="Scan" />
      </View>
    </LinearGradient>
  );
};

function QuickAction({ icon, label }: { icon: keyof typeof Feather.glyphMap; label: string }) {
  return (
    <TouchableOpacity style={styles.quickAction}>
      <View style={styles.quickActionIcon}>
        <Feather name={icon} size={16} color={colors.white} />
      </View>
      <Text style={styles.quickActionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: "#3A1418",
  },
  label: {
    color: "#D9A3A8",
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    marginBottom: spacing.xs,
  },
  amount: {
    color: colors.white,
    fontSize: fontSize.displayLg,
    fontFamily: fontFamily.display,
  },
  deltaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },
  deltaText: {
    fontSize: fontSize.caption,
    fontFamily: fontFamily.bodyMedium,
    marginLeft: 4,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickAction: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: spacing.xs,
  },
  quickActionIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  quickActionLabel: {
    color: colors.white,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.bodyMedium,
  },
});