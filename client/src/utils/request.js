const req = ({ faked=false, isError=false, resBody={} }) => {
  if (faked) {
    return new Promise((resolve, reject) => {
      if (isError) {
        return reject(resBody)
      }
      return resolve(resBody)
    })
  }
  return Promise.resolve({ success: true, isReal: true })
}

export default req
