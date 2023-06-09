import { useRouter,useSearchParams,Stack } from "expo-router"
import { View,SafeAreaView,Text, ScrollView } from "react-native"
import Backbtn from "../../components/Basic/Backbtn"
import SearchResult from "../../components/Search/SearchResult"

const slug = () => {

    const params = useSearchParams()
    const router = useRouter()


  return (
    <SafeAreaView>

    <Stack.Screen
      options={{
        headerTitle:"",
        headerTransparent : true,
        headerLeft : () => (
          <Backbtn/>
        )
              
      }}/>
 
      <SearchResult paramsid={params.slug} />

    </SafeAreaView>
  )
}

export default slug
