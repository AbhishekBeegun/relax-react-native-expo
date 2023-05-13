import React from 'react'

import { useRouter,useSearchParams,Stack } from "expo-router"
import { View,SafeAreaView,Text, ScrollView } from "react-native"
import Backbtn from "../../components/Basic/Backbtn"
import CatDetail from "../../components/CategorieDetails/CatDetail"


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
    <ScrollView>
      <CatDetail paramsid={params.slug} />
    </ScrollView>
    </SafeAreaView>
  )
}

export default slug