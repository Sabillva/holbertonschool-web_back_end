const person = {
  name: "Allahverdiyeva Sabina",
  age: 20,
  address: {
    street: "3 Dusharga St",
    city: "Baku",
    country: "Azerbaijan",
  },
};

const {
    name,
    age,
    address: { street, city, country = 'Unknown' },
    profession = 'Unemployed',
  } = person;

console.log(name);
console.log(age);
console.log(profession);


