import { Stack } from "expo-router";
import { View,Text, SafeAreaView, ScrollView,FlatList } from "react-native";
import FeaturedCat from "../components/HomeScreen/FeaturedCat"
import SearchBar from "../components/HomeScreen/SearchBar"
import OtherCat from "../components/HomeScreen/OtherCat";

const Home = () => {

    return (
        <SafeAreaView>

     <Stack.Screen
      options={{
        headerTitle:"",
        
        headerLeft : () => (
        <SearchBar />  
        )
              
      }}/>
          <ScrollView>

          <FeaturedCat />    
          <OtherCat />

          </ScrollView>
        </SafeAreaView>
    )
}

export default Home