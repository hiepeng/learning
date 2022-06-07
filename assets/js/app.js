function toggleButton(idIcon, idContent) {


    const content = document.querySelector(`${idContent}`)
    const test = document.querySelector('#test')

    
    // if (content)
    if (content.classList.contains('des'))
    {
       console.log(test.childNodes)
    }
    content.classList.toggle('show');

    const arrow = document.querySelector(`${idIcon}`)
    arrow.classList.toggle('rotate')
}