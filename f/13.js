function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    
   if (name.length==0)
    return alert(`name is required`)
   
   }
   