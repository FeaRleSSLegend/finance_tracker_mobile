// constants/theme.ts
// Design tokens for the finance tracker app

export const colors = {
  // Primary brand colors
  primary: '#D5232F',
  darkRed: '#862127',
  deepestRed: '#611117',
  
  // Neutrals
  black: '#000000',
  white: '#FFFFFF',
  
  // Grays
  grayLight: '#E6E6E6',
  grayMedium: '#999999',
  grayDark: '#666666',
  
  // Status colors (for future use)
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#D5232F',
  info: '#2196F3',
} as const;

// Gradients
export const gradient = {
  primary: {
    colors: [colors.primary, colors.darkRed] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
} as const;

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
  xxxxxl: 48,
} as const;

// Border radius
export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
} as const;

// Typography sizes
export const fontSize = {
  caption: 12,
  body: 14,
  bodyLg: 16,
  subheading: 18,
  heading: 20,
  headingLg: 24,
  headingXl: 28,
  display: 32,
  displayLg: 36,
  displayXl: 48,
} as const;

// Font weights
export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
} as const;

// Font families
export const fontFamily = {
  // Outfit - display/brand (bold, modern, geometric)
  display: 'Outfit_700Bold',
  displaySemibold: 'Outfit_600SemiBold',
  displayMedium: 'Outfit_500Medium',
  
  // Poppins - body text (clean, readable, friendly)
  body: 'Poppins_400Regular',
  bodyMedium: 'Poppins_500Medium',
  bodySemibold: 'Poppins_600SemiBold',
  bodyBold: 'Poppins_700Bold',
} as const;

// Layout
export const layout = {
  screenPadding: 20,
  screenPaddingHorizontal: 24,
  screenPaddingVertical: 48,
  buttonHeight: 56,
  inputHeight: 48,
  tabBarHeight: 60,
} as const;

// Theme bundle
export const theme = {
  colors,
  gradient,
  spacing,
  radius,
  fontSize,
  fontWeight,
  fontFamily,
  layout,
};

export default theme;