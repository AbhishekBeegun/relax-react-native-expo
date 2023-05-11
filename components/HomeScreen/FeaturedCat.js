import React from 'react'
import { View ,FlatList } from "react-native";
import CategorieCard from "./CategorieCard";


const FeaturedCat = () => {
    let fourgrid = [
        {
          name: "Meditate",
          image:"https://t3.ftcdn.net/jpg/00/82/69/12/360_F_82691291_ER0rGruoM5zLxytoiQO1g85yhyXjq0Lv.jpg",
          urilink:"meditate"
        },
        {
          name: "Soundscape",
          image:"https://images.ctfassets.net/cf0geq6u806a/6rDDkaNKARg5u41aIKo9C2/32bc23b17277e0d2131b75652842845b/river.png",
          urilink:"soundscape"
        },
        {
          name: "Stories",
          image:"https://images6.alphacoders.com/116/1161440.jpg",
          urilink:"stories"
        },
        {
          name: "Sleep",
          image:"https://i.pinimg.com/originals/17/86/e1/1786e10174d3fc160bc5c69e6dbaa0e2.jpg ",
          urilink:"sleep"
        },
    
      ]
  return (
    <View>

    <FlatList
          data={fourgrid}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6 }}>
              <CategorieCard
               name={item.name}
               image={item.image}
               urilink={item.urilink} />
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