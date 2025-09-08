1. var

Scope: Function-scoped (available inside the whole function).

Not block-scoped → if you declare inside { }, it’s still accessible outside.

Can be re-declared and updated.

Hoisted (moved to the top during execution) but initialized as undefined.

✅ Example:

function testVar() {
  if (true) {
    var x = 10;
    console.log("Inside block:", x); // 10
  }
  console.log("Outside block:", x); // 10 (still accessible!)
}
testVar();

🔹 2. let

Scope: Block-scoped (only available inside { }).

Can be updated but not re-declared in the same scope.

Hoisted but not initialized (Temporal Dead Zone error if used before declaration).

✅ Example:

function testLet() {
  if (true) {
    let y = 20;
    console.log("Inside block:", y); // 20
  }
  // console.log("Outside block:", y); ❌ Error (not accessible outside block)
}
testLet();

🔹 3. const

Scope: Block-scoped (like let).

Cannot be updated or re-declared (value is constant).

Must be initialized at the time of declaration.

For objects/arrays → we can change properties/elements, but not reassign the variable itself.

✅ Example:

const z = 30;
console.log(z); // 30

// z = 40; ❌ Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed (modifying content)
console.log(arr); // [1, 2, 3, 4]

// arr = [5,6]; ❌ Error (can't reassign)

🔑 Summary Table
Feature	var	let	const
Scope	Function-scoped	Block-scoped	Block-scoped
Re-declaration	✅ Allowed	❌ Not allowed	❌ Not allowed
Update value	✅ Allowed	✅ Allowed	❌ Not allowed
Hoisting	✅ (initialized undefined)	✅ (but TDZ error)	✅ (but TDZ error)
Use case	Legacy code, avoid if possible	Variables that change	Fixed values (constants, configs)

👉 Best Practice:

Use const by default.

Use let only if the value needs to change.

Avoid var (can cause bugs due to function scoping).
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>var vs let vs const in JavaScript</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
      white-space: pre-wrap;
    }
    .output {
      background: #eef;
      border: 1px solid #99c;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>JavaScript: var, let, and const</h1>

  <h2>1. var (Function Scoped)</h2>
  <pre><code>function testVar() {
  if (true) {
    var x = 10;
    console.log("Inside block:", x); 
  }
  console.log("Outside block:", x); 
}
testVar();</code></pre>
  <div class="output" id="outVar"></div>

  <h2>2. let (Block Scoped)</h2>
  <pre><code>function testLet() {
  if (true) {
    let y = 20;
    console.log("Inside block:", y); 
  }
  // console.log("Outside block:", y); ❌ Error
}
testLet();</code></pre>
  <div class="output" id="outLet"></div>

  <h2>3. const (Block Scoped, Cannot Reassign)</h2>
  <pre><code>const z = 30;
console.log(z);

// z = 40; ❌ Error

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr);

// arr = [5,6]; ❌ Error</code></pre>
  <div class="output" id="outConst"></div>

  <h2>Summary Table</h2>
  <table border="1" cellpadding="8" cellspacing="0">
    <tr>
      <th>Feature</th>
      <th>var</th>
      <th>let</th>
      <th>const</th>
    </tr>
    <tr>
      <td>Scope</td>
      <td>Function-scoped</td>
      <td>Block-scoped</td>
      <td>Block-scoped</td>
    </tr>
    <tr>
      <td>Re-declaration</td>
      <td>✅ Allowed</td>
      <td>❌ Not allowed</td>
      <td>❌ Not allowed</td>
    </tr>
    <tr>
      <td>Update value</td>
      <td>✅ Allowed</td>
      <td>✅ Allowed</td>
      <td>❌ Not allowed</td>
    </tr>
    <tr>
      <td>Hoisting</td>
      <td>✅ Initialized as undefined</td>
      <td>✅ But TDZ error</td>
      <td>✅ But TDZ error</td>
    </tr>
  </table>

  <script>
    // var demo
    function testVar() {
      let log = "";
      if (true) {
        var x = 10;
        log += "Inside block: " + x + "<br>";
      }
      log += "Outside block: " + x;
      document.getElementById("outVar").innerHTML = log;
    }
    testVar();

    // let demo
    function testLet() {
      let log = "";
      if (true) {
        let y = 20;
        log += "Inside block: " + y + "<br>";
      }
      try {
        log += "Outside block: " + y;
      } catch (err) {
        log += "Outside block: Error → " + err.message;
      }
      document.getElementById("outLet").innerHTML = log;
    }
    testLet();

    // const demo
    function testConst() {
      let log = "";
      const z = 30;
      log += "z = " + z + "<br>";
      const arr = [1, 2, 3];
      arr.push(4);
      log += "Array after push: " + arr + "<br>";
      try {
        // Uncommenting below line will throw error
        // arr = [5, 6];
      } catch (err) {
        log += "Reassign error: " + err.message;
      }
      document.getElementById("outConst").innerHTML = log;
    }
    testConst();
  </script>
</body>
</html>
