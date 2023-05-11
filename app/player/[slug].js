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
        headerTitle:`${params.slug}`,
        headerLeft : () => (
          <Backbtn/>
        )
              
      }}/>

      <PlayerDetail />
    </SafeAreaView>
  )
}

export default slug