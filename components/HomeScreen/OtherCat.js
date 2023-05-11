import React from 'react'
import { View,FlatList } from "react-native"
import CategorieCard from "./CategorieCard"

const OtherCat = () => {
    let lngcol = [1,2,3,4,5,6]

  return (
    <View>
        <FlatList
          data={lngcol}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6 }}>
              <CategorieCard
               name={item.name}
               image={item.image} />
            </View>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index}
        />


    </View>
  )
}

export default OtherCat