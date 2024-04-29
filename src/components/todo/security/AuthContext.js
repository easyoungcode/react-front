import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


// Share the created context with other component 생성한 context 다른 컴포넌트와 공유하기
export default function AuthProvider({ children }) {

// Put some state in the context
    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    //setInterval(
        // () => setNumber(number + 1)
        // , 10000
    //)

    // const valueToBeShared = {number, isAuthenticated, SetAuthenticated}

    return (
        // value={}가 원래 기본 값인데, 안에 배열 형태로 넣기 위해서 중괄호 한 번 더 사용
        <AuthContext.Provider value={ {number, isAuthenticated, setAuthenticated}  }>
            {children}
        </AuthContext.Provider>
    )
}