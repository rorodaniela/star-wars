import {useState, useEffect} from 'react'
// import {useDispatch} from 'react-redux'
// import { saveFetch, fetchDetail } from "../store/actions/actorsAction";

export default function useFetch(url) {
    // const dispatch = useDispatch()
    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(true)
    const [errMsg, setErrMsg] = useState('')


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
            // if (url === 'all') {
            //     dispatch(saveFetch(data))
            // } else {
            //     dispatch(fetchDetail(data));
            // }
            setActors(data)
        })
        .catch(err => setErrMsg(err.message))
        .finally(()=> setLoading(false))

    }, [])

    return {actors, loading, errMsg}
}