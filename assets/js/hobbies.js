const hobbiesEl = $('#hobbiesContent')
const hobbiesButton = $('#hobbies-info-btn')

hobbiesButton.on('click', () => {
    console.log('button pressed')
    hobbiesData(resp)
})

function hobbiesData() {
    hobbiesEl.innerHTML = `
<div class="about-me work-feature-block row">
    <img class="thumbnail" src="assets/img/hoover dam.PNG">
    <h3>Helicopters<h3>
    <p>The joy for Avionics & Electronics probably stemmed from my time in the Military as an Aircraft Electrician.  Although in the beginning it was rough to get past the zapping of myself, I enojoyed the thrill of finding the problem that persist and either fix <p>
</div>
<div class="about-me work-feature-block row">
    <img class="thumbnail" src="assets/img/hoover dam.PNG">
    <h3>Guns<h3>
    <p>My family and I love to take photos!  We try to capture the time together, because life is to short to miss a minute of time spent with one another.<p>
</div>
<div class="about-me work-feature-block row">
    <img class="thumbnail" src="assets/img/hoover dam.PNG">
    <h3>Music<h3>
    <p>My family and I love to take photos!  We try to capture the time together, because life is to short to miss a minute of time spent with one another.<p>
</div>
<div class="about-me work-feature-block row">
    <img class="thumbnail" src="assets/img/hoover dam.PNG">
    <h3>VideoGames<h3>
    <p>My family and I love to take photos!  We try to capture the time together, because life is to short to miss a minute of time spent with one another.<p>
</div>
    `
}