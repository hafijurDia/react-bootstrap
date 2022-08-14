import {React,useState,useEffect} from 'react'
import {Form,Col,Button,Row} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


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
    .min(3,'Profession must be at least 3 letters'),
    bio: yup
    .string()
    .required('Biodata is required')
    .min(15,'Bio must be 15 letters or more')
    .max(300,'Bio limit maximum 300 characters'),
    image: yup
    .string()
    .required('Image url is required')
    .url('URL must be valid'),

})

export default function AddContact({ addContact }) {
    // const [contact, setContact] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     profession: '',
    //     gender: 'Male',
    //     image: '',
    //     dateOfBirth: new Date(),
    //     bio: '',

    // }) 


    
    
    //3rd party date picker(reac-datepicker)
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
        console.log(data)
        
    }

    // const {id,firstName,lastName,email,profession,gender,image,dateOfBirth,bio} = contact

  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
            <Form.Label htmlFor='firstName' column>First Name</Form.Label>
            </Col>
            <Col sm={9}>
            <Form.Control 
                type="text"
                id="firstName"
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
            <Form.Control 
                type="text"
                id="profession"
                defaultValue=''
                {...register('profession')}
                isInvalid={errors?.profession}
                placeholder="Enter your profession" 
            />
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
                    defaultChecked={true}
                    {...register('gender')}
                />
            </Col>
            <Col xs='auto'>
                <Form.Check 
                    type="radio"
                    label="Female"
                    value="female"
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
                defaultValue=''
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
                defaultValue=''
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
          Add Contact
        </Button>
    </Form>
    </>
  )
}
