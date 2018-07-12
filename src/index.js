var greeting = React.createElement('h1', {}, 'Hello, World! today');
var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
var thirdHeader = React.createElement('h3',{},`interpolate a date ${new Date().getHours()}`)
var app = React.createElement('div', {}, greeting, clock, thirdHeader);

ReactDOM.render(
  app,
  document.getElementById('react-app-root'),

);
