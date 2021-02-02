var express = require('express');
var router = express.Router();

// const play = require('audio-play');
// const load = require('audio-loader');
// /* GET users listing. */


// load("../static/images/NiuDuyenDaiMeoRemix.mp3").then(play)
// analyser = null

// document.onclick = () => {
//     context = new AudioContext()
//     analyser = context.createAnalyser()
//     context.createMediaElemenSource(audio).connect(analyser)
//     analyser.connect(context.destination)
//     audio.play()
//     loop()
// }

// function loop() {
//     window.requestAnimationFrame(loop)
//     fbc = new Uint8Array(analyser.frequencyBinCount);
//     analyser.getByteFrequencyData(fbc);

//     avg = fbc.reduce((a, b) => a + b, 0) / fbc.length
//     document.getElementById('img').style.width = avg * 5
//     document.body.style.backgroundColor =
//         `rgb(` + avg + `, ` + avg + `, ` + avg + `)`
// }


module.exports = router;