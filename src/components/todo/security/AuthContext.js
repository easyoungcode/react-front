import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


// Share the created context with other component 생성한 context 다른 컴포넌트와 공유하기
export default function AuthProvider({ children }) {

// Put some state in the context
    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    // const valueToBeShared = {number, isAuthenticated, SetAuthenticated}

    function login(username, password) {
        if(username==='ecode' && password==='1111') {
            setAuthenticated(true)
            return true
        
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        // value={}가 원래 기본 값인데, 안에 배열 형태로 넣기 위해서 중괄호 한 번 더 사용
        // 아래 value에 넣음으로써 다른 컴포넌트에서 해당 객체들을 접근할 수 있게 만들어줌
        <AuthContext.Provider value={ {isAuthenticated, login, logout}  }>
            {children}
        </AuthContext.Provider>
    )
}