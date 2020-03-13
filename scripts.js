window.addEventListener("load", function() {
    console.log("Page is fully loaded.");

    let rocket = document.getElementById("rocket");
    let status = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketImage = document.getElementById("rocket");

    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
        let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (isReady) {
            status.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
        }
    });

    let land = document.getElementById("landing");
    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.")
        status.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
        rocket.style.top = "250px";
        rocket.style.right = "0px";
    });

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function (event) {
        let shouldAbort = window.confirm("Confirm that you want to abort the mission.");
        if (shouldAbort) {
            status.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
            rocket.style.top = "250px";
            rocket.style.right = "0px";
        }
    });

    moveRocket = function (direction) {
        let yPosition = rocket.style.top.slice(0, rocket.style.top.indexOf("p"));
        let xPosition = rocket.style.right.slice(0, rocket.style.right.indexOf("p"));

        if (direction === 'up') {
            rocket.style.top = (Number(yPosition) - 10) + "px";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        } else if (direction === 'down') {
            rocket.style.top = (Number(yPosition) + 10) + "px";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        } else if (direction === 'left') {
            rocket.style.right = (Number(xPosition) + 10) + "px";
        } else if (direction === 'right') {
            rocket.style.right = (Number(xPosition) - 10) + "px";
        }
    }

});