import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { ScreenHeader } from "../../components/ui/ScreenHeader";
import { ProfileHeaderCard } from "../../components/profile/ProfileHeaderCard";
import { ProfileStatsRow, ProfileStat } from "../../components/profile/ProfileStatsRow";
import { ProfileMenuGroup, ProfileMenuItem } from "../../components/profile/ProfileMenuGroup";
import { LogoutButton } from "../../components/profile/LogoutButton";

const { colors, spacing, fontSize, fontFamily, radius } = theme;

// Dummy user — swap for real profile data once auth/local storage is wired up.
const user = {
  name: "John Nathaniel",
  email: "john@raynox.site",
  initials: "JN",
  memberSince: "Jan 2025",
};

// Kept consistent with the Home screen's dummy stats ($1,580 expenses).
const profileStats: ProfileStat[] = [
  { id: "goals", label: "Active Goals", value: "3" },
  { id: "spent", label: "This Month", value: "$1,580" },
  { id: "since", label: "Member Since", value: "2025" },
];

export default function ProfileScreen() {
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const preferencesItems: ProfileMenuItem[] = [
    { id: "currency", icon: "cash-outline", label: "Currency", type: "value", value: "USD" },
    { id: "appearance", icon: "color-palette-outline", label: "Appearance", type: "value", value: "Dark" },
    { id: "language", icon: "language-outline", label: "Language", type: "value", value: "English" },
    {
      id: "notifications",
      icon: "notifications-outline",
      label: "Notifications",
      type: "toggle",
      toggled: notificationsEnabled,
      onToggle: setNotificationsEnabled,
    },
  ];

  const securityItems: ProfileMenuItem[] = [
    {
      id: "biometric",
      icon: "finger-print-outline",
      label: "Biometric Login",
      type: "toggle",
      toggled: biometricEnabled,
      onToggle: setBiometricEnabled,
    },
    { id: "pin", icon: "lock-closed-outline", label: "Change PIN", type: "link" },
    { id: "devices", icon: "phone-portrait-outline", label: "Manage Devices", type: "link" },
  ];

  const dataItems: ProfileMenuItem[] = [
    { id: "export", icon: "download-outline", label: "Export Data (CSV)", type: "link" },
    { id: "budgets", icon: "pie-chart-outline", label: "Manage Budgets", type: "link" },
    { id: "clear", icon: "trash-outline", label: "Clear All Data", type: "link", destructive: true },
  ];

  const supportItems: ProfileMenuItem[] = [
    { id: "help", icon: "help-circle-outline", label: "Help Center", type: "link" },
    { id: "rate", icon: "star-outline", label: "Rate the App", type: "link" },
    { id: "about", icon: "information-circle-outline", label: "About", type: "value", value: "v1.0.0" },
  ];

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader
          leftElement={<Text style={styles.headerTitle}>Profile</Text>}
          rightElement={
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="settings-outline" size={20} color={colors.white} />
            </TouchableOpacity>
          }
        />

        <ProfileHeaderCard
          name={user.name}
          email={user.email}
          initials={user.initials}
          memberSince={user.memberSince}
        />

        <ProfileStatsRow stats={profileStats} />

        <ProfileMenuGroup title="Preferences" items={preferencesItems} />
        <ProfileMenuGroup title="Security" items={securityItems} />
        <ProfileMenuGroup title="Data" items={dataItems} />
        <ProfileMenuGroup title="Support" items={supportItems} />

        <LogoutButton />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxxl,
  },
  headerTitle: {
    color: colors.white,
    fontSize: fontSize.headingLg,
    fontFamily: fontFamily.display,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    backgroundColor: "#131316",
    borderWidth: 1,
    borderColor: "#232326",
    justifyContent: "center",
    alignItems: "center",
  },
});