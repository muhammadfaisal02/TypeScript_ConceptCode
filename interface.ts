//interFace 
interface mamoon {                      //initialize interface and types
    born: number;
    name: string;
    age:number;
    }
    
let valueLater1:mamoon;                 //Assign Interface to object
// Ok
valueLater1 = {                         //Assign values in object
born: 1935,
name: 'Sara Teasdale',
age:22
};
console.log(valueLater1);               //see result

//Alies

type mamoon1 = {                        //initialize Alice and types.
    born: number|undefined;
    name: string;
    age:number;
    }
    
let valueLater:mamoon;                  //Assign Alice to object
// Ok
valueLater = {                          //Assign values to object
born: 66,
name: 'Sara Teasdale',
age:645
};
console.log(valueLater);                //see resulte


//interface example

interface students{                     //initialize students interface and types
    fname:string;
    Lname:string;
    subject:string|number;
    ID:number;
};


let student1:students={                 //Assign intesface to student1 object
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,

}
console.log(student1)                   //see result

let student2:students={                 //Assign intesface to student2 object
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,

}
console.log(student2)                   //see result

let student3:score={                    //Assign intesface to student3 object
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,
    marks:55

}
console.log(student3)                   //see result

let student4:students={                //Assign intesface to student4 object
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,

}

console.log(student4);                  //see result


interface score extends students{       //Adding new property in students interface by extends keyword
    marks:number
}

// Alice example




type students1={                         //initialize Alice and types
    fname:string;
    Lname:string;
    subject:string|number;
    ID:number;
};


let Newstudent1:students={              //Assign Alice to student1 object
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,

}
console.log(Newstudent1)                //see result

let Newstudent2:students={              //Assign Alice to student2 object
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,

}
console.log(Newstudent2)                //see result

let Newstudent3:Newscore={              //Assign Alice to student3 object and modified by Alice method (=/&)
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,
    marks:55

}
console.log(Newstudent3)                //see result

let Newstudent4:students={              //Assign Alice to student4 object
    fname:"Muhammad",
    Lname:"Mamoon",
    subject:10,
    ID:10,

}

console.log(Newstudent4);               //see result


type Newscore = students&{              //Adding new property in students Alice by (=/&) keyword
    marks:number
}