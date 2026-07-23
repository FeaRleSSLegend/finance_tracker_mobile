import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { theme } from '../../constants/theme';

interface ActionPillProps {
  icon: ReactNode;
  label: string;
  onPress?: () => void;
}

export const ActionPill = ({ icon, label, onPress }: ActionPillProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress} activeOpacity={0.7}>
      {/* Pill Container */}
      <View style={styles.pillContainer}>
        {icon}
      </View>
      {/* External Label */}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 8, // Space between the pill and the text below
  },
  pillContainer: {
    width: 96,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255, 255, 255, 0.08)', // Soft translucent surface
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  label: {
    color: '#8E8E93', // Muted white/grey tint matching the design
    fontSize: 13,
    fontFamily: theme.fontFamily.bodyMedium,
    textAlign: 'center',
  },
});