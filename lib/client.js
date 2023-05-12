import { createClient } from "@sanity/client"
import imageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    projectId : "sia3av19",
    dataset:"production",
    useCdn: true,
    apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// removethispai-skfMtrQ2ObsWtxyBrUmeZCsT2pPRmsbrMzvh2oiu841CYyYMd91fJc4WU1GHUVHZ0rkLmo17XnuFovE0owNyNTZEDMs5dets8s8z5JpkZcP9eZoYbkGUKBXvzXVf48ajGPYJUqPyMnRK1hEVbfZySBR1XhCUEZ940LSUgbncUeURUfSnbtn3removethisapi

export async function getPosts() {
    const posts = await client.fetch('*[_type == "post"]')
    return posts
}  
export async function getFeaturedCategories() {
    const Categories = await client.fetch('*[_type == "category" && Featured == true]')
    return Categories
} 

export async function getOtherCategories() {
    const Categories = await client.fetch('*[_type == "category" && Featured == false]')
    return Categories
} 
export async function getCategoriePosts(query) {
    const Posts = await client.fetch(`*[_type == "post" && categories[0]._ref == "${query}"]`)
    return Posts
} 
export async function getPostDetails(query) {
    const Post = await client.fetch(`*[_type == "post" && title == "${query}"]`)
    return Post
} 

