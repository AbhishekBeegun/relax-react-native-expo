
import { Stack } from "expo-router";
import { SafeAreaView, ScrollView} from "react-native";
import OC from "../components/HomeScreen/OtherCategories/OC"
import "react-native-url-polyfill/auto"
import UnlockBanner from "../components/HomeScreen/Banner/UnlockBanner";
import SearchFeaturedCat from "../components/HomeScreen/SearchFeaturedCat";
import { FlatList } from "react-native-gesture-handler";

const Home = () => {




    return (
        <SafeAreaView>

        <FlatList
        ListHeaderComponent={<SearchFeaturedCat/>}
        ListEmptyComponent={<UnlockBanner/>}
        ListFooterComponent={<OC/>}
        />
     <Stack.Screen
      options={{
        headerTitle:"",  
        headerTransparent : true,
      }}/>
          {/* <SearchFeaturedCat/>
          <UnlockBanner/>
          <OC/> */}

         
        </SafeAreaView>
    )
}

export default Home