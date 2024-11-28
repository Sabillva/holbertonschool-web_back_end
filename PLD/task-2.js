const arr_of_objects = [
  { name: "Alice", grade: 85, passed: true },
  { name: "Bob", grade: 70, passed: false },
  { name: "Charlie", grade: 90, passed: true },
];

const new_arr = arr_of_objects.find(student => !student.passed);
console.log(new_arr);

const threshold = 80;
const new_arr_2 = arr_of_objects.some(student => student.grade > threshold);
console.log(new_arr_2);

const new_arr_3 = arr_of_objects.every(student => student.passed);
console.log(new_arr_3);