export interface Lesson {
    id: string
    slug: string
    title: string
    moduleNumber: number
    lessonNumber: number
    duration: number
    content: string
    videoUrl?: string
    prevLessonSlug?: string
    nextLessonSlug?: string
  }
  
  // Sample lessons data
  const lessons: Lesson[] = [
    {
      id: "1",
      slug: "introduction-to-javascript",
      title: "Introduction to JavaScript",
      moduleNumber: 1,
      lessonNumber: 1,
      duration: 15,
      videoUrl: "https://www.youtube.com/watch?v=6L_k74BOLag",
      content: `
  # Introduction to JavaScript
  
  JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
  
  ## Why Learn JavaScript?
  
  JavaScript is one of the most popular programming languages in the world. It powers the interactive behavior on websites and is essential for web development.
  
  - **Client-side web development**: JavaScript is the standard language for creating interactive web pages
  - **Server-side development**: With Node.js, JavaScript can be used on the server
  - **Mobile app development**: Frameworks like React Native allow JavaScript to be used for mobile apps
  - **Desktop applications**: Electron.js enables JavaScript to build desktop apps
  
  ## Basic Syntax
  
  Let's look at some basic JavaScript syntax:
  
  \`\`\`javascript
  // Variables
  let name = "John";
  const age = 30;
  var isStudent = true;
  
  // Functions
  function greet(person) {
    return "Hello, " + person + "!";
  }
  
  // Using the function
  console.log(greet(name)); // Outputs: Hello, John!
  
  // Arrow functions (ES6+)
  const multiply = (a, b) => a * b;
  console.log(multiply(5, 3)); // Outputs: 15
  \`\`\`
  
  ## Data Types
  
  JavaScript has several built-in data types:
  
  1. **String**: Used for text
  2. **Number**: Used for all number types (integers and floating-point)
  3. **Boolean**: true or false
  4. **Null**: Represents the intentional absence of any object value
  5. **Undefined**: Represents a variable that has been declared but not assigned a value
  6. **Object**: Collections of related data
  7. **Symbol**: Unique and immutable primitive value
  
  ## Control Flow
  
  JavaScript supports various control flow statements:
  
  \`\`\`javascript
  // Conditional statements
  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are a minor");
  }
  
  // Loops
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
  \`\`\`
  
  > **Note**: This is just a brief introduction to JavaScript. There's much more to learn about this versatile language!
  
  ## Try It Yourself
  
  Open your browser's developer console (usually by pressing F12) and try running some JavaScript code!
  `,
      nextLessonSlug: "javascript-variables",
    },
    {
      id: "2",
      slug: "javascript-variables",
      title: "JavaScript Variables and Data Types",
      moduleNumber: 1,
      lessonNumber: 2,
      duration: 20,
      content: `
  # JavaScript Variables and Data Types
  
  Variables are containers for storing data values. In JavaScript, there are three ways to declare variables: \`var\`, \`let\`, and \`const\`.
  
  ## Declaring Variables
  
  \`\`\`javascript
  // Using var (older way, function scoped)
  var name = "John";
  
  // Using let (block scoped, can be reassigned)
  let age = 25;
  
  // Using const (block scoped, cannot be reassigned)
  const PI = 3.14159;
  \`\`\`
  
  ## Variable Naming Rules
  
  - Names can contain letters, digits, underscores, and dollar signs
  - Names must begin with a letter, $ or _
  - Names are case sensitive (y and Y are different)
  - Reserved words (like JavaScript keywords) cannot be used as names
  
  ## Data Types in Detail
  
  ### Strings
  
  Strings are used to represent text and are created using single or double quotes.
  
  \`\`\`javascript
  let firstName = "Jane";
  let lastName = 'Doe';
  
  // String concatenation
  let fullName = firstName + " " + lastName;
  
  // Template literals (ES6+)
  let greeting = \`Hello, \${fullName}!\`;
  \`\`\`
  
  ### Numbers
  
  JavaScript has only one number type, which can represent both integers and floating-point values.
  
  \`\`\`javascript
  let integer = 42;
  let float = 3.14;
  let negative = -10;
  
  // Special numeric values
  let infinity = Infinity;
  let notANumber = NaN;
  \`\`\`
  
  ### Booleans
  
  Booleans represent logical values: true or false.
  
  \`\`\`javascript
  let isActive = true;
  let isLoggedIn = false;
  
  // Boolean expressions
  let isAdult = age >= 18;
  \`\`\`
  
  ### Null and Undefined
  
  \`null\` is an assignment value that represents no value or no object. It is explicitly assigned.
  \`undefined\` means a variable has been declared but not defined yet.
  
  \`\`\`javascript
  let empty = null;
  let notDefined;  // Value is undefined
  \`\`\`
  
  ### Objects
  
  Objects are collections of related data and/or functionality.
  
  \`\`\`javascript
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
  };
  
  // Accessing object properties
  console.log(person.firstName);  // Dot notation
  console.log(person["lastName"]); // Bracket notation
  \`\`\`
  
  ### Arrays
  
  Arrays are special types of objects used for storing multiple values in a single variable.
  
  \`\`\`javascript
  let colors = ["red", "green", "blue"];
  let mixed = [1, "hello", true, null];
  
  // Accessing array elements
  console.log(colors[0]);  // Outputs: red
  console.log(colors.length);  // Outputs: 3
  \`\`\`
  
  ## Type Conversion
  
  JavaScript is dynamically typed, which means you don't need to specify the data type of a variable when you declare it.
  
  \`\`\`javascript
  // Type conversion
  let num = 42;
  let str = String(num);  // Convert to string: "42"
  
  let str2 = "123";
  let num2 = Number(str2);  // Convert to number: 123
  
  let bool = Boolean(1);  // Convert to boolean: true
  \`\`\`
  
  ## Practice Exercise
  
  Try creating variables of different types and experiment with type conversion in your browser's console!
  `,
      prevLessonSlug: "introduction-to-javascript",
      nextLessonSlug: "javascript-functions",
    },
    {
      id: "3",
      slug: "javascript-functions",
      title: "JavaScript Functions",
      moduleNumber: 1,
      lessonNumber: 3,
      duration: 25,
      videoUrl: "https://www.youtube.com/watch?v=6L_k74BOLag",
      content: `
  # JavaScript Functions
  
  Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task.
  
  ## Function Declaration
  
  The most common way to define a function:
  
  \`\`\`javascript
  function greet(name) {
    return "Hello, " + name + "!";
  }
  
  // Calling the function
  console.log(greet("Alice"));  // Outputs: Hello, Alice!
  \`\`\`
  
  ## Function Expression
  
  Functions can also be created using a function expression:
  
  \`\`\`javascript
  const square = function(number) {
    return number * number;
  };
  
  console.log(square(5));  // Outputs: 25
  \`\`\`
  
  ## Arrow Functions (ES6+)
  
  Arrow functions provide a shorter syntax for writing functions:
  
  \`\`\`javascript
  // Arrow function with parameters
  const add = (a, b) => a + b;
  
  // Arrow function with function body
  const greet = name => {
    const greeting = "Hello, " + name + "!";
    return greeting;
  };
  
  console.log(add(5, 3));      // Outputs: 8
  console.log(greet("Bob"));   // Outputs: Hello, Bob!
  \`\`\`
  
  ## Parameters and Arguments
  
  Functions can take parameters (variables listed in the function definition) and arguments (values passed to the function when it is called):
  
  \`\`\`javascript
  // Function with parameters
  function introduce(firstName, lastName) {
    return "My name is " + firstName + " " + lastName;
  }
  
  // Calling with arguments
  console.log(introduce("John", "Doe"));  // Outputs: My name is John Doe
  \`\`\`
  
  ### Default Parameters (ES6+)
  
  You can specify default values for parameters:
  
  \`\`\`javascript
  function greet(name = "Guest") {
    return "Hello, " + name + "!";
  }
  
  console.log(greet());        // Outputs: Hello, Guest!
  console.log(greet("Alice")); // Outputs: Hello, Alice!
  \`\`\`
  
  ### Rest Parameters (ES6+)
  
  The rest parameter syntax allows a function to accept an indefinite number of arguments as an array:
  
  \`\`\`javascript
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5));  // Outputs: 15
  \`\`\`
  
  ## Function Scope
  
  Variables defined inside a function cannot be accessed from outside the function:
  
  \`\`\`javascript
  function myFunction() {
    let carName = "Toyota";  // Local variable
    console.log(carName);
  }
  
  myFunction();  // Outputs: Toyota
  // console.log(carName);  // This would cause an error
  \`\`\`
  
  ## Higher-Order Functions
  
  Functions that operate on other functions, either by taking them as arguments or by returning them:
  
  \`\`\`javascript
  // Function that takes another function as an argument
  function doOperation(x, y, operation) {
    return operation(x, y);
  }
  
  // Using the higher-order function
  const result = doOperation(5, 3, (a, b) => a * b);
  console.log(result);  // Outputs: 15
  \`\`\`
  
  ## Immediately Invoked Function Expressions (IIFE)
  
  Functions that are executed right after they are created:
  
  \`\`\`javascript
  (function() {
    console.log("This function is executed immediately!");
  })();
  \`\`\`
  
  ## Practice Exercise
  
  Write a function that takes an array of numbers and returns the sum of all even numbers in the array.
  
  \`\`\`javascript
  function sumEvenNumbers(numbers) {
    // Your code here
  }
  
  // Test your function
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));  // Should output: 12 (2 + 4 + 6)
  \`\`\`
  
  Try implementing this function in your browser's console!
  `,
      prevLessonSlug: "javascript-variables",
    },
  ]



  export function getLessonBySlug(slug: string): Lesson | undefined {
    return lessons.find((lesson) => lesson.slug === slug)
  }

  export function getLessonById(id: number): Lesson {
    return lessons[id - 1]
  }
  
  
  export function getAllLessons(): Lesson[] {
    return lessons
  }
  