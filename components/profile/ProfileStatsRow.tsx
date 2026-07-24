import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const CARD_BG = "#131316";
const CARD_BORDER = "#232326";

export interface ProfileStat {
  id: string;
  label: string;
  value: string;
}

interface ProfileStatsRowProps {
  stats: ProfileStat[];
}

export const ProfileStatsRow = ({ stats }: ProfileStatsRowProps) => {
  return (
    <View style={styles.card}>
      {stats.map((stat, index) => (
        <View key={stat.id} style={styles.itemWrap}>
          <View style={styles.item}>
            <Text style={styles.value}>{stat.value}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </View>
          {index !== stats.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    marginBottom: spacing.xl,
  },
  itemWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  value: {
    color: colors.white,
    fontSize: fontSize.bodyLg,
    fontFamily: fontFamily.displaySemibold,
  },
  label: {
    color: colors.grayMedium,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.body,
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: CARD_BORDER,
  },
});