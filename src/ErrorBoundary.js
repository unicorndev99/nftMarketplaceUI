import React from "react";
import {withRouter} from "react-router-dom";

class ErrorBoundary extends React.Component {

  state = { error: null };
  componentWillMount() {
    window.addEventListener("error", (event) => {
      this.props.history.push('/errorSomething');
      window.location.reload();
    })
    window.addEventListener("unhandledrejection", (event) => {
      this.props.history.push('/errorSomething');
      window.location.reload();
    })
  }


  static getDerivedStateFromError(error) {
    this.props.history.push('/errorSomething');
    window.location.reload();
  }

  componentDidCatch(error, errorInfo) {
    this.props.history.push('/errorSomething');
    window.location.reload();
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <></>
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);