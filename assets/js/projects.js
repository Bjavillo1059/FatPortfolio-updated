const displayEl = $('#projectsContent')
const infoButton = $('#project-info-btn')

infoButton.on('click', () => {
    console.log('button pressed')
    projectsData()
  })

function displayProjects(projectsData) {
    displayEl.inner = `
    <div class="project-info-container">
            <h3>Project</h3>
            <p class="text-center"><a href="https://github.com/Bjavillo1059">
                    <img src="./assets/img/garden photo.JPG" alt="garden photo" class="popout"></a>
                *Click photo to view GitHub*
            </p>
            <p>
                I created this portfolio page, with more to come. I am continuously growing and acheiving experience
                with every step taken into a career of software development. Below I will consistently add projects that
                I have created and/or have contributed to. I stand by my morals in this new world of development, that
                "hardwork, dedication, and commitment to excellence is the foundation of a brighter future for oneself!"
            </p>
            <p>
                <a href="https://bjavillo1059.github.io/Nutritional-Value/" class="text-primary">*NutriVal* </a> Gives a
                user the ability to take control of what they are putting into their bodies! <a href="https://bjavillo1059.github.io/Nutritional-Value/">
                    <img src="assets/img/NutriVal snip.PNG" alt="NutriVal" class="popout" id="nutri-val">
                </a>
            </p>
        </div>
    `
}