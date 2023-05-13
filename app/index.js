
import { Stack } from "expo-router";
import { SafeAreaView, ScrollView} from "react-native";

import OtherCat from "../components/HomeScreen/OtherCat";
import "react-native-url-polyfill/auto"
import UnlockBanner from "../components/HomeScreen/UnlockBanner";
import SearchFeaturedCat from "../components/HomeScreen/SearchFeaturedCat";

const Home = () => {




    return (
        <SafeAreaView style={{
         backgroundColor : "#121212"
        }} >

     <Stack.Screen
      options={{
        headerTitle:"",  
        headerTransparent : true,
        statusBarColor: "#121212" 
      }}/>
          <ScrollView>
          <SearchFeaturedCat/>
          <UnlockBanner/>
          <OtherCat />

          </ScrollView>
        </SafeAreaView>
    )
}

export default Home