import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { theme } from "../../constants/theme";

const { colors, spacing, fontFamily, fontSize, radius } = theme;

const ONBOARDING_KEY = "hasSeenOnboarding";

export default function HomeScreen() {
  const resetOnboarding = async () => {
    Alert.alert(
      "Reset Onboarding",
      "This will clear your onboarding status. You'll see the onboarding screens again. Continue?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(ONBOARDING_KEY);
              Alert.alert("Success", "Onboarding reset. Restarting app...");
              // Reload the app to trigger onboarding again
              router.replace("/(onboarding)");
            } catch (error) {
              console.error("Error resetting onboarding:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to Zentra!</Text>
      
      {/* Reset Button - Remove this after testing */}
      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetOnboarding}
      >
        <Text style={styles.resetButtonText}>Reset Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    padding: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.headingXl,
    fontFamily: fontFamily.display,
    marginBottom: spacing.md,
  },
  subtitle: {
    color: colors.grayMedium,
    fontSize: fontSize.bodyLg,
    fontFamily: fontFamily.body,
    textAlign: "center",
    marginBottom: spacing.xxl,
  },
  resetButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
    borderRadius: radius.md,
    marginTop: spacing.xl,
  },
  resetButtonText: {
    color: colors.white,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodySemibold,
  },
});