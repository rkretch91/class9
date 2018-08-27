let people = [{name: 'Joe', birthCity: 'Berlin', birthYear: 1944, deathYear: 2009}, {name: 'John', birthCity: 'New York', birthYear: 1922, deathYear: 2013}, {name: 'Jane', birthCity: 'Berlin', birthYear: 1901, deathYear: 1999}, {name: 'Gertrude', birthCity: 'Moscow', birthYear: 1901, deathYear: 2008}, {name: 'Manny', birthCity: 'London', birthYear: 1955, deathYear: 1988}, {name: 'Lollipop', birthCity: 'Berlin', birthYear: 1977, deathYear: 2005},]


let jsExamScores = [12, 99, 99, 100, 50, 34, 55, 34, 99, 88, 56, 70, 100, 100, 100, 92];






//FILTER FILTER FILTER  
//1 Filter out all grades that are above 50
let grades = [];
for(let i = 0; i < jsExamScores.length; i++) {
if (jsExamScores[i] >= 50) {
grades.push(jsExamScores[i]);
}
}
console.log(grades);

//2 Filter out all people born in Berlin
let cityBorn =  people.filter(y => y.birthCity == "Berlin")
console.log(cityBorn);
//3 Filter out people born between 1900 and 1930
let midAge = people.filter(people => (people.birthYear >= 1900 && people.birthYear < 1930));
console.log(midAge);

//4 Filter out those who had lived over 50 years
let oldPeople = people.filter(people => (people.birthYear >= 1950 && people.birthYear < 2000));
console.log(oldPeople);


//MAP MAP MAP
//5 Create an array of all the names from our array of people 
let peopleNames = people.map(function(x){
  return x.name;

});
console.log(peopleNames);

//6 Use map to make an array that looks like ['Joe [1944-2009], ...']

//7 Oh my god, looks like a magical fairy multiplied all the scores by 3, create a new array with the result

//8 Just kidding, he was evil. Take the new scores and divide them by 5 using map twice!


//SORT SORT SORT
//9 Sort the people by birthdate (ascending)

//10 Sort the scores in descending order


//REDUCE REDUCE REDUCE
//11 Add all the original scores together using reduce! 

//12 Get the total number of years lived by all people in the array




//SORT SORT SORT
//9 Sort the people by birthdate (ascending)

let birthYeasort = people.sort((personA, personB) =>
personA.birthYear - personB.birthYear);
console.log(birthYeasort);

//10 Sort the scores in descending order


//REDUCE REDUCE REDUCE
//11 Add all the original scores together using reduce! 

//12 Get the total number of years lived by all people in the array

