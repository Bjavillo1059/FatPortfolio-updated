const aboutMeEl = $('#aboutMeContent')
const aboutMeButton = $('#aboutMe-info-btn')

// click function for button on carousel
aboutMeButton.on('click', () => {
    // removes d-none class to show syntax on browser when button is clicked
    $('.aboutMe-content').removeClass('d-none')
    console.log('button pressed')
})
