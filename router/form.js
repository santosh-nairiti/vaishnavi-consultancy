    const scriptURL = 'https://script.google.com/macros/s/AKfycbyVPMhu29obm0DR509Hrarvrw8McDpsIaBIe672-V50fY3w5TihAhlgJQFwyYrb_LY/exec'
    const form = document.forms['contactform']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })
