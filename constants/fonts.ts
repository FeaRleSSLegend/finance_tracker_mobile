// constants/fonts.ts
import * as Font from 'expo-font';
import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
} from '@expo-google-fonts/outfit';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export const loadFonts = async () => {
  await Font.loadAsync({
    // Outfit
    'Outfit_400Regular': Outfit_400Regular,
    'Outfit_500Medium': Outfit_500Medium,
    'Outfit_600SemiBold': Outfit_600SemiBold,
    'Outfit_700Bold': Outfit_700Bold,
    
    // Poppins
    'Poppins_400Regular': Poppins_400Regular,
    'Poppins_500Medium': Poppins_500Medium,
    'Poppins_600SemiBold': Poppins_600SemiBold,
    'Poppins_700Bold': Poppins_700Bold,
  });
};