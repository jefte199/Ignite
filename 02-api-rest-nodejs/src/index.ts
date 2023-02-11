interface User {
  age: number;
}

function calcAge(user: User) {
  return new Date().getFullYear() - user.age
}

console.log(calcAge({
  age: 1996.2
}))