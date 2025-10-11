let translate = false


function setLanguage()
{
    if (translate == false){
        document.querySelector('#pas p:nth-child(1)').textContent = 'Sergey'
        document.querySelector('#pas p:nth-child(2)').textContent = 'Popov'
        translate = true
    }
    else{
        document.querySelector('#pas p:nth-child(1)').textContent = 'Сергей'
        document.querySelector('#pas p:nth-child(2)').textContent = 'Попов'
        translate = false
    }
}

