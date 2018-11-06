import React, { Component } from 'react';

import './Form.css';

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
       fullname:"",
       email:"",
       path:"",
       currentmodule:"",
       relocate:"",
       message:"",
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

  handleSubmit(event){
      event.preventDefault();
      console.log(this.state);
  }

  render() {
      return (
          <div className="Form">
          <header>
              <div className="header">
               <nav className="navbar">
                 <div className="navbar-brand">
                  <span className="navbar-item">Career Services Form</span>
                 </div>
               </nav>
              </div>
          </header>

          <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Full Name</label>
                  <div className="control">   
                    <input
                      className="input"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                 <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="emailaddress"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>


               <div className="field">
                  <label className="label">Current Module</label>
                   <div className="control">
                    <input
                     className="input"
                     type="text"
                     name="currentmodule"
                     value={this.state.currentmodule}
                     onChange={this.handleChange}
                  />
                </div>
              </div>


            <div className="field">
                  <label className="label">Which path are you enrolled in?</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.path}
                        name="path"
                        onChange={this.handleChange}
                      >
                        <option value="javascript">JavaScript</option>
                        <option value="java">Java</option>
                        <option value="c#">C#</option>
                        <option value="cybersecurity">Cyber Security</option>
                      </select>
                    </div>
                  </div>
                </div>



             <div className="field">
                  <div className="control">
                    <label className="label">
                      Are you willing to relocate?
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="relocate"
                        onChange={this.handleChange}
                        value="Yes"
                        checked={this.state.relocate === "Yes"}
                      />
                      Yes
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="relocate"
                        onChange={this.handleChange}
                        value="No"
                        checked={this.state.relocate === "No"}
                      />
                      No
                    </label>
                  </div>
                </div>

              <div className="field">
                <div className="control">
                  <input
                    type="submit"
                    value="Submit"
                    className="button is-primary"
                  />
                </div>
              </div>
            </form>
            </div>

            <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

            <div className="column is-3">
              <pre>
                <code>
                  <p>Full Name: {this.state.fullname}</p>
                  <p>Email : {this.state.email}</p>
                  <p>Path: {this.state.path}</p>
                  <p>Current Module: {this.state.message}</p>
                  <p>Willing To Relocate: {this.state.relocate}</p> 
                </code>
              </pre>
            </div>
            </div>
            </div>
            </div>
      );
  }
  }

export default Form;

