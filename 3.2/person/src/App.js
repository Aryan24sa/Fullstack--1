import React from "react";
import "./App.css";

// 🔹 Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getRole() {
    return "Person";
  }

  getGreeting() {
    return `Hello, my name is ${this.name}.`;
  }
}

// 🔹 Student Class
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  getRole() {
    return "Student";
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

// 🔹 Teacher Class
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getRole() {
    return "Teacher";
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

function App() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics"),
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} className="card">
          <h2>
            {person.name} ({person.getRole()})
          </h2>

          <p>
            <strong>Age:</strong> {person.age}
          </p>

          <p className="greeting">{person.getGreeting()}</p>

          {person instanceof Student && (
            <p>
              <strong>Major:</strong> {person.major}
            </p>
          )}

          {person instanceof Teacher && (
            <p>
              <strong>Teaching:</strong> {person.subject}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
