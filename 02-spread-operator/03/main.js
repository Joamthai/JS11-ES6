// person = [
//     firstName: 'John',
//     lastName: 'Doe',
//     hobbies: {}

// ]

function info(name, surname, ...hobbies) {
  let amountOfHobbies = hobbies.length;
  let info = { name, surname, hobbies, amountOfHobbies };
  return info;
}

console.log(info('John', 'Doe', 'Sport', 'Movie'));

// {
//  name: ''
//  surname: ''
//  hobbies :[]
//  amountOfHobbies :
// }
