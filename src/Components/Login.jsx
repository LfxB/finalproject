import React, { Component } from "react";
import { connect } from "react-redux";

import "../css/login.css"

class Login extends Component {

   constructor(props) {
      super(props)
      this.state = {
         username: "",
         password: "",
      }
   }

   handleUsername = event => {
      this.setState({
         username: event.target.value
      })
   }

   handlePassword = event => {
      this.setState({
         password: event.target.value
      })
   }

   handleSubmit = event => {
      event.preventDefault()
      let data = new FormData()
      data.append("username", this.state.username)
      data.append("password", this.state.password)

      fetch("/login", {
         method: "POST",
         body: data
      })
         .then(resHeader => {
            return resHeader.text()
         })
         .then(resBody => {
            let body = JSON.parse(resBody)

            if (!body.success) {
               console.log("Error signing in!")
               return;
            }

            this.props.dispatch({
               type: "logged-in",
               toggle: true,
               username: body.username
            })

         })
   }

   render = () => {

      return (
         <div>
            <form className="login-form" onSubmit={this.handleSubmit}>
               <div>
                  <div className="login-label">Username</div>
                  <input className="coolInput" type="text" onChange={this.handleUsername} />
                  <span></span>
               </div>
               <div>
                  <div className="login-label">Password</div>
                  <input className="coolInput" type="text" onChange={this.handlePassword} />
                  <span></span>
               </div>
               <div><input className="ghost-button" type="submit" value="Login!" /></div>
            </form>
         </div>
      )
   }

}

export default Login