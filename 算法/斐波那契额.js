const cache = {};

const fn = n => {
  if (n === 1 || n === 2) {
    return cache[n] || (cache[n] = 1);
  }

  return cache[n] || (cache[n] = fn(n - 1) + fn(n - 2));
};
