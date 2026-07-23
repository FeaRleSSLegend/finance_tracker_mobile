import { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { loadFonts } from "../constants/fonts";

const ONBOARDING_KEY = "hasSeenOnboarding";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        await loadFonts();

        const hasSeenOnboarding = await AsyncStorage.getItem(ONBOARDING_KEY);
        setIsFirstLaunch(hasSeenOnboarding === null);
      } catch (error) {
        console.error("Error preparing app:", error);
        setIsFirstLaunch(true);
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepareApp();
  }, []);

  if (!appReady) {
    return null;
  }

  return isFirstLaunch ? (
    <Redirect href="/(onboarding)" />
  ) : (
    <Redirect href="/(tabs)" />
  );
}