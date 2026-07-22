import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constants/theme";

const { colors, spacing, fontSize, fontWeight, fontFamily, layout, radius } = theme;

const ONBOARDING_KEY = "hasSeenOnboarding";

export default function OnboardingScreen3() {
  const handleGetStarted = async () => {
    try {
      // Save that user has seen onboarding
      await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      // Navigate to main app - replace so they can't go back
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Error saving onboarding status:", error);
      // Even on error, try to go to main app
      router.replace("/(tabs)");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar style="light" />
      
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        padding: spacing.xxl,
        paddingTop: spacing.xxxxxl,
      }}>
        {/* Success icon */}
        <View style={{ 
          width: 80, 
          height: 80, 
          borderRadius: radius.full, 
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: spacing.xxxxl,
        }}>
          <Text style={{ 
            color: colors.white, 
            fontSize: fontSize.displayLg,
            fontFamily: fontFamily.display,
          }}>
            ✓
          </Text>
        </View>

        {/* Brand Name */}
        <Text style={{ 
          color: colors.primary, 
          fontSize: fontSize.displayLg, 
          fontFamily: fontFamily.display,
          marginBottom: spacing.xxl,
        }}>
          Zentra
        </Text>

        {/* Heading */}
        <Text style={{ 
          color: colors.white, 
          fontSize: fontSize.headingXl, 
          fontFamily: fontFamily.display,
          textAlign: "center", 
          marginBottom: spacing.md,
        }}>
          You're All Set!
        </Text>

        {/* Description */}
        <Text style={{ 
          color: colors.grayMedium, 
          fontSize: fontSize.bodyLg, 
          fontFamily: fontFamily.body,
          textAlign: "center", 
          paddingHorizontal: spacing.xl, 
          lineHeight: 24,
        }}>
          Start tracking your finances and take control of your financial future today.
        </Text>
      </View>

      {/* Bottom Button */}
      <View style={{ 
        padding: spacing.xxl, 
        paddingBottom: layout.screenPaddingVertical,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            paddingVertical: spacing.lg,
            borderRadius: radius.md,
            alignItems: "center",
          }}
          onPress={handleGetStarted}  // ← Saves and goes to main app
        >
          <Text style={{ 
            color: colors.white, 
            fontSize: fontSize.bodyLg, 
            fontFamily: fontFamily.bodySemibold,
          }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}