import {useState, useEffect} from 'react'

export default function useFetch(url) {
    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`https://akabab.github.io/starwars-api/api/${url}.json`)
        .then(res => {
            switch (res.status) {
                case 200:
                    return res.json()
                case 404:
                    throw new Error("The requested resource could not be found")
                default:
                    throw new Error("We had a problem with our server. Please try again later")
            }
        })
        .then(data => {
            setActors(data)
        })
        .catch(err => setError(err.message))
        .finally(()=> setLoading(false))

    }, [])

    return {actors, loading, error}
}