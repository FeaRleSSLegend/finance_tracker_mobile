import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constants/theme";

const { colors, spacing, fontSize, fontWeight, fontFamily, layout, radius } = theme;

export default function OnboardingScreen1() {
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
        {/* Brand Name - Using Outfit (display font) */}
        <View style={{ marginBottom: spacing.xxxxl }}>
          <Text style={{ 
            color: colors.primary, 
            fontSize: fontSize.displayXl, 
            fontFamily: fontFamily.display, // Outfit Bold
          }}>
            Zentra
          </Text>
        </View>

        {/* Tagline - Using Outfit */}
        <Text style={{ 
          color: colors.white, 
          fontSize: fontSize.headingXl, 
          fontFamily: fontFamily.display,
          textAlign: "center", 
          marginBottom: spacing.md,
        }}>
          Own Your Money,
        </Text>
        <Text style={{ 
          color: colors.white, 
          fontSize: fontSize.headingXl, 
          fontFamily: fontFamily.display,
          textAlign: "center", 
          marginBottom: spacing.xxl,
        }}>
          Shape Your Life.
        </Text>

        {/* Description - Using Poppins (body font) */}
        <Text style={{ 
          color: colors.grayMedium, 
          fontSize: fontSize.bodyLg, 
          fontFamily: fontFamily.body,
          textAlign: "center", 
          paddingHorizontal: spacing.xl, 
          lineHeight: 24,
        }}>
          From saving smart to spending wise, your financial goals begin to rise.
        </Text>
      </View>

      {/* Bottom Buttons */}
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
          onPress={() => router.push("/(onboarding)/step2")}
        >
          <Text style={{ 
            color: colors.white, 
            fontSize: fontSize.bodyLg, 
            fontFamily: fontFamily.bodySemibold, // Poppins Semibold
          }}>
            Next
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(onboarding)/step2")}
        >
          <Text style={{ 
            color: colors.grayMedium, 
            fontSize: fontSize.body, 
            fontFamily: fontFamily.body,
            textAlign: "center",
          }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}