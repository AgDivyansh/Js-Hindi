const form = document.querySelector('form') ;


form.addEventListener('submit', (e) =>  {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value) ;
    const weight = parseInt(document.querySelector('#weight').value) ;
    const result = document.querySelector('#result') ;
    console.log(`height is ${height} and weight is ${weight}`) ;
    
    
    if(height == '' || height < 0 || isNaN(height))
    {
        result.innerHTML = "Please provide a valid height" ;
        console.log('Please provide a valid height');
    }
    else if (weight == '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML = "Please provide a valid weight" ;
        console.log('Please provide a valid weight');
    }
    else
    {
        // const ans = (weight / ((height ** 2)).toFixed(2) ;
        const ans = (weight / ((height*height)/ 10000)).toFixed(2) ;
        console.log(ans);
        
        result.innerHTML = `Your BMI is ${ans}` ;
    }

})