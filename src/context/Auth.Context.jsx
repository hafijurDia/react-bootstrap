import {createContext,useState,useEffect} from 'react'
import {axiosPrivateIntance, axiosPublicIntance} from '../config/axios'

import { toast } from 'react-toastify'
import {useNavigate,useLocation} from 'react-router-dom'

export const AuthContext = createContext()
const loadedUser = JSON.parse(localStorage.getItem('user'))
const loadedToken = JSON.parse(localStorage.getItem('token'))

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(loadedUser ? loadedUser : null);
    const [trigerDelete, setTrigerDelete] = useState(false)
    const [token, setToken] = useState(loadedToken ? loadedToken : null);
    const navigate = useNavigate()
    const location = useLocation()
    const [userContacts, setUserContacts] = useState([])
    const [loaded, setLoaded] = useState(false)

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

    useEffect(() => {
        if(user){
            ;(async () => {
                await loadUserContact()
            })()
        }
        
    }, [user, trigerDelete]);

    const loadUserContact = async () => {
        try {

            const response = await axiosPrivateIntance(token).get('/users/me?populate=contacts')
            setUserContacts(response.data.contacts)
            setLoaded(true)
            
        } catch (error) {
            setLoaded(true)
            
        }
    }

    const useLogin = async (data) => {
        try {
            const response = await axiosPublicIntance.post('/auth/local/',data)
            const {user,jwt} = response.data
            //setting data to local storage
            //update state
            localStorage.setItem('user',JSON.stringify(user))
            localStorage.setItem('token',JSON.stringify(jwt))
            setUser(user)
            setToken(jwt)
            //redirecting the user
            toast.success('Login successfully redirecting...')
    
            navigate(location?.state?.from ? location?.state?.from : '/contacts')

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
            setTrigerDelete,
            userContacts,
            loaded,
            user,
            token,
            registerUser,
            useLogin,
            logout,
        }
        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}