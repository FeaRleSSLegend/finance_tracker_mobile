import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constants/theme";
import { GlowBackground } from "../../components/onboarding/GlowBackground";
import { ProgressDots } from "../../components/onboarding/ProgressDots";
import { GradientButton } from "../../components/onboarding/GradientButton";
import { Wordmark } from "../../components/onboarding/Wordmark";

const { colors, spacing, fontSize, fontFamily, layout } = theme;

export default function OnboardingScreen1() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar style="light" />
      <GlowBackground />

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
          <Text
            style={{
              color: colors.white,
              fontSize: fontSize.headingXl,
              fontFamily: fontFamily.display,
              textAlign: "center",
              marginBottom: spacing.sm,
            }}
          >
            Own Your Money,
          </Text>
          <Text
            style={{
              fontSize: fontSize.headingXl,
              fontFamily: fontFamily.display,
              textAlign: "center",
              marginBottom: spacing.xxl,
            }}
          >
            <Text style={{ color: colors.white }}>Shape </Text>
            <Text style={{ color: colors.primary }}>Your Life.</Text>
          </Text>

          <Text
            style={{
              color: colors.grayMedium,
              fontSize: fontSize.bodyLg,
              fontFamily: fontFamily.body,
              textAlign: "center",
              lineHeight: 24,
              paddingHorizontal: spacing.md,
            }}
          >
            From saving smart to spending wise, your financial goals begin to rise.
          </Text>
        </View>

        <View style={{ paddingHorizontal: spacing.xxl, paddingBottom: layout.screenPaddingVertical }}>
          <ProgressDots total={3} activeIndex={0} />
          <GradientButton label="Next" onPress={() => router.push("/(onboarding)/step2")} />
          <TouchableOpacity
            style={{ marginTop: spacing.md }}
            onPress={() => router.push("/(onboarding)/step2")}
          >
            <Text
              style={{
                color: colors.grayMedium,
                fontSize: fontSize.body,
                fontFamily: fontFamily.body,
                textAlign: "center",
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}