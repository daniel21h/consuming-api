// Connecting back-end with browser api - fecth()
async function getContentApi() {
  try {
    const response = await fetch('http://localhost:3333/')

    const data = await response.json()
    
    showInPage(data)
  } catch (error) {
    console.error(error)
  }
}

getContentApi()

function showInPage(users) {
  let output = ''

  for (let user of users) {
    output += `<li>${user.name}</li>`
  }

  document.querySelector('main').innerHTML = output
}