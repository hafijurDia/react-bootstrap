import React,{useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import FormTextInput from '../layouts/FormTextInput'
import { AuthContext } from '../context/Auth.Context';


const schema = yup.object({
    password: yup
    .string()
    .required('password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  confirmPassword: yup
    .string()
    .required('confirm Password is Required')
    .oneOf([yup.ref('password')], "confirm password doesn't match"),
    
  })

function ResetPassword() {
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
            <h2 className='text-center mb-3'>Reset Password</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormTextInput
                name='password'
                label='New Password'
                placeholder='Enter Your Password'
                errors={errors}
                register={register}
                />
                <FormTextInput
                name='password'
                label='Cofirm Password'
                placeholder='Confirm Your Password'
                errors={errors}
                register={register}
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

export default ResetPassword