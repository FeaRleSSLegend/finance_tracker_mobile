// components/ui/TabIcon.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';

type IoniconName = keyof typeof Ionicons.glyphMap;

interface TabIconProps {
  icon: string;
  label: string;
  focused: boolean;
}

export default function TabIcon({ icon, label, focused }: TabIconProps) {
  const color = focused ? theme.colors.primary : theme.colors.grayMedium;
  const iconName = (focused ? icon : `${icon}-outline`) as IoniconName;

  return (
    <View style={styles.wrapper}>
      <Ionicons name={iconName} size={20} color={color} />
      <Text style={[styles.label, { color }]} numberOfLines={1}>
        {label}
      </Text>
      <View style={[styles.indicator, focused && styles.indicatorActive]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,               // every tab gets an equal share of the bar width
    minHeight: 56,          // keeps the tap target accessible (Android min: 48dp)
    minWidth: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingTop: 8,
  },
  label: {
    fontFamily: theme.fontFamily.bodySemibold,
    fontSize: 10,
    textAlign: 'center',
  },
  indicator: {
    width: 14,
    height: 2,
    borderRadius: theme.radius.full,
    marginTop: 2,
    backgroundColor: 'transparent',
  },
  indicatorActive: {
    backgroundColor: theme.colors.primary,
  },
});