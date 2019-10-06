console.log('Be the composer');
// const vex = require('vexflow');

let vf = new Vex.Flow.Factory({
    renderer: {elementId: 'new-song'}
});

let score = vf.EasyScore();
let system = vf.System();
// function writeNote(time_signature, notesArray, clef) {
//     document.getElementById('score');
//     score.set({time: time_signature});
// // in order to render the drawing, I will need to increment the time with each additional note value.
//     system.addStave({
//         voices: [score.voice(score.notes(notesArray))]
//     }).addClef(clef);
//
//     vf.draw();
// }
//Handlebars.registerHelper("writeNote", function(pitch, rhythm) {
function writeNote(pitch, rhythm){
    document.getElementById('score');
    score.set({time: "1/4"});
    system.addStave({
        voices: [score.voice(score.notes(pitch + rhythm))]
    }).addClef('treble');
    vf.draw();
}

// function writeNote() {
//     document.getElementById('score');
//     score.set({time: '5/4'});
// // in order to render the drawing, I will need to increment the time with each additional note value.
// // system.addStave({
// //     voices: [ score.voice(score.beam(score.notes('C5/8, C5, C5, C5')
// //         .concat(score.notes('D5/q, D5')))) ]
// //
// // }).addClef('treble');
//
//     system.addStave({
//         voices: [score.voice(score.notes("C4/q, D4/q, E4/q, F4/q, G4/q"))]
//     }).addClef('treble');
//
//     vf.draw();
// }

