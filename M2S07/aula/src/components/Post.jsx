import { useEffect, useState } from "react"

export function Post() {
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function getPost() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const data = await response.json()
            // console.log(data)
            setPost(data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        isLoading ? <span>Carregando post...</span> : (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    )
}