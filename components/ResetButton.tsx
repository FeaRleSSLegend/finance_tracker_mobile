import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../constants/theme";

const { colors, spacing, radius, fontSize, fontFamily } = theme;

const ONBOARDING_KEY = "hasSeenOnboarding";

export const ResetOnboardingButton = () => {
  const handleReset = async () => {
    Alert.alert(
      "Reset Onboarding",
      "This will mark onboarding as not seen. The app will show onboarding on next launch.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: async () => {
            try {
              // Remove the key so it's treated as "not seen"
              await AsyncStorage.removeItem(ONBOARDING_KEY);
              Alert.alert("Success", "Onboarding has been reset. Restart the app to see it.");
            } catch (error) {
              console.error("Error resetting onboarding:", error);
              Alert.alert("Error", "Failed to reset onboarding.");
            }
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleReset}>
      <Text style={styles.text}>Reset Onboarding</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.xl,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyMedium,
  },
});