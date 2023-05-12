import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View ,FlatList } from "react-native";
import CategorieCard from "./CategorieCard";
import { getFeaturedCategories } from "../../lib/client";

const FeaturedCat = () => {

  const [Data, setData] = useState()

  useEffect(() => {
      getFeaturedCategories().then((data) => setData(data))
      .catch(console.error)      
  }, [])

  return (
    <View className="">
    <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6 }}>
              <CategorieCard
               id={item._id}
               name={item.title}
               image={item.mainImage}
               />
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
        </View>

  )
}

export default FeaturedCat