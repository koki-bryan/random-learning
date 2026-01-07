function problem1(): void {
  const age: number = 19;
  const name: string = "sean";
  const isLoggedIn: boolean = true;

  console.log(`Name: ${name} \nAge: ${age} \nStatus: ${isLoggedIn}`);
}

const problem2 = (): void => {
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(add(1, 2));
};

const problem3 = (): void => {
  const greet = (name: string, title?: string): void => {
    if (!title) {
      console.log("hello " + name);
      return;
    }
    console.log("hello " + name + " from " + title);
  };
  greet("sean", "philippines");
};

const problem4 = (): void => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  const average = (arr: number[]): number => {
    let ave = 0;
    for (let i = 0; i < arr.length; i++) {
      ave += arr[i];
    }
    return ave;
  };
  console.log(average(numbers));
};

const problem5 = (): void => {
  type User = {
    first_name: string;
    last_name: string;
    age: number;
    list(nickname?: string): void;
  };
  const user1: User = {
    first_name: "Sean Bryan",
    last_name: "Noces",
    age: 19,
    list(n) {
      if (!n) {
        console.log(`${this.first_name} ${this.last_name} ${this.age}`);
        return;
      }
      console.log(`${this.first_name} ${this.last_name} ${this.age} ${n}`);
    },
  };
  user1.list("string");
};

const problem6 = (): void => {
  const print = (message: string | number) => {
    console.log(message);
  };

  print("Hello");
  print(123);
};

const pr7 = () => {
  type Quad = {
    shape: "quad";
    side: number;
  };
  type Tri = {
    shape: "tri";
    side: number;
  };
  const print = (p: Quad | Tri | string): number | string => {
    if (typeof p === "string") {
      return p.toUpperCase();
    } else {
      if (p.shape === "quad") {
        return p.side * 2;
      }
      return p.side * 3;
    }
  };

  console.log(print("sean"));

  const shape1: Quad = { shape: "quad", side: 5 };
  const shape2: Tri = { shape: "tri", side: 5 };
  console.log(print(shape1));
  console.log(print(shape2));
};

const pr8 = () => {
  type Person = {
    name: string;
    age: number;
    id: number;
  };
  const person1: Person = {
    name: "sean",
    age: 19,
    id: 12345,
  };
  const person12: Person = {
    name: "sandra",
    age: 20,
    id: 24,
  };
  const person13: Person = {
    name: "noc",
    age: 19,
    id: 241,
  };
  const person4: Person = {
    name: "rod",
    age: 19,
    id: 2419,
  };
  const person5: Person = {
    name: "bryan",
    age: 19,
    id: 901,
  };

  const users: Person[] = [person1, person12, person13, person4, person5];
  function takeId(users: Person[]): void {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].id + " ");
    }
  }
  takeId(users);
};
pr8();
