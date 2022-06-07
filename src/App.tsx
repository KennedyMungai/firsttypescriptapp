import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printNameFunction: (name:string) => void;

function printName(name:string) {
  console.log(name);
}

interface PersonInterface {
  name: string,
  age: number,
  isAdult: boolean
}

class John implements PersonInterface {
  name = "Chickenmwings";
  age = 28;
  isAdult = true
};

printName("Shapoopie");

// type Person={
//   name: string,
//   age?: number
// };

// let person: Person = {
//   name: "Nemo",
//   age: 12
// };

// let lotsOfPeople: Person[];

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
