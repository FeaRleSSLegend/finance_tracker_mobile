import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { ScreenHeader } from "../../components/ui/ScreenHeader";
import { BalanceCard } from "../../components/ui/BalanceCard";
import { StatCard } from "../../components/ui/StatCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { TransactionList, Transaction } from "../../components/ui/TransactionList";

const { colors, spacing, fontSize, fontFamily, radius } = theme;
const POSITIVE = "#3DD68C";

const transactions: Transaction[] = [
  { id: "1", name: "Jenny Wilson", method: "Platinum Card", time: "9:14 PM", amount: -500.0, initials: "JW", tint: "#5B8DEF" },
  { id: "2", name: "Mike Jones", method: "Platinum Card", time: "9:03 PM", amount: 230.5, initials: "MJ", tint: POSITIVE },
  { id: "3", name: "Amazon", method: "Online Purchase", time: "11:45 AM", amount: -75.99, initials: "AM", tint: "#F2994A" },
];

const statsData = [
  { label: "Income", amount: "$9,580", percentage: "+40%", positive: true },
  { label: "Expenses", amount: "$1,580", percentage: "+5%", positive: false },
  { label: "Savings", amount: "$8,000", percentage: "+30%", positive: true },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <ScreenHeader
          leftElement={
            <View>
              <Text style={styles.greeting}>Morning,</Text>
              <Text style={styles.userName}>John</Text>
            </View>
          }
          rightElement={
            <View style={{ flexDirection: "row", gap: spacing.sm }}>
              <View style={styles.iconButton}>
                <Ionicons name="notifications-outline" size={20} color={colors.white} />
                <View style={styles.bellDot} />
              </View>
              <View style={styles.iconButton}>
                <MaterialIcons name="headset-mic" size={20} color={colors.white} />
              </View>
            </View>
          }
        />

        {/* Balance Card */}
        <BalanceCard balance={25362.36} delta="12%" deltaPositive />

        {/* Stats Row */}
        <View style={styles.statsRow}>
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </View>

        {/* Recent Transactions */}
        <SectionHeader title="Recent Transactions" />
        <TransactionList transactions={transactions} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxxl,
  },
  greeting: {
    color: colors.grayMedium,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
  },
  userName: {
    color: colors.white,
    fontSize: fontSize.headingLg,
    fontFamily: fontFamily.display,
    marginTop: 2,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    backgroundColor: "#131316",
    borderWidth: 1,
    borderColor: "#232326",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bellDot: {
    position: "absolute",
    top: 9,
    right: 10,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  statsRow: {
    flexDirection: "row",
    marginBottom: spacing.xl,
  },
});