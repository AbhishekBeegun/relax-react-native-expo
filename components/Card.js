import { View,Text,TouchableOpacity,Image } from "react-native"
import { useRouter } from "expo-router";
import { urlFor } from "../lib/client";

const Card = ({title,author,image}) => {

  const router = useRouter()

  const handleCardPress = () => {
    router.push(`/player/${title}`);  
  };


  return (
    <View className="h-[230px] rounded-lg">


      <TouchableOpacity
      onPress={handleCardPress}
      className="w-full h-full flex flex-col">
       <View className="h-[170px] w-full rounded-lg">
       <Image className="absolute w-full h-full rounded-lg opacity-80 bg-black" 
      resizeMode="cover"
        source={{uri : `${urlFor(image)}` }}/>
       </View>

       <View className="py-2 px-2">

       <Text className="font-semibold text-xs text-white">
        {title}
       </Text>

       <Text className="text-xs text-white">
        {author}
       </Text>
       </View>

      </TouchableOpacity>


    </View>
  )
}

export default Card