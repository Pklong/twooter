function setCSRF() {
  return {
    'X-CSRF-Token': document.querySelector('meta[name=csrf-token]')
      .content
  }
}

export default setCSRF
