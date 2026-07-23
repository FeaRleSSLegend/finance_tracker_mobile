import { View, Text } from 'react-native';
import { theme } from '../../constants/theme';

const {colors, fontFamily, fontSize} = theme

interface BalanceProps {
  balance: number;
  currency?: string;
}
export const Balance = ({balance, currency='₦'}: BalanceProps) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.white, fontFamily: fontFamily.displaySemibold, fontSize: fontSize.displayLg}}>{`${currency}${balance.toFixed(2)}`}</Text>
    </View>
  );
};