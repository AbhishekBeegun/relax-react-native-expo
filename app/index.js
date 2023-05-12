
import { Stack } from "expo-router";
import { View,Text, SafeAreaView, ScrollView,FlatList } from "react-native";
import FeaturedCat from "../components/HomeScreen/FeaturedCat"
import SearchBar from "../components/HomeScreen/SearchBar"
import OtherCat from "../components/HomeScreen/OtherCat";
import "react-native-url-polyfill/auto"
import UnlockBanner from "../components/HomeScreen/UnlockBanner";

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
          <SearchBar />
          <FeaturedCat/>    
          <UnlockBanner/>
          <OtherCat />

          </ScrollView>
        </SafeAreaView>
    )
}

export default Home