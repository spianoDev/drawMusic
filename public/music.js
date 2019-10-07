console.log('Be the composer');
// const vex = require('vexflow');

let vf = new Vex.Flow.Factory({
    renderer: {elementId: 'new-song'}
});

let score = vf.EasyScore();
let system = vf.System();
let notesOfSong = [];
// Tried to beam the eighth notes, but it was getting too complicated.
// let beams = vf.Beam.generateBeams(notes);
// Vex.Flow.Formatter.FormatAndDraw(vf, system, notes);
// beams.forEach(function(beam) {
//     beam.setContext(vf).draw();
// });
// function to create banked songs
function writeScore(numBeats, notesArray, clef) {
    document.getElementById('score');
    score.set({time: `${numBeats}/4`});
    console.log(notesArray);
// in order to render the drawing, I will need to increment the time with each additional note value.
    if (numBeats % 3 === 0) {
    system.addStave({
        voices: [score.voice(score.notes(notesArray))]
    }).addClef(clef).addTimeSignature("3/4");
    } else if (numBeats % 4 === 0) {
        system.addStave({
            voices: [score.voice(score.notes(notesArray))]
        }).addClef(clef).addTimeSignature("4/4");
    } else if (numBeats % 5 === 0) {
        system.addStave({
            voices: [score.voice(score.notes(notesArray))]
        }).addClef(clef).addTimeSignature("5/4");
    } else if (numBeats % 2 === 0) {
        system.addStave({
            voices: [score.voice(score.notes(notesArray))]
        }).addClef(clef).addTimeSignature("2/4");
    }
    vf.draw();
}
// function to create an individual note
function writeNote(pitch, rhythm){
    document.getElementById('score');
    if (rhythm === '/8') {
        score.set({time: "1/8"})
    } else if (rhythm === '/q') {
        score.set({time: "1/4"});
    } else if (rhythm === '/h') {
        score.set({time: "1/2"});
    }
    system.addStave({
        voices: [score.voice(score.notes(pitch + rhythm))]
    }).addClef('treble');

    vf.draw();
}

// function to add a note and rhythm to the newSong array
//https://www.w3schools.com/jsref/met_node_appendchild.asp
// With some help from Nathaniel, I was able to modify this function slightly to take in each item as a separate input

function addNote() {
    document.getElementById('add-note');
    let pitch = document.getElementById('pitch').value;
    let rhythm = document.getElementById('rhythm').value;
    let nextNote = document.createElement('li');
    let inputNote = document.createElement('input');
    inputNote.setAttribute('type', 'text');
    inputNote.setAttribute('name', 'notes');
    inputNote.setRangeText(`${pitch}${rhythm}`);
    nextNote.appendChild(inputNote);
    document.getElementById('note-array').appendChild(nextNote);
    console.log(nextNote);
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

