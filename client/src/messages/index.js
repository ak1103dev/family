import en from './en.json'

export const getErrorKey = (key) => {
  return key.replace('GraphQL error: ', '')
}

export const getMessage = (key, lang='en') => {
  if (lang === 'en') {
    return en[key]
  }
}