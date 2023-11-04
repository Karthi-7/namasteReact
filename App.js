     // const heading=document.createElement("h1");
        // heading.innerHTML="Namaste Javascript";
        // const root=document.getElementById("root");
        // root.appendChild(heading)
        const heading= React.createElement("div",{id:"parent"},
        React.createElement("p",{},[
            React.createElement("p",{},"i am karthi"),
            React.createElement("p",{},"i am superman")
        ]));
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading)