import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constants/theme";

const { colors, spacing, fontSize, fontWeight, fontFamily, layout, radius } = theme;

export default function OnboardingScreen2() {
  const handleStart = () => {
    // Navigate to Screen 3 (NOT the main app!)
    router.push("/(onboarding)/step3");
  };

  const handleLogin = () => {
    // For now, go to main app (you'll connect to auth later)
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar style="light" />
      
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        padding: spacing.xxl,
        paddingTop: spacing.xxxxl,
      }}>
        {/* Brand Name */}
        <Text style={{ 
          color: colors.primary, 
          fontSize: fontSize.displayLg, 
          fontFamily: fontFamily.display,
          marginBottom: spacing.xxxxl,
        }}>
          Zentra
        </Text>

        {/* Feature 1 */}
        <View style={{ marginBottom: spacing.xxxl }}>
          <View style={{ 
            flexDirection: "row", 
            alignItems: "center", 
            marginBottom: spacing.sm 
          }}>
            <View style={{ 
              width: 8, 
              height: 8, 
              borderRadius: radius.full, 
              backgroundColor: colors.primary, 
              marginRight: spacing.md 
            }} />
            <Text style={{ 
              color: colors.white, 
              fontSize: fontSize.heading, 
              fontFamily: fontFamily.display,
            }}>
              Build Wealth with Confidence
            </Text>
          </View>
          <Text style={{ 
            color: colors.grayMedium, 
            fontSize: fontSize.body, 
            fontFamily: fontFamily.body,
            paddingLeft: spacing.xl + spacing.sm, 
            lineHeight: 22,
          }}>
            Track your spending, grow your savings, and achieve your goals effortlessly.
          </Text>
        </View>

        {/* Feature 2 */}
        <View style={{ marginBottom: spacing.xxxl }}>
          <View style={{ 
            flexDirection: "row", 
            alignItems: "center", 
            marginBottom: spacing.sm 
          }}>
            <View style={{ 
              width: 8, 
              height: 8, 
              borderRadius: radius.full, 
              backgroundColor: colors.primary, 
              marginRight: spacing.md 
            }} />
            <Text style={{ 
              color: colors.white, 
              fontSize: fontSize.heading, 
              fontFamily: fontFamily.display,
            }}>
              Smart Financial Planning
            </Text>
          </View>
          <Text style={{ 
            color: colors.grayMedium, 
            fontSize: fontSize.body, 
            fontFamily: fontFamily.body,
            paddingLeft: spacing.xl + spacing.sm, 
            lineHeight: 22,
          }}>
            Make informed decisions with real-time insights and personalized recommendations.
          </Text>
        </View>
      </View>

      {/* Bottom Section */}
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
            marginBottom: spacing.md,
          }}
          onPress={handleStart}  // ← Goes to Screen 3
        >
          <Text style={{ 
            color: colors.white, 
            fontSize: fontSize.bodyLg, 
            fontFamily: fontFamily.bodySemibold,
          }}>
            Start Planning
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin}>
          <Text style={{ 
            color: colors.grayMedium, 
            fontSize: fontSize.body, 
            fontFamily: fontFamily.body,
            textAlign: "center",
          }}>
            Already have an account?{' '}
            <Text style={{ 
              color: colors.primary, 
              fontFamily: fontFamily.bodySemibold,
            }}>
              Log in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}