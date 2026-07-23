import { View, Text, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../constants/theme";
//import { MeshBackground } from "../../components/onboarding/MeshBackground";
import { GlowBackground } from "../../components/onboarding/GlowBackground";
import { GradientButton } from "../../components/onboarding/GradientButton";
import { Wordmark } from "../../components/onboarding/Wordmark";

const { colors, spacing, fontSize, fontFamily, layout, radius } = theme;

const ONBOARDING_KEY = "hasSeenOnboarding";

export default function OnboardingScreen3() {
  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      router.replace("/(tabs)");
      router.push("/(tabs)/home")
    } catch (error) {
      console.error("Error saving onboarding status:", error);
      router.replace("/(tabs)");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar style="light" />
      <GlowBackground position="bottomRight" />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: spacing.xxl, paddingTop: spacing.lg }}>
          <Wordmark />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: spacing.xxl,
          }}
        >
          <LinearGradient
            colors={[colors.primary, colors.darkRed]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 80,
              height: 80,
              borderRadius: radius.full,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: spacing.xxl,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: fontSize.displayLg,
                fontFamily: fontFamily.display,
              }}
            >
              ✓
            </Text>
          </LinearGradient>

          <Text
            style={{
              color: colors.white,
              fontSize: fontSize.headingXl,
              fontFamily: fontFamily.display,
              textAlign: "center",
              marginBottom: spacing.md,
            }}
          >
            You're All Set!
          </Text>

          <Text
            style={{
              color: colors.grayMedium,
              fontSize: fontSize.bodyLg,
              fontFamily: fontFamily.body,
              textAlign: "center",
              paddingHorizontal: spacing.xl,
              lineHeight: 24,
            }}
          >
            Start tracking your finances and take control of your financial future today.
          </Text>
        </View>

        <View style={{ paddingHorizontal: spacing.xxl, paddingBottom: layout.screenPaddingVertical }}>
          <GradientButton label="Get Started" onPress={handleGetStarted} />
        </View>
      </SafeAreaView>
    </View>
  );
}