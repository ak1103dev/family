import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      userId
    }
  }
`

export const GET_PROFILE_LIST = gql`
  query ($language: String!) {
    getProfileList (language: $language) {
      _id
      profileImage
      firstname
      lastname
      nickname
      birthdate
    }
  }
`
