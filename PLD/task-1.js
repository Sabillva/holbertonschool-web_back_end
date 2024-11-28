const arr_of_objects = [
  { name: "laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 50, category: "Clothing" },
  { name: "Phone", price: 500, category: "Electronics" },
];
const new_arr = arr_of_objects.filter(
  (product) => product.category === "Electronics"
);
console.log(new_arr);

const new_arr_2 = new_arr.map((product) => product.price);
console.log(new_arr_2);

const new_arr_3 = new_arr_2.reduce((total, price) => total + price, 0);
console.log(new_arr_3);
