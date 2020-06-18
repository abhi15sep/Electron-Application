const LautFm = require("lautfm");
const $ = require("jquery");
const laut = new LautFm();
let player = $("audio").get(0);

laut
  .getStations({ by: "letter", term: "e" })
  .then((stations) => {
    if (stations) {
      stations.forEach((station) => {
        console.log(station);
        let singleStation = `

            <li class="list-group-item" ondblclick="playStream('${station.stream_url}', this)">
                <img class="img-circle media-object pull-left" src="${station.images.station_120x120}" width="32" height="32">
                <div class="media-body">
                    <strong>${station.display_name}</strong>
                    <p>${station.description}</p>
                </div>
            </li>
            `;

        $("#station-list").append(singleStation);
      });
    }
  })
  .catch((e) => {
    console.log(e);
  });

function playStream(url, li) {
  let allStations = $(".list-group-item");
  allStations.removeClass("active");
  $(li).addClass("active");
  player.src = url;
  player.load();
  player.play();
}
