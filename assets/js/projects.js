// variables set
const projectsEl = $('#projectsContent')
const projectsButton = $('#projects-info-btn')

// click function for button on carousel
projectsButton.on('click', () => {
  // removes d-none class to show syntax on browser when button is clicked
    $('.project-info-container').removeClass('d-none')
    console.log('button pressed')
  })

