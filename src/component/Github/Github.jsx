// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

function Github() {
    const res = useLoaderData()

    // const [res, setRes] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rahulrsoni')
    //         .then((res) => res.json())
    //         .then(res => setRes(res))
    //     return
    // }, [res])

    return (
        <div className='text-center text-gray-600 text-2xl'>
            Github followers : {res.followers}
            <img className="text-center w-20 " src={res.avatar_url} alt="Github" />
        </div>

    )
}
export default Github;

export const apiLoder = async () => {
    const responce = await fetch("https://api.github.com/users/rahulrsoni")
    return responce.json()
}