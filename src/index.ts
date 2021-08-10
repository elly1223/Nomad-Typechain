class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human('Lynn', 19, 'female');

// interface Human {
//   // interface는 typescript에서만 작동한다!
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: 'nicolas',
//   age: 22,
//   gender: 'male',
// };

const sayHi = (person: Human): string => {
  // gender parameter는 선택적이게 된다!
  return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

// const sayHi: (name: string, age: number, gender: string) => void;
console.log(sayHi(lynn));

export {};
