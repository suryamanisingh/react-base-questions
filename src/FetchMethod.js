import { useEffect, useState } from "react"

export function FetchMethod() {
    const [id, setId] = useState(0)
    return (
        <div>
            <button onClick={() => setId(id + 1)}>
                Click Me to Load the Data
            </button>
            <PostBody id={id} />
        </div>
    )

}
function PostBody({ id }) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://dummyjson.com/post/${id}`)
        .then(req => req.json())
        .then(res => setData(res))
    }, [])
    return (
    <div>
        {data?.title}
    </div>)
}