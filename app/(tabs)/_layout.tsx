// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { theme } from "../../constants/theme";
import TabIcon from "../../components/ui/TabIcon";

const { colors } = theme;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.black,},
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: theme.fontFamily.display,
          fontSize: theme.fontSize.heading,
        },
        tabBarShowLabel: false, // Hide default label since TabIcon has its own
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="home" label="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="list" label="Transactions" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="wallet" label="Budget" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="person" label="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}