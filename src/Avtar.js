import React, {Component} from 'react';
import './Avtar.css';
import 'tachyons';
import Avtarlist from './Avtarlist';


class Avtar extends Component{

  constructor(){
    super();
    this.state = {
      name : "Wel-Come To Avtar World"
    }
  }

  namechange(){
      this.setState({
        name : "___Avtar World is Wel-Coming You___"
      })
  }

  render(){
    const avtarlistarray = [
      {
        id: 1,
        name: "James Barker",
        work: "Web Developer"
      },
      {
        id: 2,
        name: "Robert Wilson",
        work: "Android Developer"
      },
      {
        id: 3,
        name: "Wood Thomas",
        work: "Database Analyst"
      },
      {
        id: 4,
        name: "John Walker",
        work: "Quality Analyst"
      }
    ]

    const arrayavtarcard =  avtarlistarray.map((avtarcard, i) => {
      return     <Avtarlist id={avtarlistarray[i].id} name={avtarlistarray[i].name} work={avtarlistarray[i].work}/>
    })
    return (
      <div className="mainpage">
      <h1><u>{this.state.name}</u></h1>
      {arrayavtarcard}
      <br/>
      <button onClick = { () => this.namechange()}>Refresh</button>
      </div>
    )
  }
}


export default Avtar;



/*
state is managed within the components
state can be changed
useState Hook - functional components
this.state - class component
*/
