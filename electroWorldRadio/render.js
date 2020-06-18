const LautFm = require('lautfm');
const $ = require('jquery'); 

const laut = new LautFm();
let player = $('audio').get(0);

let letra = 'a';

function setLetter(input){
    letra = $(input).val();
    $('#station-list').html('');
    $('.window-content').addClass('radio-list');

    laut.getStations({
        by:'letter', term: letra
    }).then((stationsData) => {
        if(stationsData){
            
            stationsData.forEach(station => {
                singleStation = `
                <li class="list-group-item radios" ondblclick="playStream('${station.stream_url}', this)">
                    <img class="img-circle media-object pull-left" src="${station.images.station_120x120}" width="32" height="32">
                    <div class="media-body">
                        <strong>${station.display_name}</strong>
                        <p>${station.description}</p>
                    </div>
                </li>                
                `
                $('#station-list').append(singleStation);
    
            })
        }
    }).catch((err) => {
        console.log(err);
    });
}

function playStream(url, li){    
    $('.list-group-item').removeClass('active');
    $(li).addClass('active');
    player.src = url;
    player.load();
    player.play();
}