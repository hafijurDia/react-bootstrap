import {React,useState,useEffect} from 'react'
import {Form,Col,Button,Row} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'


const schema = yup.object({
    firstName: yup
    .string()
    .required('First name is required')
    .min(3,'First name must be at least 3 letters'),
    lastName: yup
    .string()
    .required('Last name is required')
    .min(3,'FLast name must be at least 3 letters'),
    email: yup
    .string()
    .required('Email is required')
    .email('Must be a valid email'),
    profession: yup
    .string()
    .required('Profession is required')
    .oneOf(['developer','designer','marketer'])
    .min(3,'Profession must be at least 3 letters'),
    bio: yup
    .string()
    .required('Biodata is required')
    .min(10,'Bio must be 15 letters or more')
    .max(300,'Bio limit maximum 300 characters'),
    image: yup
    .string()
    .required('Image url is required')
    .url('URL must be valid'),

})

export default function ContactForm({ addContact, updateContact, contact }) {
    //3rd party date picker(reac-datepicker)
    const navigate = useNavigate()

    const defaultValue = {
        firstName: contact?.firstName || 'Hafijur',
        lastName: contact?.lastName || 'Rahman',
        email: contact?.email || 'hafijure@gmail.com',
        gender: contact?.gender || 'male',
        profession: contact?.profession || 'developer',
        bio: contact?.bio || 'Hi this is hafijur',
        image: contact?.image || 'https://randomuser.me/api/portraits/men/78.jpg',
        dateOfBirth: contact?.dateOfBirth || new Date(),
    }

    const {firstName,lastName,email,gender,profession,bio,image,} = defaultValue

    const [dateOfBirth, setBirthYear] = useState(new Date());

    
    //3rd party form validation (react hook form, yup)
    const { 
        register, 
        handleSubmit, 
        watch,
        setValue, 
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful}, 
    } = useForm({
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                firstName:'',
                lastName:'',
                email:'',
                profession:'',
                bio:'',
                gender:'male',
                image:''
            })
        }
      }, [isSubmitSuccessful])

    useEffect(() => {
        setValue('dateOfBirth',dateOfBirth)
    }, [dateOfBirth]);

    const onSubmit = (data) => {
        const id = contact?.id
        
        if (id) {
            toast.success("Contact Updated Successfully !")
            updateContact(data, id)
        }else{
            toast.success("Contact Added Successfully !")
            addContact(data)
        } 
        navigate('/contacts')
    }

    // const {id,firstName,lastName,email,profession,gender,image,dateOfBirth,bio} = contact

  return (
    <>
    <h2 className="">{contact?.id ? 'Edit Contact' : 'Add Contact'}</h2>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='firstName' column>First Name</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="text"
                id="firstName"
                defaultValue={firstName}
                {...register('firstName')}
                isInvalid={errors?.firstName}
                placeholder="Enter your first name" 
            />
            <Form.Control.Feedback type="invalid">
                  {errors?.firstName?.message}
            </Form.Control.Feedback>
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
                defaultValue={lastName}
                {...register('lastName')}
                isInvalid={errors?.lastName}
                placeholder="Enter your last name" 
            />
            <Form.Control.Feedback type="invalid">
                  {errors?.lastName?.message}
            </Form.Control.Feedback>
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
                defaultValue={email}
                {...register('email')}
                isInvalid={errors?.email}
                placeholder="Enter your Email" 
            />
            <Form.Control.Feedback type="invalid">
                  {errors?.email?.message}
            </Form.Control.Feedback>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='profession' column>Profession</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Select {...register('profession')} aria-label="Select your Profession"
                id="profession"
                defaultValue={profession}
                isInvalid={errors?.profession}
                >
                <option value="" disabled>Select Your Profession</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="marketer">Marketer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                  {errors?.profession?.message}
            </Form.Control.Feedback>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='dateOfBirth' column>Date of Birth</Form.Label>
            </Col>
            <Col sm={9}>
                <DatePicker 
                    selected = {dateOfBirth}
                    name = "dateOfBirth"
                    id = "dateOfBirth"
                    defaultValue={dateOfBirth}
                    maxDate={new Date()}
                    showYearDropdown
                    onChange = {(date) => setBirthYear(date)
                    } 
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
                    label="Male"
                    value="male"
                    defaultChecked={gender === 'male'}
                    {...register('gender')}
                />
            </Col>
            <Col xs='auto'>
                <Form.Check 
                    type="radio"
                    label="Female"
                    value="female"
                    defaultChecked={gender === 'female'}
                    {...register('gender')}
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
                defaultValue={image}
                {...register('image')}
                isInvalid={errors?.image}
                placeholder="Enter your image Url" 
            />
            <Form.Control.Feedback type="invalid">
                  {errors?.image?.message}
            </Form.Control.Feedback>
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
                defaultValue={bio}
                {...register('bio')}
                isInvalid={errors?.bio}
                placeholder="Type your Biodata" 
            />
            <Form.Control.Feedback type="invalid">
                  {errors?.bio?.message}
            </Form.Control.Feedback>
            </Col>
        </Form.Group>
        <Button variant='primary' size='md' type='submit' disabled={isSubmitting ? 'disabled' : ''}>
        {contact?.id ? 'Update Contact' : 'Add Contact'}
        </Button>
    </Form>
    </>
  )
}
