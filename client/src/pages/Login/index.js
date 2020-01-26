import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled'

import request from '../../utils/request'

const Container = styled.div`
  text-align: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory()
  const onSubmit = async data => {
    try {
      if (data.username === 'admin' && data.password === 'password') {
        const res = await request({ faked: true, resBody: { token: 'xxx', userId: 1 } })
        history.push('/dashboard')
        return res
      }
      const res = await request({ faked: true, isError: true, resBody: { message: 'Login failed' } })
      return res
    } catch (e) {
      setErrorMessage(e.message)
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="username" ref={register({ required: true })} />
        {errors.username && 'username is required.'}

        <input name="password" placeholder="password" type="password" ref={register({ required: true })} />
        {errors.password && 'password is required.'}

        {errorMessage}

        <input type="submit" value="submit" />
      </Form>
    </Container>
  )
}

export default LoginPage
