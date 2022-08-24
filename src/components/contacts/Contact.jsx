import React,{useContext} from 'react'
import {Card,ListGroup,Button} from 'react-bootstrap'
import {FaEye,FaTrashAlt} from 'react-icons/fa'
import {format} from 'date-fns'
import {Link} from 'react-router-dom'
import { ContactContext } from '../../context/Contact.context'
import { toast } from 'react-toastify'

export default function Contact({ contact}) {
  const {deleteContact} = useContext(ContactContext);
  const {
    id,
    firstName,
    lastName,
    email,
    profession,
    gender,
    image,
    dateOfBirth,
    bio } = contact

    const handleDelete = (id) => {
      toast.success('Contact is deleted successfully')
      deleteContact(id)
      navigate('/contacts')
    }

  return (
    <>
    <Card className='mb-3'>
      <div className='d-flex'>
      <Card.Img variant="top" className='card-img' src={image} />
      <Card.Body>
        <Card.Title>
          <span className='text-dark'>
            {firstName} {lastName}
          </span>
        </Card.Title>
        <Card.Subtitle className='mb-3 text-muted'>{profession}</Card.Subtitle>
        <Card.Text className='mt-2'>
          {bio}
        </Card.Text>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Gender: {gender}</ListGroup.Item>
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>Date of Birth: 
          {dateOfBirth instanceof Object ? format(dateOfBirth,'dd/MM/yyyy') : dateOfBirth}
        </ListGroup.Item>
      </ListGroup>
      <div className='card-btn mt-3'>
        <Card.Link as={Link} to={`/contacts/${id}`} >
          <Button variant='warning ms-3' size='md' type='view'>
            <FaEye />
          </Button>
        </Card.Link>
        <Card.Link>
        <Button variant='danger' size='md' onClick={() => handleDelete(id)}>
            <FaTrashAlt />
        </Button>
        </Card.Link>
      </div>
       
      </Card.Body>
      </div>
    </Card>
    </>
  )
}
