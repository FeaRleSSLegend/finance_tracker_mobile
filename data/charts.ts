// data/charts.ts
// Central store for chart dummy data. Swap these arrays for real
// aggregated transaction data once that logic exists — every chart
// component should keep reading from here (or from props shaped like this).

import { Ionicons } from "@expo/vector-icons";

export interface ChartCategory {
  id: string;
  label: string;
  amount: number;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
}

// Palette pulled from theme.ts (colors.primary) plus a small set of
// companion hues chosen to stay legible on the app's near-black cards.
export const chartColors = {
  red: "#D5232F", // theme colors.primary
  orange: "#F2994A",
  blue: "#5B8DEF",
  purple: "#9B6BD9",
  gold: "#E8B84B",
  green: "#3DD68C", // matches the POSITIVE accent used across the app
  gray: "#7A7A80",
} as const;

// Totals intentionally match the Home screen stat cards
// ($9,580 income / $1,580 expenses) so the pie chart and the stats
// row never contradict each other.
export const expenseBreakdown: ChartCategory[] = [
  { id: "groceries", label: "Groceries", amount: 420, color: chartColors.orange, icon: "cart-outline" },
  { id: "eating-out", label: "Eating Out", amount: 310, color: chartColors.purple, icon: "restaurant-outline" },
  { id: "shopping", label: "Shopping", amount: 250, color: chartColors.red, icon: "bag-handle-outline" },
  { id: "subscriptions", label: "Subscriptions", amount: 260, color: chartColors.blue, icon: "repeat-outline" },
  { id: "transport", label: "Transport", amount: 180, color: chartColors.gold, icon: "car-outline" },
  { id: "other", label: "Other", amount: 160, color: chartColors.gray, icon: "ellipsis-horizontal-outline" },
];

export const incomeBreakdown: ChartCategory[] = [
  { id: "salary", label: "Salary", amount: 7200, color: chartColors.green, icon: "briefcase-outline" },
  { id: "freelance", label: "Freelance", amount: 1400, color: chartColors.blue, icon: "laptop-outline" },
  { id: "investments", label: "Investments", amount: 650, color: chartColors.gold, icon: "trending-up-outline" },
  { id: "gifts", label: "Gifts", amount: 330, color: chartColors.purple, icon: "gift-outline" },
];

export const getCategoryTotal = (categories: ChartCategory[]): number =>
  categories.reduce((sum, item) => sum + item.amount, 0);