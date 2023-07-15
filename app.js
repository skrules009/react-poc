
const parent = React.createElement('h1', {}, 'Hellow React');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


const parent1 = React.createElement('div', {id: "parent1"}, [React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {}, "hellow child h1")])]);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent1);