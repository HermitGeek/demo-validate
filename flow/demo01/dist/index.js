let value = 1;
value = 2;
console.log(value);

function sum(arr) {
  const total = arr.reduce((item, value) => {
    return item + value;
  });
  console.log('total', total);
}

sum([1, 2, 3]);