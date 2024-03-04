let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString()); 

const myCreateDate = new Date(2024, 23, 3);
console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let fiDate = new Date()
console.log(fiDate.getMonth() + 1);
console.log(fiDate.getDay() + 1);
console.log(fiDate.getDay() + 1);
console.log(fiDate.getFullYear());
console.log(fiDate.getMinutes());
console.log(fiDate.getTime());

console.log(fiDate.toLocaleString(`default`, {
    weekday: "short",
    minute: "2-digit",
    month: "short",
    era: "long"
}));
