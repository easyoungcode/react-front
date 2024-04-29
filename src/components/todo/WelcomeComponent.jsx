import { useParams, Link } from "react-router-dom"

function WelcomeComponent() {
    
    /** receive object : const params = useParams (직접 객체 받기)
     *  receive object value : const {key} = useParams (객체의 값 받기)
     */
    const {username} = useParams()
    console.log(username)
    return (
        <div className="WelcomeComponent">
            <h1>Welocome! {username} </h1>
            <div>
                Manage your Todos - <Link to='/todos'>Go Here!</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent