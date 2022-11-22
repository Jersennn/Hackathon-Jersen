const playBtn = document.querySelector(".playBut");
playBtn.addEventListener("click", () => {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(120);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'A5');
piano.note('quarter', 'B5');
piano.note('quarter', 'C6');
piano.note('quarter', 'C6');
piano.note('quarter', 'D6');
piano.note('quarter', 'C6');
piano.note('half', 'B5');
piano.note('quarter', 'E5');
piano.note('quarter', 'G5');
piano.note('quarter', 'A5');
piano.note('quarter', 'A5');
piano.note('quarter', 'G5');
piano.note('quarter', 'F5');
piano.note('half', 'G5');
// piano.note('quarter', '0');
// piano.note('quarter', 'G5');
// piano.note('quarter', 'G5');
// piano.note('quarter', 'Eb5');
// piano.note('quarter', 'F5');
// piano.note('quarter', 'F5');
// piano.note('quarter', 'C5');
// piano.note('quarter', 'F5');
// piano.note('half', 'G5');
// piano.note('quarter', 'G#5');
// piano.note('quarter', 'G5');
//  piano.note('half', '0');
// piano.note('quarter', 'A5');
// piano.note('quarter', 'B5');
// piano.note('quarter', 'C6');
// piano.note('quarter', 'C6');
// piano.note('quarter', 'D6');
// piano.note('quarter', 'C6');
// piano.note('half', 'B5');
// piano.note('quarter', 'E5');
// piano.note('quarter', 'G5');
// piano.note('quarter', 'A5');
// piano.note('quarter', 'A5');
// piano.note('quarter', 'G5');
// piano.note('quarter', 'F5');
// piano.note('half', 'G5');



var player = conductor.finish();
player.play()
})