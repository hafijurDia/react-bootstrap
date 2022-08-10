import {React,useState} from 'react'
import {Form,Col,Button,Row} from 'react-bootstrap'

export default function AddContact({ addContact }) {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        gender: 'Male',
        image: '',
        dateOfBirth: new Date(),
        bio: '',

    }) 

    const handleChange = (evt) => {
        setContact({
            ...contact,
            [evt.target.name] : evt.target.value,
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(contact)
        //checking validation

        //submit form
        addContact(contact)
    }

    const {id,firstName,lastName,email,profession,gender,image,dateOfBirth,bio} = contact

  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='firstName' column>First Name</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={firstName}
                placeholder="Enter your first name" 
            />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='lastName' column>Last Name</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={lastName}
                placeholder="Enter your last name" 
            />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='email' column>Email</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={email}
                placeholder="Enter your email" 
            />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='profession' column>Profession</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="text"
                id="profession"
                name="profession"
                onChange={handleChange}
                value={profession}
                placeholder="Enter your profession" 
            />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='dateOfBirth' column>Date of Birth</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                onChange={handleChange}
                value={dateOfBirth}
            />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='gender' column>Gender</Form.Label>
            </Col>
            <Col xs='auto'>
                <Form.Check 
                    type="radio" 
                    onChange={handleChange}
                    name="gender"
                    label="Male"
                    value="male"
                    checked={gender === 'male'}
                />
            </Col>
            <Col xs='auto'>
                <Form.Check 
                    type="radio" 
                    onChange={handleChange}
                    name="gender"
                    label="Female"
                    value="female"
                    checked={gender === 'female'}
                />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='image' column>Profile Picture</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="text"
                id="image"
                name="image"
                onChange={handleChange}
                value={image}
                placeholder="Enter your profile link"
                
            />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='bio' column>Bio Data</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                as="textarea"
                type="text"
                id="bio"
                name="bio"
                onChange={handleChange}
                value={bio}
                placeholder="Enter your bio data" 
            />
            </Col>
        </Form.Group>
        <Button variant='primary' size='md' type='submit'>
          Add Contact
        </Button>
    </Form>
    </>
  )
}
