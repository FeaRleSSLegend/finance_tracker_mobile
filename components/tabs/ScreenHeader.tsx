import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { theme } from '../../constants/theme';

interface ScreenHeaderProps {
  leftElement?: ReactNode;   // Optional - for welcome text, back button, etc.
  rightElement?: ReactNode;  // Optional - for notification bell, avatar, etc.
  extraElement?: ReactNode;
}

export const ScreenHeader = ({ leftElement, rightElement, extraElement }: ScreenHeaderProps) => {
  const { colors, spacing } = theme;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {leftElement}
      </View>
      <View style={styles.rightContainer}>
        {rightElement}
        {extraElement}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.black,
    height: 60,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
});