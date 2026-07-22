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
          backgroundColor: colors.black,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,                    // Reduced from 64
          paddingBottom: 4,
          paddingTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 0,
          padding:8,
          marginHorizontal: 0,           // Remove any extra margin
        },
        headerStyle: {
          backgroundColor: colors.black,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: theme.fontFamily.display,
          fontSize: theme.fontSize.heading,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabIcon icon="home" label="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ focused }) => <TabIcon icon="wallet" label="Budget" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ focused }) => <TabIcon icon="flag" label="Goals" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => <TabIcon icon="person" label="Profile" focused={focused} />,
        }}
      />
    </Tabs>
  );
}