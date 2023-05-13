
import { Stack } from "expo-router";
import { SafeAreaView, ScrollView} from "react-native";
import OC from "../components/HomeScreen/OtherCategories/OC"
import "react-native-url-polyfill/auto"
import UnlockBanner from "../components/HomeScreen/Banner/UnlockBanner";
import SearchFeaturedCat from "../components/HomeScreen/SearchFeaturedCat";

const Home = () => {




    return (
        <SafeAreaView>

        <ScrollView>
     <Stack.Screen
      options={{
        headerTitle:"",  
        headerTransparent : true,
      }}/>
          <SearchFeaturedCat/>
          <UnlockBanner/>
          <OC/>

          </ScrollView>
        </SafeAreaView>
    )
}

export default Home