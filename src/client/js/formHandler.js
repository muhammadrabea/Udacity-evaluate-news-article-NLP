import { checkForURL } from './checkURL'

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const handleSubmit = async () => {
  const getUrlValue = document.getElementById('article-url').value
  if (checkForURL(getUrlValue)) {
    postData('http://localhost:8081/new-url', {
      getUrlValue
    }).then((data) => {
      document.getElementById('text').innerHTML = `SubjectText: ${data.text}`
      document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
      document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
      document.getElementById('score_tag').innerHTML = `ScoreTag: ${data.score_tag}`
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
      document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
    })
  } else {
    alert('Enter a valid URL')
  }
}




export default handleSubmit