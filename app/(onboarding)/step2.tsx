import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constants/theme";
import { GlowBackground } from "../../components/onboarding/GlowBackground";
import { ProgressDots } from "../../components/onboarding/ProgressDots";
import { GradientButton } from "../../components/onboarding/GradientButton";
import { Wordmark } from "../../components/onboarding/Wordmark";

const { colors, spacing, fontSize, fontFamily, radius, layout } = theme;

type FeatureRowProps = {
  title: string;
  description: string;
};

function FeatureRow({ title, description }: FeatureRowProps) {
  return (
    <View style={{ marginBottom: spacing.xxl }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: spacing.sm }}>
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: radius.full,
            backgroundColor: colors.primary,
            marginRight: spacing.md,
          }}
        />
        <Text
          style={{
            color: colors.white,
            fontSize: fontSize.heading,
            fontFamily: fontFamily.display,
          }}
        >
          {title}
        </Text>
      </View>
      <Text
        style={{
          color: colors.grayMedium,
          fontSize: fontSize.body,
          fontFamily: fontFamily.body,
          paddingLeft: spacing.xl + spacing.sm,
          lineHeight: 22,
        }}
      >
        {description}
      </Text>
    </View>
  );
}

export default function OnboardingScreen2() {
  const handleStart = () => {
    router.push("/(onboarding)/step3");
  };

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar style="light" />
      <GlowBackground position="topRight" />

      <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={{ paddingHorizontal: spacing.xxl, paddingBottom: layout.screenPaddingVertical }}>
          <View style={{ marginBottom: spacing.xxl }}>
            <Wordmark />
          </View>

          <FeatureRow
            title="Build Wealth with Confidence"
            description="Track your spending, grow your savings, and achieve your goals effortlessly."
          />
          <FeatureRow
            title="Smart Financial Planning"
            description="Make informed decisions with real-time insights and personalized recommendations."
          />

          <ProgressDots total={3} activeIndex={1} />
          <GradientButton label="Start Planning" onPress={handleStart} />
          <TouchableOpacity style={{ marginTop: spacing.md }} onPress={handleLogin}>
            <Text
              style={{
                color: colors.grayMedium,
                fontSize: fontSize.body,
                fontFamily: fontFamily.body,
                textAlign: "center",
              }}
            >
              Already have an account?{" "}
              <Text style={{ color: colors.primary, fontFamily: fontFamily.bodySemibold }}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
