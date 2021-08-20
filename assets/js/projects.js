// variables set
const projectsEl = $('#projectsContent')
const infoButton = $('#project-info-btn')

const projectsData = ({displayEl}) => `

`

// click function for button on carousel
infoButton.on('click', () => {
    console.log('button pressed')
    projectsData(res)
  })

  displayProjects();

function displayProjects() {
    displayEl.inner = `
    <div class="project-info-container">
            <h3>Project</h3>
            <p class="text-center"><a href="https://github.com/Bjavillo1059">
                    <img src="./assets/img/garden photo.JPG" alt="garden photo" class="popout"></a>
                *Click photo to view GitHub*
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