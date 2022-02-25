var fib = function(n) {
  if (n === 1) {
    // return an array with [0,1]
    return [0, 1];
  } else {
    // Recursive call to themself
    // Example 2 send fib(1)
    // which return [0,1]
    var arr = fib(n - 1);
    // Following the example:
    // arr.push(1+0)
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    // return [0,1,1]
    return arr;
  }
};

console.log(fib(8));
