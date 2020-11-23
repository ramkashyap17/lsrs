import logo from './logo.svg';
import './App.css';

function App() {
  var arr = [3, 1, 4, 2, 9]
  var diff = []
  var lsArr = []
  var rsArr = []

  for(var i = 0; i < arr.length; i++){
    var input = arr[i]
    var inputIndex = i
    var ls = 0
    var rs = 0

    for(var j = 0; j <= i; j++){
      ls += arr[j]
    }

    for(var j = i+1; j < arr.length; j++){
      rs += arr[j]
    }
    
    lsArr.push(ls)
    rsArr.push(rs)

    diff.push(rs - ls)
  }

  var min = diff[0]
  
  for(var i = 0; i < diff.length; i++){
    if(diff[i] < min){
      min = diff[i]
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {"This is the result: " + min}
        </p>
        <p>
          {"This is LS: " + lsArr.join(',')}
        </p>
        <p>
          {"This is RS: " + rsArr.join(',')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


