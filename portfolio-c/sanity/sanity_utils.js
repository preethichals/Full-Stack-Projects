import { createClient,groq } from 'next-sanity'
import clientConfig from './config/client-config'


export async function getProjects()
{
    return createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image":image.asset->url,
        url,
        git,
        render,
        content
      }`
    )
}
export async function getLogo()
{
    return createClient(clientConfig).fetch(
      groq`*[_type == "logo"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image":image.asset->url,
      }`
    )
}
