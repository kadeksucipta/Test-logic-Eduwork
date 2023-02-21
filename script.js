// Soal No 1 Factorial
console.log("Soal No.1 Factorial");

const factorial = (angka) => {
  let result = 1;
  let process = "";
  for (let i = angka; angka > 0; angka--) {
    result *= angka;
    process += angka !== 1 ? `${angka.toString()}*` : `${angka.toString()}`;
  }
  return `${result} (prosesnya : ${process})`;
};

console.log(factorial(4));
console.log(factorial(8));

console.log("===============================================");

// Soal No 2 Reverse Arrays Without Using reverse
console.log("Soal No.2 Reverse Arrays Without Using reverse");

const reverseHuruf = (word) => {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};
console.log(`"A-B-C-D-E" : "${reverseHuruf("A-B-C-D-E ")}"`);

console.log("===============================================");

// Soal No 3 Menampilkan digit angka
console.log("Soal No.3 Menampilkan digit angka");

const digitAngka = (word) => {
  let number = "";
  for (let i = 0; i < word.length; i++) {
    if (parseInt(word[i])) number += word[i];
  }
  console.log(number);
  for (let i = 0; i < number.length; i++) {
    let print = number[i];
    for (let j = i + 1; j < number.length; j++) {
      print += "0";
    }
    console.log(print);
  }
};

digitAngka("9.86-A5.321");

console.log("===============================================");

// Soal No 4 swap 2 integer variables tanpa VARIABLE TAMBAHAN
console.log("Soal No.4 integer variables tanpa VARIABLE TAMBAHAN");

function test() {
  var a = 3;
  var b = 7;
  console.log("a awal = ", a);
  console.log("b awal = ", b);

  //penyelesaian
  a -= b; //a = a - b | a = 1 -2 = -1
  b += a; //b = b + a | b = 2 + -1 = 1
  a = b - a; //a = 2

  console.log("a final =", a);
  console.log("b final =", b);
}
test();

console.log("===============================================");

// Soal No 5  Menampilkan nominal huruf
console.log("Soal No.5  Menampilkan nominal huruf");

const angkaHuruf = (number) => {
  const numList = [
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
  ];
  if (number > 100 || number === 0) return "Silahkan masukkan bilangan 1 - 100";
  if (number === 10) return "Sepuluh";
  if (number === 11) return "Sebelas";
  if (number === 100) return "Seratus";

  const stringNumber = number.toString();
  if (stringNumber.length === 1) return `${numList[number - 1]}`;

  if (number < 20) {
    return `${numList[parseInt(stringNumber[1]) - 1]} Belas`;
  }

  if (number % 10 === 0)
    return `${numList[parseInt(stringNumber[0]) - 1]} Puluh`;

  return `${numList[parseInt(stringNumber[0]) - 1]} Puluh ${
    numList[parseInt(stringNumber[1]) - 1]
  }`;
};

console.log(4, "=", angkaHuruf(4));
console.log(20, "=", angkaHuruf(20));
console.log(39, "=", angkaHuruf(39));
console.log(104, "=", angkaHuruf(104));

console.log("===============================================");

// Soal No 6 Filter
console.log("Soal No.6 Filter ");

const filterArray = (arr, low, high) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= low && arr[i] <= high) {
      newArr = [...newArr, arr[i]];
    }
  }
  return newArr;
};

const filtered = filterArray([1, 4, 7, 9, 12], 2, 15);
console.log(filtered);
console.log("===============================================");
// Soal No 7 Output
console.log("Soal No.7 Output");
console.log(filtered.length);

console.log("===============================================");

// Soal No 8 Susun Eduwork
console.log("Soal No.8 Susun Eduwork");
const eduwork = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Eduwork");
      continue;
    }
    if (i % 3 === 0) {
      console.log("Edu");
      continue;
    }
    if (i % 5 === 0) {
      console.log("Work");
      continue;
    }
    console.log(i);
  }
};
eduwork(15);

console.log("===============================================");

// Soal No 9 menentukan bilangan terkecil dan terbesar dari sebuah array
console.log(
  "Soal No 9 menentukan bilangan terkecil dan terbesar dari sebuah array"
);

const lowHigh = (array) => {
  let lowest = array[0];
  let highest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    }
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  return {
    low: lowest,
    high: highest,
  };
};
console.log(lowHigh([4, 2, 6, 88, 3, 11]));

console.log("===============================================");

// Soal No 10 mengecek tahun kabisat
console.log("Soal No.10 mengecek tahun kabisat");

const tahunKabisat = (tahun) => {
  if (tahun % 4 === 0) return `${tahun} adalah tahun kabisat`;
  return `${tahun} bukan adalah tahun kabisat`;
};
console.log(tahunKabisat(2021));
console.log(tahunKabisat(2024));

console.log("===============================================");
