import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import client from "../../lib/client.js"
import { getPosts } from "../../lib/client.js"
import { View,Text } from "react-native"

const Post = () => {

    // const [postdta, setpostdta] = useState()

    // useEffect(() => {
    //     getPosts().then((data) => setpostdta(data))
    //     .then(console.log(postdta))
    //     .catch(console.error)      
    // }, [])

    
  return (
    <View>
        {/* https://cdn.sanity.io/images/sia3av19/production/467383cc477aa08bff9da2af05eeb5665b75a141-1001x666.webp */}
        {/* {postdta && postdta.map( post =>( 
        <View> 
            <Text>{post.title}</Text>
        </View>
        )
        )} */}
    </View>
  )
}

export default Post