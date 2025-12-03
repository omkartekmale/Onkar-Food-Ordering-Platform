const headline=React.createElement("h1",{},"my name is onkar");
    const root=ReactDOM.createRoot(document.getElementById('root'));

    const parent=React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},"onkar"),React.createElement('h1',{},"tekmlae")]));
    root.render(headline);
    root.render(parent);