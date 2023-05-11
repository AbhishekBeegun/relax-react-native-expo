import { View,Text,TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";

const Card = () => {

  const router = useRouter()

  const handleCardPress = () => {
    router.push(`/player/1`);  
  };


  return (
    <View className="h-[250px] rounded-lg">

      <TouchableOpacity
      onPress={handleCardPress}
      className="w-full h-full flex flex-col">
       <View className="h-[170px] bg-yellow-300 w-full rounded-lg">

       </View>

       <View className="py-2 px-2">

       <Text className="font-semibold text-lg">
        Name
       </Text>

       <Text className="text-xs">
        Author/Details
       </Text>
       </View>

      </TouchableOpacity>


    </View>
  )
}

export default Card