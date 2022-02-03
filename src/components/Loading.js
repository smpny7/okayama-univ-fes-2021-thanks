import loading from '../assets/img/loading.gif'
import { useEffect, useState } from 'react'

function Loading() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 5000)
    })

    const defaultStyle =
        'absolute top-0 left-0 flex h-full w-full items-center justify-center bg-loading'
    const hiddenStyle = `${defaultStyle} transition duration-700 opacity-0`
    const loadingStyle = isLoading ? defaultStyle : hiddenStyle

    return (
        <div className={loadingStyle}>
            <img src={loading} className="w-60" alt="loading..." />
        </div>
    )
}

export default Loading
