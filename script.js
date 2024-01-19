// Using Javascript

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from Javascript.";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Using React

// const header = React.createElement("h1",{},"Hello world from react.");

// const div1 = React.createElement("div",{id:"parent"},React.createElement("h1",{},"Parent Heading 1."))

// const div1 = React.createElement("div",
//     {id:"parent"},[
//         React.createElement("h1",{},"Parent Heading 1."),
//         React.createElement("h2",{},"Parent Heading 2.")
//     ]);

const div1 = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",
        {id:"children"},
        [
            React.createElement("h1",{},"Parent Heading 1."),
            React.createElement("h2",{},"Parent Heading 2.")
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);