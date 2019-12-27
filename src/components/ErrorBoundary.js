import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState(() => {
      return { hasError: true };
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error Happaned , Sorry for inconvension</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
