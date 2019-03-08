import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './contacts';
let contacts=[];
const initialstate={
  name:'',
  phone:'',
  save:'',
  filteredcontact:contacts

}

class App extends Component {
constructor(){
  super();
  this.state=initialstate;
}

 onPhoneChange=(event)=>{
    this.setState({phone:event.target.value})
    //console.log(event.target.value);
  }
  onSubmitData=()=>{
  this.setState({save:1});
  contacts.push({name:this.state.name,phone:this.state.phone})
 this.setState({filteredcontact:contacts});
 //console.log(this.state);
 //console.log(contacts);
}
  onNameChange=(event)=>{
    this.setState({name:event.target.value})
    //console.log(event.target.value);
  }
  onDelete=(index)=>{
    console.log("hello");
    contacts.splice(index,1);
    this.setState({filteredcontact:contacts});

  }
  render() {
    return (
      <div className="him">
      <input type="button" className="input" value="Add contact" onClick={()=>{ this.setState({save:0})}} />
      {
        (this.state.save==1)?
      <Display contact={this.state.filteredcontact} ondelete={this.onDelete}/>:
      <div>
      <p>Name:</p>
      <input id="02" Style={ {color:'green'}} onChange={this.onNameChange}/>
      <p>phone:</p>
      <input id="03"  type="value" onChange={this.onPhoneChange}/>
      <p>{`Name:${this.state.name}`}</p>
      <p>{`Phone:${this.state.phone}`}</p> 
      <input className="input" type="submit" value="Save" onClick={this.onSubmitData} />
      </div>
     }
     </div>
    ); 
}
}
export default App;
