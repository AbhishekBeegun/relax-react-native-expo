import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View,FlatList,ActivityIndicator } from "react-native"
import CategorieCard from "./CategorieCard"
import { getOtherCategories } from "../../lib/client";

const OtherCat = () => {
  const [Data, setData] = useState()

  useEffect(() => {
      getOtherCategories().then((data) => setData(data))
      .catch(console.error)      
  }, [])

  return (
    <View>
      {Data ? 
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6 }}>
              <CategorieCard
               id={item._id}
               name={item.title}
               image={item.mainImage} />
            </View>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
        :
        <View className="h-[100vh] w-screen flex flex-row justify-center items-center">       
        <ActivityIndicator size={50} color={"white"}>
        </ActivityIndicator>
        </View>
       }


    </View>
  )
}

export default OtherCat