import { View,Text,Image,TouchableOpacity } from "react-native"
import { useRouter
 } from "expo-router";
 import { urlFor } from "../../lib/client";

const CategorieCard = ({name,image,id}) => {
  
  
  const router = useRouter()

  const handleCatPress = () => {
    router.push(`/categorie-details/${id}`);  
  };

  return (
    
    <View className="h-24 w-auto rounded-lg">
      <Image className="absolute w-full h-full rounded-lg opacity-80 bg-black" 
      resizeMode="cover"
        source={{uri : `${urlFor(image)}` }}/>

    <TouchableOpacity
    onPress={handleCatPress}
    className="w-full h-full flex flex-col justify-center items-center">


     <Text className="text-base text-white font-semibold">
      {name}
     </Text>

    </TouchableOpacity>

    </View>
  )
}

export default CategorieCard