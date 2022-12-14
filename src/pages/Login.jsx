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
    password: yup
      .string()
      .required('password is required')
  })

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        isSubmitting,} = useForm({
            resolver: yupResolver(schema),
        })

    const {useLogin} = useContext(AuthContext);

    const onSubmit = (data) => {
        useLogin({
            identifier: data.email,
            password: data.password,
        })
    }
    return (
        <>
            <h2 className='text-center mb-3'>Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormTextInput
                name='email'
                label='Email'
                placeholder='Enter Your Email'
                errors={errors}
                register={register}
                defaultValue='samimfazlu091@gmail.com'
                />
                <FormTextInput
                name='password'
                label='password'
                placeholder='Enter password'
                errors={errors}
                register={register}
                type='password'
                defaultValue='abcdeFf1@'
                />

                <p>Forgot password? <Link to='/forgot-password'>Click here</Link></p>

                <Button
                variant='primary'
                size='md'
                type='submit'
                disabled={isSubmitting ? 'disabled' : ''}
                className='text-center d-inline-block w-auto'
                >
                Login
                </Button>
            </Form>
        </>
    );
}

export default Login;

