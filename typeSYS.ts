//Type Annotation

// let fname;              //Decalair variable for first time.
// console.log(fname);     // See their result in console.

// fname = "faisal";       //Assign string.
// console.log(fname);     // See their result in console.

// fname = 93;             //Assign number
// console.log(fname);     // See their result in console.

// fname = false;          //Assign Boolean
// console.log(fname);     // See their result in console.

// fname = null;           //Assign null
// console.log(fname);     // See their result in console.

//Union Type 

// let singer: number|string;
// singer = "Atif";
// singer = 88;
// singer= Math.random() >0.8
// ? "Singer Here"
// :"number Here";
// console.log(singer)

//Norrowing Type 

// let singer: number|string;

// singer = "Atif";
// console.log(singer.length);

// singer = 88.888;
// console.log(singer.toFixed(2));

// let rapper = 888.999;
// rapper.toFixed(2);
// console.log(rapper);

//Example of Union By switch case

// let singer: number|string|boolean;
// singer = "Atif";
// singer = 88;
// switch (singer = Math.random() > 0.4) {
//     case singer: "Atif"
//         console.log("singer Here");
//         break;
//     case singer: 88
//         console.log("Number Here");
//         break;
//     default: "Check Your Code"
//         break;
// }

//Example of Union By if/else Method

// let singer: number | string | boolean;

// singer = "Zeeshan";
// singer = 55;

// if ( singer = Math.random() > 0.8 ) {
//     console.log('Singer Here');
// } else {
//     console.log('Number Here');
// }

//Example of Union By typeof Method

// let researcher = Math.random() > 0.5
// ? "Rosalind Franklin"
// : 51;
// if (typeof researcher === "string") {
// console.log (researcher.toUpperCase()); // Ok: string
// }

// if (!(typeof researcher === "string")) {
// console.log (researcher.toFixed()); // Ok: number
// } else {
// console.log (researcher.toUpperCase()); // Ok: string
// }