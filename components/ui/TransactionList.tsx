import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const CARD_BG = "#131316";
const CARD_BORDER = "#232326";
const POSITIVE = "#3DD68C";

export interface Transaction {
  id: string;
  name: string;
  method: string;
  time: string;
  amount: number;
  initials: string;
  tint: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <View style={styles.card}>
      {transactions.map((tx, index) => (
        <View
          key={tx.id}
          style={[styles.row, index !== transactions.length - 1 && styles.divider]}
        >
          <View style={[styles.avatar, { backgroundColor: `${tx.tint}22` }]}>
            <Text style={[styles.avatarText, { color: tx.tint }]}>{tx.initials}</Text>
          </View>
          <View style={styles.txInfo}>
            <Text style={styles.txName}>{tx.name}</Text>
            <Text style={styles.txMeta}>
              {tx.method} · {tx.time}
            </Text>
          </View>
          <Text
            style={[
              styles.txAmount,
              { color: tx.amount < 0 ? colors.white : POSITIVE },
            ]}
          >
            {formatAmount(tx.amount)}
          </Text>
        </View>
      ))}
    </View>
  );
};

function formatAmount(n: number) {
  const sign = n < 0 ? "-" : "+";
  return `${sign}$${Math.abs(n).toFixed(2)}`;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: CARD_BORDER,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: fontSize.caption,
    fontFamily: fontFamily.bodySemibold,
  },
  txInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  txName: {
    color: colors.white,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyMedium,
  },
  txMeta: {
    color: colors.grayMedium,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.body,
    marginTop: 2,
  },
  txAmount: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodySemibold,
  },
});