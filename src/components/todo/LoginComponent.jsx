import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

function LoginComponent() {

    const [username, setUsername] = useState('ecode')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value);    // event.tartget.value : onchange 했을 때 들어오는 event 값의 value
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value); 
    }

    function handleSubmit() {
        if(username==='ecode' && password==='1111') {
            authContext.setAuthenticated(true)
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)    // welcome으로 라우팅
            
        } else {
            authContext.setAuthenticated(false)
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            {/* 아래 코드 설명*/}
            {/* true && text : return값은 text , 1번 째 인자가 true일 때만 2번 째 요소를 보여주겠다는 뜻*/}
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <div className="LoginForm">
            <h1>Time to Login</h1>
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent