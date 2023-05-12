import React from 'react'
import { SafeAreaView } from "react-native"
import { useRouter,useSearchParams,Stack } from "expo-router"
import Backbtn from "../../components/Basic/Backbtn"
import PlayerDetail from "../../components/Player/PlayerDetail"
const slug = () => {

  const params = useSearchParams()
  return (
    <SafeAreaView>
        <Stack.Screen
      options={{
        headerTitle:"",
        headerTransparent : true,
        statusBarHidden : true,
        headerLeft : () => (
          <Backbtn/>
        )
              
      }}/>
      <PlayerDetail paramsid={params.slug} />
    </SafeAreaView>
  )
}

export default slug