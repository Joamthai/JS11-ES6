object = { firstName: 'John', lastName: 'Doe', age: 15 };

function checkAge(obj) {
  if (obj.age < 18) {
    console.log('Not access');
  } else {
    console.log(`${obj.firstName} ${obj.lastName}`);
  }
}

checkAge(object);
