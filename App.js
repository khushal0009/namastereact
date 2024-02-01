/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/

const parent=React.createElement("div" , {id:"parent"},[
React.createElement("div" , {id:"child"},[
    React.createElement("h1" , {},"I am  h1 Tag"),
    React.createElement("h2" , {},"I am  h2 Tag")
]),
React.createElement("div",{id:"child2"},[ 
    React.createElement("h1" , {},"I am  h1 Tag"),
    React.createElement("h2" , {},"I am  h2 Tag")   ])
]);

const heading= React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello world from React");

// console.log(heading); //object 

console.log(parent); 

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //converting object to h1 tag

root.render(parent); 