import React from 'react'
import Card from "../../components/Card"
import { View,Text } from "react-native"
import { FlatList } from "react-native"


const CatDetail = () => {

  let crd = [1,2,3,4,5,6,7,8]
  return (
    <View>
      <FlatList
          data={crd}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 4 }}>
              <Card />              
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
    </View>
  )
}

export default CatDetail