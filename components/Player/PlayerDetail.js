import React from 'react'
import { useState } from "react";
import { useEffect } from "react"
import {View,Text,Image, TouchableOpacity} from "react-native"
import YoutubeIframe from "react-native-youtube-iframe"
import { Ionicons } from '@expo/vector-icons';
import { urlFor } from "../../lib/client";

import { getPostDetails } from "../../lib/client";

const PlayerDetail = ({paramsid}) => {

  const [Isplaying, setIsplaying] = useState(true)

  const [Data, setData] = useState(null)

  useEffect(() => {
    getPostDetails(paramsid).then((data) => setData(data))
    .catch(console.error)     

  }, [])

  return (

    <View>
    {Data && Data.map( post => (
    <View key={post.audiolink} className="h-full w-full flex flex-col items-center relative bg-black">
    <Image className="absolute w-full h-full opacity-30 bg-black" 
    resizeMode="cover"
      source={{uri : `${urlFor(post.mainImage)}` 
    }}/>
      <Text className="py-36 px-10 text-center text-white text-2xl font-semibold">
       {post.title}
      </Text>

      <View 
      className="w-[250px] -z-10 ">
        <YoutubeIframe
        webViewStyle={{opacity:0}}
        height={150}
        play={Isplaying}
        videoId={`${post.audiolink}`}
        />  
      </View>

      <View className="">
       <View className="flex flex-row gap-10 items-center justify-center py-8">
        <TouchableOpacity>
        <Text>
        <Ionicons name="heart" size={24} color="white" />
        </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>
        <Ionicons name="share" size={24} color="white" />
        </Text>
        </TouchableOpacity>
       </View>

       <View className="flex flex-row justify-evenly items-center w-full py-8">
       <TouchableOpacity>
        <Text>
        <Ionicons name="play-back-outline" size={24} color="white" />
        </Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={() => setIsplaying(!Isplaying)}>
       <Text>
        {Isplaying ? 
       <Ionicons name="pause" size={50} color="white" />
       :
       <Ionicons name="play" size={50} color="white" />
        }

       </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>

        <Ionicons name="play-forward-outline" size={24} color="white" />
        </Text>
        </TouchableOpacity>
       </View>

       <View>
        <Text>Seek range</Text>
       </View>


      </View> 
     </View>
    ))}    
    

    </View>
  )
}

export default PlayerDetail