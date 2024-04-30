import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { retireveHelloWorldBean, retireveHelloWorldPathVariable } from "./api/HelloWorldApiService"

function WelcomeComponent() {
    
    /** receive object : const params = useParams (직접 객체 받기)
     *  receive object value : const {key} = useParams (객체의 값 받기)
     */
    const {username} = useParams()
    // console.log(username)

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi() {
        console.log('called')
        // axios.get('http://localhost:8080/hello-world')
        //     .then( (response) => successfulResponse(response) )
        //     .catch( (error) => ErrorResponse(error) )
        //     .finally( () => console.log('cleanup'))

        retireveHelloWorldBean()
            .then( (response) => successfulResponse(response) )
            .catch( (error) => ErrorResponse(error) )
            .finally( () => console.log('cleanup'))

        retireveHelloWorldPathVariable('ecode')
            .then( (response) => successfulResponse(response) )
            .catch( (error) => ErrorResponse(error) )
            .finally( () => console.log('cleanup'))
    }

    function successfulResponse(response) {
        // console.log(response)
        console.log(response.data.message)
        setMessage(response.data.message)
    }

    function ErrorResponse(error) {
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welocome! {username} </h1>
            <div>
                Manage your Todos - <Link to='/todos'>Go Here!</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>
                    Call Hello World REST API
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent