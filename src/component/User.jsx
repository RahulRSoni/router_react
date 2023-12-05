import { useParams } from "react-router-dom"

export default function User() {

    const {id} = useParams()
    return (
        <div className="text-center text-gray-500 text-xl">User : {id}</div>
    )
}
