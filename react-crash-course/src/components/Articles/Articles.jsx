import React, { useState } from 'react'
import axios from 'axios'
import styles from './Articles.module.scss'

const Articles = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                )
                console.log(data)
                setPosts(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Articles</h1>

            {loading && 'Загрузка ...'}

            <div className={styles.wrapper}>
                {posts.map(post => (
                    <div key={post.id} className={styles.card}>
                        <p>{post.id + " POST"}</p>
                        <h4>{post.title}</h4>
                        <p>{post.boby}</p>                        
                        <a href="/">Read now</a>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Articles;