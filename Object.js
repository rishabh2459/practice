let mukeshObj = {
  name: "Rishabh",
  city: ["noida", "Delhi", "Meerut"],
  details: [
    { name: "Rishabh", id: "A12" },
    { name: "Ri", id: "A13" },
    { name: "Rish", id: "A14" },
  ],
  id: 11,
  m1: function () {
    console.log("Function in object");
  },
  intern: {
    name: "abc",
    id: 12,
  },
};

// console.log(obj.city)
// obj.city.map((a) => {
//     console.log(typeof a)
// })

// const { name,city,details,id,m1,obj1} = obj
// const { name: name1 } = obj1
// console.log(name);
// console.log(city);
// console.log(name1);

// let newObj = {...mukeshObj}
// newObj.name="Ritesh"
// console.log(newObj);
// console.log(mukeshObj);

//object declare me ":" use hota hai
let students = {
  arrObj: [
    { name: "Rishabh", rollnumber: 1, city: "Noida" },
    { name: "Sparsh", rollnumber: 2, city: "delhi" },
    { name: "Nirmal", rollnumber: 3, city: "ghaziabad" },
    { name: "Shubhendra", rollnumber: 4, city: "gurugram" },
    { name: "Mayank", rollnumber: 5, city: "faridabad" },
  ],
};

const {arrObj}= students;
// updatedArr = arrObj.map((arr) => {
    // return arr.name + " roll-no =" + arr.rollnumber;
    
    arrObj.map((arr) => {
        console.log(arr.name, "roll-no =" + arr.rollnumber);
        
    });
    // console.log(updatedArr);



    // To find the details for the noida place person
    filteredArray = arrObj.filter((a)=> {
        return a.city ==="Noida";
    });

    console.log(filteredArray);

