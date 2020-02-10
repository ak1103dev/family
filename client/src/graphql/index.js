import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: localStorage.getItem('ACCESS_TOKEN') || ''
  }
});

export default client
