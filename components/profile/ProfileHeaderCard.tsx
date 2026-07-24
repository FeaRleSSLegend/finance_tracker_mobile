import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const CARD_BG = "#131316";
const CARD_BORDER = "#232326";

interface ProfileHeaderCardProps {
  name: string;
  email: string;
  initials: string;
  memberSince?: string;
  onEditPress?: () => void;
  onAvatarPress?: () => void;
}

export const ProfileHeaderCard = ({
  name,
  email,
  initials,
  memberSince,
  onEditPress,
  onAvatarPress,
}: ProfileHeaderCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarWrap}>
        <LinearGradient
          colors={[colors.primary, colors.darkRed]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.avatar}
        >
          <Text style={styles.avatarText}>{initials}</Text>
        </LinearGradient>
        <TouchableOpacity style={styles.editBadge} onPress={onAvatarPress} activeOpacity={0.8}>
          <Ionicons name="pencil" size={12} color={colors.white} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      {memberSince ? <Text style={styles.meta}>Member since {memberSince}</Text> : null}

      <TouchableOpacity style={styles.editButton} onPress={onEditPress} activeOpacity={0.85}>
        <Ionicons name="create-outline" size={16} color={colors.white} />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: radius.lg,
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.xl,
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  avatarWrap: {
    marginBottom: spacing.md,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: colors.white,
    fontSize: fontSize.headingLg,
    fontFamily: fontFamily.display,
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: "#0A0A0C",
    borderWidth: 2,
    borderColor: CARD_BG,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: colors.white,
    fontSize: fontSize.headingLg,
    fontFamily: fontFamily.displaySemibold,
  },
  email: {
    color: colors.grayMedium,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    marginTop: 2,
  },
  meta: {
    color: colors.grayDark,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.body,
    marginTop: spacing.xs,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
    marginTop: spacing.lg,
  },
  editButtonText: {
    color: colors.white,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodySemibold,
  },
});