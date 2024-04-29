import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


// Share the created context with other component 생성한 context 다른 컴포넌트와 공유하기
export default function AuthProvider({ children }) {

// Put some state in the context
    const [number, setNumber] = useState(10)

    setInterval(
        () => setNumber(number + 1)
        , 10000
    )

    return (
        <AuthContext.Provider value={ {number} }>
            {children}
        </AuthContext.Provider>
    )
}