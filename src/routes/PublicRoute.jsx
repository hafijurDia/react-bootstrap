import React,{useContext} from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import { AuthContext } from '../context/Auth.Context'

function PublicRoute({children}) {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    const loadedComponent = user ? (
    <Navigate to={location?.state?.from ? location?.state?.from : '/contacts'} />
    ):(
        children
    )
  return (
    <div>{loadedComponent}</div>
  )
}

export default PublicRoute