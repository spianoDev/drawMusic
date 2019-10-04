console.log("Be the composer!");
const VF = Vex.Flow;

let vf = new VF.Factory({
    renderer: {elementId: 'draw', width: 500, height: 400}
});

let score = vf.EasyScore();
let system = vf.System();

system.addStave({
    voices: [
        score.voice(score.notes('C5/q, B4, A4, G4', {stem: 'up'})),
        score.voice(score.notes('C4/h, C4', {stem: 'down'}))
    ]
}).addClef('treble').addTimeSignature('4/4');

system.addStave({
    voices: [ score.voice(score.beam(score.notes('C5/8, C5, C5, C5')
        .concat(score.notes('D5/q, D5')))) ]

}).addClef('treble');

system.addStave({
    voices: [ score.voice(score.notes('C5/q'))]
}).addClef('treble');

vf.draw();
