import React from "react";
import ReactDOM from "react-dom/client";

//React.createelement => object => HTMLElement(Render);
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Episode03 🚀"
// );
// console.log(heading);
//JSX = JavaScript syntax which is easier to create react elements - parcel - babel.

//JSX = converted to React.createElement => React element- JS object => Htmlelement(render).
const jsxHeading = (
    <h1 id="jsx-header" className="head">
        React from JSX 🚀
    </h1>
);
console.log(jsxHeading);

// React functional component

const TitleComp = () => {
    return <h1>Title from functional component</h1>
};
console.log(TitleComp);
const num = 10;
 /* component composition */
const HeadingComp2 = () => (
    <div id="container">
        <div>
        {
            // we can run any JavaScript code or any jsx elements here inside {}.
            jsxHeading
        }
        {num}
        </div>
        {<TitleComp/>}
        {<TitleComp></TitleComp>}
        {TitleComp()}
        <h2>Heading from functional component🚀</h2>
    </div>
);

const HeadingComp3 = function(){
    return (<div id="container">
            <TitleComp/> 
            <HeadingComp2/> 
            <h2>Heading from functional component🚀</h2>
        </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComp2 />);