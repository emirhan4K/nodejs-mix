var toplam = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    toplam = toplam + i;
  }
}
console.log(toplam)

const user = { name: "Ali", age: 20 };

function changeUser() {
  user.age = 25;
  console.log(user.age);
}

changeUser();
console.log(user.age);