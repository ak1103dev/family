import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/react-hooks';

import Container from '../../components/Container'
import { getErrorKey, getMessage } from '../../messages'
import { CREATE_PROFILE } from '../../graphql/user';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`
const ErrorMessage = styled.span`
  color: red;
`

function CreateMember() {
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const [createProfile] = useMutation(CREATE_PROFILE);
  const history = useHistory()

  const onSubmit = async (values) => {
    try {
      console.log(values)
      values.language = 'en'
      values.profileImage = values.profileImage[0].name
      const { data } = await createProfile({ variables: values })
      console.log(data)
      history.push('/admin/members')
    } catch (e) {
      setErrorMessage(getMessage(getErrorKey(e.message)))
    }
  };

  return (
    <Container>
      <h1>Create Member</h1>
      <Form id="create-member-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Profile Image</label>
        <input name="profileImage" type="file" ref={register({ required: true })} />
        <ErrorMessage data-testid="username-error">
          {errors.profileImage && 'profile image is required.'}
        </ErrorMessage>

        <label>First Name</label>
        <input name="firstname" ref={register({ required: true })} />
        <ErrorMessage data-testid="username-error">
          {errors.firstname && 'first name is required.'}
        </ErrorMessage>

        <label>Last Name</label>
        <input name="lastname" ref={register({ required: true })} />
        <ErrorMessage data-testid="password-error">
          {errors.lastname && 'last name is required.'}
        </ErrorMessage>

        <label>Nick Name</label>
        <input name="nickname" ref={register({ required: true })} />
        <ErrorMessage data-testid="password-error">
          {errors.nickname && 'nickname is required.'}
        </ErrorMessage>

        <label>Gender</label>
        <input name="gender" ref={register({ required: true })} />
        <ErrorMessage data-testid="password-error">
          {errors.gender && 'gender is required.'}
        </ErrorMessage>

        <label>Birthdate</label>
        <input name="birthdate" type="date" ref={register({ required: true })} />
        <ErrorMessage data-testid="password-error">
          {errors.birthdate && 'birthdate is required.'}
        </ErrorMessage>

        <ErrorMessage data-testid="login-error">
          {errorMessage}
        </ErrorMessage>

        <input type="submit" value="Create" />
      </Form>
    </Container>
  )
}

export default CreateMember