import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import store from '../store'
import { connect } from 'react-redux'

class Register extends Component {

  fieldUserId = (userId) => {
    this.setState({id : userId.target.value})

  }  
  
  newUser = (theID) => {
    store.dispatch({
      type: 'NEW_USER',
      payload: {id:theID}
    })
  }

  clicking = () => {
    this.newUser(this.state.id)
  }
  email = () => {}
  password = () => {}
  render (){
    return (
      < >
<form>
      <label>
        UserID :
        <input type="text" name="name"  onChange={this.fieldUserId}  />
      </label>
           <label>
           Email :
           <input type="text" name="name"  onChange={this.email}  />
         </label>
      <label>
        Password  :
        <input type="text" name="name" onChange={this.password} />
      </label>
           <label>
           Repeat password  :
           <input type="text" name="name" onChange={this.password} />
         </label>

      </form>

      <NavLink to='/home' className="white-text" >
      <button className="waves-effect waves-light btn-large"  onClick={this.clicking} >Sign Up</button>
      </NavLink>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    travelers: state[0]
  }
}

export default connect(mapStateToProps)(Register);