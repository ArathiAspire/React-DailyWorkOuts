import React from "react";

class MyComponent extends React.Component {
  render() {
    const { render } = this.props;
    return <div>{render("Rendered Content")}</div>;
  }
}

export default MyComponent
