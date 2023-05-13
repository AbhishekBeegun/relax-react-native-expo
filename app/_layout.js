import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';     
import { useCallback } from 'react';


const Layout = () => {

    const [fontLoaded] = useFonts ({
        'SPOTFONT' : require('../assets/Metropolis-SemiBold.otf')
    })

    const onLayoutRootView =useCallback(async () => {
        if (fontLoaded) {
            await SplashScreen.hideAsync();
                }
    }, [fontLoaded] )
      if(!fontLoaded) return null
    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout