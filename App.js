import React from "react";
import ReactDOM from "react-dom/client"

// React element is an object when we render this to DOM then it is HTML element.

// const heading= React.createElement("h1", {id:"heading"}, "Namaste React 🚀");

// const jsxHeading = <h1 id="heading">Namaste React using JSX!🚀🚀🚀</h1>

//const jsxHeadingReactElement = (<h1 id="heading">Namaste React using JSX!🚀🚀🚀</h1>);

//<----------Writing heading code with react component---------->
const TitleComponent =  ()=>(
    <h1 className="title">
        React functional component 🚀🚀🚀
    </h1>
);

const HeaderComponent = ()=> (
    <div className= "container">
        <TitleComponent />
        <h1 className="heading"> Namaste React 🚀🚀🚀</h1>
    </div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
