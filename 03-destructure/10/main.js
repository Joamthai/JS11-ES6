let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(salaries) {
  let maxSalary = 0;
  let topEarner = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarner = name;
    }
  }

  return topEarner;
}
console.log(topSalaries(salaries));
