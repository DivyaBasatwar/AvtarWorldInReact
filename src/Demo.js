import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//class based Component
/*class Demo extends Component{
  render(){
    return <div className="mainDiv">
    <h1>Hello {this.props.name}</h1>
    <p>I am learning React..What about you</p>
    <p>I know you are also learning Angular...</p>
    </div>
  }
}*/

//functional Component
const Demo = (props) => {
  return <div className="mainDiv">
  <h1>Hello {props.name}</h1>
  <p>I am learning React..What about you</p>
  <p>I know you are also learning Angular...</p>
  </div>
}

//passing props can done like this also
/*
const Demo = ({name}) => {
  return <div className="mainDiv">
  <h1>Hello {name}</h1>
  <p>I am learning React..What about you</p>
  <p>I know you are also learning Angular...</p>
  </div>
}

*/

export default Demo;


/*Props are immutable
In class based Component we use this.props.name
In function based Component we use props.name
*/
