import React from 'react'

import { useRouter,useSearchParams,Stack } from "expo-router"
import { View,SafeAreaView,Text, ScrollView } from "react-native"
import Backbtn from "../../components/Basic/Backbtn"
import CatDetail from "../../components/CategorieDetails/CatDetail"


const slug = () => {

    const params = useSearchParams()
    const router = useRouter()


  return (
    <SafeAreaView style={{
      backgroundColor :"#121212"
    }}>

    <Stack.Screen
      options={{
        headerTitle:"",
        headerTransparent : true,
        statusBarColor: "#121212" ,
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