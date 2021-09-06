const email = document.querySelector('.email'),
      error = document.querySelector('.error'),
      btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    if(email.value === ''){
        error.style.display = 'block';
        email.style.borderColor = 'hsl(354, 100%, 66%)';

        setTimeout(()=> {
            error.style.display = 'none';
            email.style.borderColor = 'hsl(223, 100%, 88%)';
        } , 3000) 
        
    } else {
        confirm('Are you sure??')
        email.value = ''
    }
    e.preventDefault();
}) 


