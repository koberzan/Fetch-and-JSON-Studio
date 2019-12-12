window.addEventListener('load', function(){

    let container = document.getElementById('container');

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then( response => response.json())
    .then( function(response) {
        
    response.forEach(astronaut => {

    let temp = `<div class="astronaut">
                <div class="bio">
                <h3>${response.firstName}</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
                <img class="avatar">
            </div>`
    

    });    
   
    }); 



});