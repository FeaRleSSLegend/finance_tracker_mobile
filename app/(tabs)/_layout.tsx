// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../constants/theme";
import TabIcon from "../../components/ui/TabIcon";

const { colors } = theme;

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  // Small gap above the home indicator instead of sitting flush against it.
  const bottomGap = insets.bottom > 0 ? insets.bottom : 8;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
          elevation: 0,
          height: 56 + bottomGap,
          paddingBottom: bottomGap,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          paddingVertical: 0,
          marginHorizontal: 0,
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