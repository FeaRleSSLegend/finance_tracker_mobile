// app/_layout.tsx
import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { loadFonts } from "../constants/fonts";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ONBOARDING_KEY = "hasSeenOnboarding";

// Keep splash screen visible while loading resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    // ✅ CORRECT: null = checking, true = show onboarding, false = go to main app
    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
    
    // ✅ CORRECT: false = fonts not loaded, true = fonts loaded
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    // ✅ CORRECT: false = app not ready, true = app ready
    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        async function prepareApp() {
            try {
                // Load fonts
                await loadFonts();
                setFontsLoaded(true);
                
                // Check onboarding status
                const hasSeenOnboarding = await AsyncStorage.getItem(ONBOARDING_KEY);
                setIsFirstLaunch(hasSeenOnboarding === null);
                
                // Mark app as ready
                setAppReady(true);
            } catch (error) {
                console.error("Error preparing app:", error);
                // Even on error, try to show something
                setIsFirstLaunch(true);
                setAppReady(true);
            } finally {
                // Hide splash screen once everything is loaded
                await SplashScreen.hideAsync();
            }
        }

        prepareApp();
    }, []);

    // Show nothing while loading
    if (!appReady) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
                {isFirstLaunch ? (
                    <Stack.Screen name="(onboarding)" />
                ) : (
                    <Stack.Screen name="(tabs)" />
                )}
            </Stack>
        </SafeAreaProvider>
    );
}