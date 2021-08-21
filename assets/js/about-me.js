const aboutMeEl = $('#aboutMeContent')
const aboutMeButton = $('#aboutMe-info-btn')
const aboutMeContainer = $('.aboutMe-info-container')

// click function for button on carousel
aboutMeButton.on('click', () => {
    // removes d-none class to show syntax on browser when button is clicked
    aboutMeContainer.removeClass('d-none')
    console.log('button pressed')
    console.log(res)
})
