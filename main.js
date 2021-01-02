/**
 * @autor habilozcan@gmail.com
 */
//Ntes of the classes are arrange and saved in two dimentional array
const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

function medianCalculation(notesList2D) {
    /**
     * In this function calculated median of the notes and
     * list of the students who has at least one note greater than 70 
     * in any lesson and
     * list of the students who has all lessons great than its corresponded medians
     */

    let mathMed = 0;
    let deutschMed = 0;
    let englishMed = 0;
    let geoMed = 0;

    let counter = notesList2D.length;
    let index0 = -1;
    let nameListG = []; //list of students who has atleast one note greater than 70
    let nameListGM = []; //list of students who has greater notes than all medians

    for (let index = 0; index < counter; index++) {
        mathMed += notesList2D[index][1];
        deutschMed += notesList2D[index][2];
        englishMed += notesList2D[index][3];
        geoMed += notesList2D[index][4];

        if (notesList2D[index][1] > 70 || notesList2D[index][2] > 70 || notesList2D[index][3] > 70 || notesList2D[index][4] > 70) {
            nameListG[++index0] = notesList2D[index][0];
        }
    }
    mathMed /= counter;
    deutschMed /= counter;
    englishMed /= counter;
    geoMed /= counter;

    index0 = -1;
    for (let index = 0; index < counter; index++) {
        if (notesList2D[index][1] > mathMedian && notesList2D[index][2] > deutschMedian &&
            notesList2D[index][3] > englishMedian && notesList2D[index][4] > geoMedian) {
            nameListGM[++index0] = notesList2D[index][0];
        }
    }

    return [mathMed, deutschMed, englishMed, geoMed, nameListG, nameListGM];

}

let mathMedian;
let deutschMedian;
let englishMedian;
let geoMedian;
let nameListGT = [];
let nameListGTM = [];

[mathMedian, deutschMedian, englishMedian, geoMedian,
    nameListGT, nameListGTM
] = medianCalculation(notes);

function bestStudentNotes(notesList2D) {
    /**
     * In this function best student from each lessons and also best and worst lessons
     */

    let indexOfMaxMath = 0;
    let indexOfMaxDeut = 0;
    let indexOfMaxEngl = 0;
    let indexOfMaxGeo = 0;
    let mathTemp = 0;
    let deutTemp = 0;
    let englTemp = 0;
    let geoTemp = 0;
    let counter = notesList2D.length;


    for (let index = 0; index < counter; index++) {
        if (notesList2D[index][1] > mathTemp) {
            mathTemp = notesList2D[index][1];
            indexOfMaxMath = index;
        }
        if (notesList2D[index][2] > deutTemp) {
            deutTemp = notesList2D[index][2];
            indexOfMaxDeut = index;
        }
        if (notesList2D[index][3] > englTemp) {
            englTemp = notesList2D[index][3];
            indexOfMaxEngl = index;
        }
        if (notesList2D[index][4] > geoTemp) {
            geoTemp = notesList2D[index][4];
            indexOfMaxGeo = index;
        }
    }

    let bestMath = notesList2D[indexOfMaxMath][0];
    let bestDeut = notesList2D[indexOfMaxDeut][0];
    let bestEngl = notesList2D[indexOfMaxEngl][0];
    let bestGeo = notesList2D[indexOfMaxGeo][0];

    //best and worst medians finded
    const medianNotes = [
        ["Math", mathMedian],
        ["Deutsch", deutschMedian],
        ["English", englishMedian],
        ["Geography", geoMedian]
    ];

    let indexOfBestMed = 0;
    let indexOfWorstMed = 0;
    let tempBest = -1.0;
    let tempWorst = 1000.0;


    for (let index = 0; index < medianNotes.length; index++) {

        if (medianNotes[index][1] > tempBest) {
            tempBest = medianNotes[index][1];
            indexOfBestMed = index;
        }
        if (medianNotes[index][1] < tempWorst) {
            tempWorst = medianNotes[index][1];
            indexOfWorstMed = index;
        }
    }
    let bestLesson = medianNotes[indexOfBestMed];
    let worstLesson = medianNotes[indexOfWorstMed];

    return [bestMath, bestDeut, bestEngl, bestGeo, bestLesson, worstLesson];
}

let bestMath, bestDeut, bestEngl, bestGeo, bestLesson, worstLesson;

[bestMath, bestDeut, bestEngl, bestGeo, bestLesson, worstLesson] = bestStudentNotes(notes);


console.log(" Math median is: " + mathMedian + "\n Deutsch median is: " + deutschMedian +
    "\n English median is: " + englishMedian + "\n Georaph median is: " + geoMedian);

console.log("Student who has at least one note greater than 70 is listed below \n");
nameListGT.forEach(entry => console.log(entry + "\n"));

console.log("Student who has all notes greater than median Notes is listed below \n");
nameListGTM.forEach(entri => console.log(entri + "\n"));

console.log("In Math: "+bestMath+ "\nIn Deutsch: "+ bestDeut+ "\nIn English: "
    +bestEngl+ "\nIn Geograpy: "+ bestGeo+"\nare the bests");

console.log("The class has the best notes in " + bestLesson + "\n");

console.log("The class has the worst notes in " + worstLesson + "\n");