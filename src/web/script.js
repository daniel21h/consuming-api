// Connecting back-end with browser api - fecth()
async function getContentApi() {
  try {
    const response = await fetch('http://localhost:3333/')

    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

getContentApi()