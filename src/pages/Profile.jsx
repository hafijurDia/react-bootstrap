import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Form, Button, ProgressBar } from 'react-bootstrap'
import { axiosPrivateIntance } from '../config/axios'
import { AuthContext } from '../context/Auth.Context'
import Loader from '../components/Loader'

const uploadPercentage = (total, loaded) => {
  console.log(total, loaded)
  return Math.floor((total / loaded) * 100)
}

function Profile() {
  const { user, token } = useContext(AuthContext)
  const { username, email } = user
  const [file, setFile] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [imageURL, setImageURL] = useState(null)

  const handleChange = (evt) => {
    console.log(evt.target.files)
    setFile(evt.target.files[0])
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()

    const data = {
      firstName: user.username,
      lastName: user.email,
      user: user.id,
    }
    const formData = new FormData()
    formData.append('files.profilePicture', file, file.name)
    formData.append('data', JSON.stringify(data))

    try {
      setSubmitting(true)
      const response = await axiosPrivateIntance(token).post(
        '/profiles?populate=*',
        formData,
        {
          onUploadProgress: (progress) => {
            const percentage = uploadPercentage(progress.total, progress.loaded)
            console.log(progress)
            console.log(percentage)
            setPercentage(percentage)
          },
        }
      )

      setImageURL(
        response.data.data.attributes?.profilePicture?.data?.attributes?.url
      )

      setSubmitting(false)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h2>Profile Info</h2>
      <p>
        username : <em>{username}</em>
      </p>
      <p>
        email : <em>{email}</em>
      </p>
      {imageURL && <img src={imageURL} alt='profile image' />}
      {percentage}
      {percentage > 0 && submitting && (
        <ProgressBar striped animated variant='success' now={percentage} />
      )}

      <Form onSubmit={handleSubmit}>
        
        <label htmlFor='profilePicture'>ProfilePicture: </label>
        <input
          type='file'
          accept='image/*'
          name='profilePicture'
          id='profilePicture'
          onChange={handleChange}
        />

        <Button type='submit' variant='primary' disabled={submitting}>
          Upload File
        </Button>
      </Form>
    </>
    
    

  )
}

export default Profile