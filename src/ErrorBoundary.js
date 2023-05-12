import React from "react";
import {withRouter} from "react-router-dom";

class ErrorBoundary extends React.Component {

  state = { error: null };
  // componentWillMount() {
  //   window.addEventListener("error", (event) => {
  //     this.props.history.push('/errorSomething');
  //     window.location.reload();
  //     // this.setState({
  //     //   error: true
  //     // })
  //   })
  //   window.addEventListener("unhandledrejection", (event) => {
  //     this.props.history.push('/errorSomething');
  //     window.location.reload();
  //     // this.setState({
  //     //   error: true
  //     // })
  //   })
  // }


  // static getDerivedStateFromError(error) {
  //   this.props.history.push('/errorSomething');
  //   window.location.reload();
  //   // this.setState({
  //   //   error: true
  //   // })
  // }

  // componentDidCatch(error, errorInfo) {
  //   // Log error to an error reporting service like Sentry
  //   // console.log({ error, errorInfo });
  //   // this.setState({
  //   //     error: true
  //   // })
  //   this.props.history.push('/errorSomething');
  //   window.location.reload();
  // }

  render() {
    const { error } = this.state;
    if (error) {
      return <h1>dfasdfasd</h1>
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);