import React,{useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import FormTextInput from '../layouts/FormTextInput'
import { AuthContext } from '../context/Auth.Context';


const schema = yup.object({
    email: yup
      .string()
      .required('Email is Required'),
  })

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        isSubmitting,} = useForm({
            resolver: yupResolver(schema),
        })

    const onSubmit = (data) => {
     
    }
    return (
        <>
            <h2 className='text-center mb-3'>Forgot Password?</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormTextInput
                name='email'
                label='Email'
                placeholder='Enter Your Email'
                errors={errors}
                register={register}
                defaultValue='samimfazlu091@gmail.com'
                />

                <Button
                variant='primary'
                size='md'
                type='submit'
                disabled={isSubmitting ? 'disabled' : ''}
                className='text-center d-inline-block w-auto'
                >
                Submit
                </Button>
            </Form>
        </>
    );
}

export default ForgotPassword