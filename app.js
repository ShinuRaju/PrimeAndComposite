let input = document.querySelector("input");
let p = document.querySelector("p");
let btn = document.querySelector("button");
let givenNum = input.value;
let row = document.querySelector(".row");

// console.log(n);

//check for prime

let isPrime = (num) => {
  let sqreNum = Math.floor(Math.sqrt(num));

  let prime = num !== 1;

  for (let i = 2; i < sqreNum + 1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return `${num} ${prime ? "is a prime number" : "is a composite number"}`;
};

let primeFactors = (num) => {
  let arr = [];
  //if number is even
  while (num % 2 === 0) {
    arr.push(2);
    num = Math.floor(num / 2);
  }
  //if number is odd
  for (let i = 3; i < Math.sqrt(num); i = i + 2) {
    while (num % i === 0) {
      arr.push(i);
      num = Math.floor(num / i);
    }
  }

  //if number is prime

  if (num > 2) {
    arr.push(num);
  }
  return `the factors are ( ${arr} )`;
};

// console.log(primeFactors(0));

let clickFunction = () => {
  let givenNum = Math.abs(Number.parseInt(input.value));

  if (givenNum === 0) {
    givenNum = 2;
    input.value = 2;
    alert(
      "0 is neither a prime not a composite, unable to factorize. So give another number"
    );
  }

  p.textContent = `${isPrime(givenNum)} and ${primeFactors(givenNum)} `;
};

// clickFunction();

btn.addEventListener("click", () => {
  clickFunction();
});
