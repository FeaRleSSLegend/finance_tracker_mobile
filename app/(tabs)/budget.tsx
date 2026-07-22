import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const { colors, spacing, fontFamily, fontSize } = theme;

export default function BudgetScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget</Text>
      <Text style={styles.subtitle}>Track your budget here</Text>
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
  },
});