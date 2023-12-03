import {createContext,useContext,useState} from 'react'

const AuthContext =createContext(null);

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider=({children})=>{

    const [auth,setAuth]=useState(false);
    const handleAuth=()=>{
        setAuth((prev)=>!prev);
    }
    return(
        <AuthContext.Provider value={{auth,handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider