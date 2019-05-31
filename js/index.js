const apiContainer = document.querySelector('#api-container-index');

fetch('https://api.spacexdata.com/v3/launches/next')
    .then(response => response.json())
    .then(nextLaunch => {
        const launchMarkup = createLaunchMarkup(nextLaunch, 'Next Mission Planned');
        apiContainer.appendChild(launchMarkup);
    })
    .catch(err => console.error(error))
    .then(() => fetch('https://api.spacexdata.com/v3/launches/upcoming'))
    .then(response => response.json())
    .then(data => {
        const nextUpcomingLaunch = data[0];
        const launchMarkup = createLaunchMarkup(nextUpcomingLaunch, 'Upcoming Mission');
        apiContainer.appendChild(launchMarkup);
    })
    .catch(err => console.error(error))
    .then(() => fetch('https://api.spacexdata.com/v3/launches/past'))
    .then(response => response.json())
    .then(data => {
        const lastItem = (data.length - 1);
        const previousLaunch = data[lastItem];
        const launchMarkup = createLaunchMarkup(previousLaunch, 'Previous Mission');
        apiContainer.appendChild(launchMarkup);
    })
    .catch(err => console.error(error));




function createLaunchMarkup(launch, launchText) {

    const launchContainer = document.createElement('section');

    launchContainer.className = 'launch';

    // const details, launchdatelocal, missionname, rocket, launcsite;

    const date = launch.launch_date_local;

    launchContainer.innerHTML = `
    <h2 class="launch-title">${launchText}: ${launch.mission_name} </h2>
    <p class="launch-description">${launch.details}</p>
    <h3 class="launch-subtitle">Further details:</h3>
    <ul class="launch-details">
        ${date ? `<li class="launch-detail">Launch time: <time datetime="${getDateTime(date)}">${formateDate(date)}</time></li>` : ''}
        ${launch.rocket ? `<li class="launch-detail">Rocket: ${launch.rocket.rocket_name}</li>` : ''}
        ${ launch.launch_site ? `<li class="launch-detail">Launch site: ${launch.launch_site.site_name_long}</li>` : ''}
    </ul>
    `;

    return launchContainer;
}

function getDateTime(date) {
    if (!date) return;

    const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/g;

    return date.match(datePattern)[0];
}

function formateDate(date) {
    if (!date) return;

    const datePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/g;
    const formattedDate = date.match(datePattern)[0].split('T');
    const timeString = formattedDate[1];
    const dateString = formattedDate[0].split('-').reverse().join('.');

    return `${dateString} ${timeString} o'clock`;
}