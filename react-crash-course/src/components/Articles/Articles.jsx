import React, { useState } from 'react'
import styles from './Articles.module.scss'

const Articles = () => {
    const [posts, setPosts] = useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    return (
        <div>
            <h1>Articles</h1>

            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter city' />

            <div className={styles.card}>
                <img src='' alt='' />
                <h4></h4>
                <a href="/">Read now</a>
            </div>
        </div>
    )
}

export default Articles;