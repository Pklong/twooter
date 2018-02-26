function setCSRF() {
  const token = document.querySelector('meta[name=csrf-token]')
  return {
    'X-CSRF-Token': token && token.content
  }
}

export default setCSRF
