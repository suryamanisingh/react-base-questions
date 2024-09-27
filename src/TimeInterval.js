import { useEffect, useState } from "react"

export function TimeInterval() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setInterval((() => {
            setCount(count + 1)
        }), 1000)
    }, [])
    return <div>setTimeInterval Counter. Counter is
        {/* {count} */}
    </div>
} 