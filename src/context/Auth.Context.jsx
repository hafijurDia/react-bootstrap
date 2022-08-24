import {createContext,useState} from 'react'
import axiosPublicIntance from '../config/axios'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext()
const loadedUser = JSON.parse(localStorage.getItem('user'))
const loadedToken = JSON.parse(localStorage.getItem('token'))

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(loadedUser ? loadedUser : null);
    const [token, setToken] = useState(loadedToken ? loadedToken : null);
    const navigate = useNavigate()

    const registerUser = async (data) => {
        try {
            const response = await axiosPublicIntance.post('/auth/local/register',data)
            const {user,jwt} = response.data
            //setting data to local storage
            //update state
            localStorage.setItem('user',JSON.stringify(user))
            localStorage.setItem('token',JSON.stringify(jwt))
            setUser(user)
            setToken(jwt)
            //redirecting the user
            toast.success('Registraion successfully redirecting...')
            navigate('/contacts')

        } catch (error) {
            toast.error(error.response?.data?.error?.message)
        }
        
    }

    const useLogin = async (data) => {
        try {
            const response = await axiosPublicIntance.post('/auth/local',data)
            const {user,jwt} = response.data
            //setting data to local storage
            //update state
            localStorage.setItem('user',JSON.stringify(user))
            localStorage.setItem('token',JSON.stringify(jwt))
            setUser(user)
            setToken(jwt)
            //redirecting the user
            toast.success('Login successfully redirecting...')
            navigate('/contacts')

        } catch (error) {
            toast.error(error.response?.data?.error?.message)
        }

    }

    const logout = () => {
        //remove data from local storage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        //remove from state
        setUser(null)
        setToken(null)
        toast.success('Logout successfully redirecting...')
        navigate('/')
    }

    const value = {
            user,
            token,
            registerUser,
            useLogin,
            logout,
        }
        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}