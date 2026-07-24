import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const CARD_BG = "#131316";
const CARD_BORDER = "#232326";

export interface ProfileMenuItem {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  type?: "link" | "value" | "toggle";
  value?: string; // shown before the chevron when type === "value"
  toggled?: boolean; // used when type === "toggle"
  onToggle?: (next: boolean) => void;
  onPress?: () => void;
  destructive?: boolean;
}

interface ProfileMenuGroupProps {
  title?: string;
  items: ProfileMenuItem[];
}

export const ProfileMenuGroup = ({ title, items }: ProfileMenuGroupProps) => {
  return (
    <View style={styles.wrapper}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.card}>
        {items.map((item, index) => {
          const tint = item.destructive ? colors.primary : colors.white;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.row, index !== items.length - 1 && styles.divider]}
              onPress={item.onPress}
              activeOpacity={item.type === "toggle" ? 1 : 0.7}
              disabled={item.type === "toggle" && !item.onPress}
            >
              <View style={styles.iconWrap}>
                <Ionicons
                  name={item.icon}
                  size={18}
                  color={item.destructive ? colors.primary : colors.grayMedium}
                />
              </View>
              <Text style={[styles.label, { color: tint }]}>{item.label}</Text>

              {item.type === "toggle" ? (
                <Switch
                  value={item.toggled}
                  onValueChange={item.onToggle}
                  trackColor={{ false: CARD_BORDER, true: colors.primary }}
                  thumbColor={colors.white}
                />
              ) : (
                <View style={styles.rightRow}>
                  {item.type === "value" && item.value ? (
                    <Text style={styles.value}>{item.value}</Text>
                  ) : null}
                  <Ionicons name="chevron-forward" size={16} color={colors.grayDark} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.xl,
  },
  title: {
    color: colors.grayMedium,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.bodySemibold,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
    marginLeft: spacing.xs,
  },
  card: {
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: CARD_BORDER,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: "#1C1C1F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  label: {
    flex: 1,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyMedium,
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  value: {
    color: colors.grayMedium,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
  },
});