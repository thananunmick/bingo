import logo from './logo.svg';
import './App.css';
import React from 'react'

function Square(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }

    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
        );
  }
class App extends React.Component{
  handleClick(i) {
  }

  renderSquare(i) {
    return <Square 
              onClick={() => this.handleClick(i)}/>;
  }

  render() {
      return (
        <div className="Whole">
          <div className="board-row">
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
          </div>
          <div className="board-row">
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
          </div>
          <div className="board-row">
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
          </div>
          <div className="board-row">
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
          </div>
          <div className="board-row">
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
            <div style={{borderStyle:"solid"}}>
              <p>HELLO</p>
              <input type="text" name="name" />
            </div>
          </div>

        </div>
      );
    }
  }
export default App;
