import { useEffect, useState } from "react"

export default function CountHooks() {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('Welcome')
    useEffect(() => {
        setTitle('Our New Title')
    }, [])
    return(
        <section>
                <h2>{title}</h2>
                <h3>You Clicked {count} times.</h3>
                <button onClick={ () => setCount(count + 1)}>
                    Click Me</button>
            </section>
    )
}