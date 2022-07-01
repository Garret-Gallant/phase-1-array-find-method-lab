// // code your solution here
// // const findAWin = (element) => {

// //     if (element !== undefined){
// //         return element.year;
// //         }
// //         return element;
//     // else if (element.result !== "W"){
//     //     return undefined;
//     // }
// }

// const superbowlWin = (array) => {
//     return array.result === `W`;
// }

// return(superbowlWin(record));

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

// step 1, check for a true/false value, verify conditions match
// step 2, if conditions match, return the object year.

function superbowlWin(record) {
    const W = record.find(elem => elem.result === "W");
    return W ? W.year : undefined;
}
