import { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import {
  ChartCategory,
  expenseBreakdown,
  incomeBreakdown,
  getCategoryTotal,
} from "../../data/charts";

const { colors, radius, spacing, fontSize, fontFamily } = theme;
const CARD_BG = "#131316";
const CARD_BORDER = "#232326";

const SIZE = 200;
const STROKE_WIDTH = 26;
const CENTER = SIZE / 2;
const RING_RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const SEGMENT_GAP = 8; // small gap so rounded caps read clearly without overlapping neighbors

type Mode = "expense" | "income";

interface SpendingPieChartProps {
  expenseData?: ChartCategory[];
  incomeData?: ChartCategory[];
  period?: string;
  initialMode?: Mode;
}

export const SpendingPieChart = ({
  expenseData = expenseBreakdown,
  incomeData = incomeBreakdown,
  period = "This Month",
  initialMode = "expense",
}: SpendingPieChartProps) => {
  const [mode, setMode] = useState<Mode>(initialMode);

  const data = mode === "expense" ? expenseData : incomeData;
  const total = useMemo(() => getCategoryTotal(data), [data]);

  const arcs = useMemo(() => {
    let cumulative = 0;
    return data.map((item) => {
      const fraction = total > 0 ? item.amount / total : 0;
      const rawLength = fraction * CIRCUMFERENCE;
      const segmentLength = Math.max(rawLength - SEGMENT_GAP, 0);
      const offset = -cumulative;
      cumulative += rawLength;
      return { ...item, segmentLength, offset, fraction };
    });
  }, [data, total]);

  return (
    <View style={styles.card}>
      {/* Donut chart with centered total */}
      <View style={styles.chartWrap}>
        <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <G rotation="-90" origin={`${CENTER}, ${CENTER}`}>
            <Circle
              cx={CENTER}
              cy={CENTER}
              r={RING_RADIUS}
              stroke={CARD_BORDER}
              strokeWidth={STROKE_WIDTH}
              fill="none"
            />
            {arcs.map((arc) => (
              <Circle
                key={arc.id}
                cx={CENTER}
                cy={CENTER}
                r={RING_RADIUS}
                stroke={arc.color}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={`${arc.segmentLength} ${CIRCUMFERENCE}`}
                strokeDashoffset={arc.offset}
                strokeLinecap="round"
                fill="none"
              />
            ))}
          </G>
        </Svg>

        <View style={styles.centerLabel} pointerEvents="none">
          <Text style={styles.centerPeriod}>{period}</Text>
          <Text style={styles.centerAmount}>${total.toLocaleString()}</Text>
          <Text style={styles.centerSub}>
            Total {mode === "expense" ? "Expenses" : "Income"}
          </Text>
        </View>
      </View>

      {/* Income / Expense toggle */}
      <View style={styles.toggle}>
        <ToggleButton label="Expense" active={mode === "expense"} onPress={() => setMode("expense")} />
        <ToggleButton label="Income" active={mode === "income"} onPress={() => setMode("income")} />
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        {arcs.map((item, index) => (
          <View
            key={item.id}
            style={[styles.legendRow, index !== arcs.length - 1 && styles.legendDivider]}
          >
            <View style={[styles.legendIcon, { backgroundColor: `${item.color}22` }]}>
              <Ionicons name={item.icon} size={16} color={item.color} />
            </View>
            <Text style={styles.legendLabel} numberOfLines={1}>
              {item.label}
            </Text>
            <Text style={styles.legendPercent}>{Math.round(item.fraction * 100)}%</Text>
            <Text style={styles.legendAmount}>${item.amount.toLocaleString()}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

function ToggleButton({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.toggleBtn, active && styles.toggleBtnActive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.toggleLabel, active && styles.toggleLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: radius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    alignItems: "center",
  },
  chartWrap: {
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  centerLabel: {
    position: "absolute",
    alignItems: "center",
  },
  centerPeriod: {
    color: colors.grayMedium,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.body,
    marginBottom: 2,
  },
  centerAmount: {
    color: colors.white,
    fontSize: fontSize.headingLg,
    fontFamily: fontFamily.display,
  },
  centerSub: {
    color: colors.grayMedium,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.bodyMedium,
    marginTop: 2,
  },
  toggle: {
    flexDirection: "row",
    backgroundColor: "#0A0A0C",
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: radius.full,
    padding: 2,
    marginBottom: spacing.xl,
    alignSelf: "center",
  },
  toggleBtn: {
    paddingVertical: 4,
    paddingHorizontal: spacing.md,
    borderRadius: radius.full,
    alignItems: "center",
  },
  toggleBtnActive: {
    backgroundColor: colors.primary,
  },
  toggleLabel: {
    color: colors.grayMedium,
    fontSize: fontSize.caption,
    fontFamily: fontFamily.bodyMedium,
  },
  toggleLabelActive: {
    color: colors.white,
    fontFamily: fontFamily.bodySemibold,
  },
  legend: {
    alignSelf: "stretch",
  },
  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  legendDivider: {
    borderBottomWidth: 1,
    borderBottomColor: CARD_BORDER,
  },
  legendIcon: {
    width: 32,
    height: 32,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  legendLabel: {
    flex: 1,
    color: colors.white,
    fontSize: fontSize.bodyLg,
    fontFamily: fontFamily.bodyMedium,
  },
  legendPercent: {
    color: colors.grayMedium,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    marginRight: spacing.md,
  },
  legendAmount: {
    color: colors.white,
    fontSize: fontSize.bodyLg,
    fontFamily: fontFamily.bodySemibold,
  },
});