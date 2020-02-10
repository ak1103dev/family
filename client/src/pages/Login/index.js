import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled'
import { useMutation } from '@apollo/react-hooks';

import { LOGIN } from '../../graphql/user'
import { getErrorKey, getMessage } from '../../messages'

const Container = styled.div`
  text-align: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`
const ErrorMessage = styled.span`
  color: red;
`

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory()
  const [login] = useMutation(LOGIN);

  const onSubmit = async ({ username, password }) => {
    try {
      const { data } = await login({ variables: { username, password } })
      localStorage.setItem('ACCESS_TOKEN', data.login.token)
      history.push('/admin/dashboard')
    } catch (e) {
      setErrorMessage(getMessage(getErrorKey(e.message)))
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input data-testid="username" name="username" placeholder="username" ref={register({ required: true })} />
        <ErrorMessage data-testid="username-error">
          {errors.username && 'username is required.'}
        </ErrorMessage>

        <input data-testid="password" name="password" placeholder="password" type="password" ref={register({ required: true })} />
        <ErrorMessage data-testid="password-error">
          {errors.password && 'password is required.'}
        </ErrorMessage>

        <ErrorMessage data-testid="login-error">
          {errorMessage}
        </ErrorMessage>

        <input type="submit" value="submit" />
      </Form>
    </Container>
  )
}

export default LoginPage
