import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isValidEmail: true,
      isSubmitted: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Simple email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!this.state.email.match(emailPattern)) {
      this.setState({ isValidEmail: false });
      return;
    }

    // Form submission is successful
    this.setState({ isValidEmail: true, isSubmitted: true });
  };

  render() {
    return (
      <div className="form">
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-items">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-items">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {!this.state.isValidEmail && (
              <p className="error">Please enter a valid email.</p>
            )}
          </div>
          <div className="form-items">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-items">
            <button type="submit">Submit</button>
          </div>
        </form>
        {this.state.isSubmitted && (
          <div className="success-message">
            Thank you for your message! We'll be in touch.
          </div>
        )}
      </div>
    );
  }
}

export default Form;
