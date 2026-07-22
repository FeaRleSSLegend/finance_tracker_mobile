import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const { colors, spacing, fontFamily, fontSize } = theme;

export default function TransactionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <Text style={styles.subtitle}>Your transaction history will appear here</Text>
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