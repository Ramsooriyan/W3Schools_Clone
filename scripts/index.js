const htmlCodeElement = `<!DOCTYPE html>
        <html>
        <head>
        <title>Tutorial</title>
        </head>
        <body>

        <h1>Html Tutorial</h1>
        <p>This is paragraph</p>

        </body>
        </html>
`;
let htmlCode = document.getElementById("htmlCode").innerText = htmlCodeElement;

const cssCodeEle = `body {
   background-color: lightblue;
}
      
h1 {
   color: white;
   text-align: center;
}
      
p {
   font-family: verdana;
}`;
let cssCode = document.getElementById("cssCode").innerText = cssCodeEle;

const jsCodeEle = `
<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>`;
let jsCode = document.getElementById("jsCode").innerText = jsCodeEle;

const pyCodeEle = `
if 5 > 2:
  print("Five is greater than two!")`;
let pyCode = document.getElementById("pyCode").innerText = pyCodeEle;

const sqlCodeEle = `
if 5 > 2:
  print("Five is greater than two!")`;
let sqlCode = document.getElementById("sqlCode").innerText = sqlCodeEle;