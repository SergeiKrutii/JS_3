import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerRef = document.querySelector('#vimeo-player')
const player = new Player(playerRef, {
    id: "vimeo-player",
    width: 640
});
let savedTime = localStorage.getItem('videoplayer-current-time')
const onCurrentTime = function (options) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(options.seconds))
    
}

player.on('timeupdate', throttle(onCurrentTime, 1000));
player.setCurrentTime(savedTime)

