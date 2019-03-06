import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementcounter, decrementcounter } from "./testActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementcounter,
  decrementcounter
};

class TestComponent extends Component {
  state = {};

  render() {
    const { incrementcounter, decrementcounter, data } = this.props;
    return (
      <div>
        <h1> Test Area</h1>
        <h3>The answer is: {this.props.data}</h3>
        <Button onClick={incrementcounter} color="green" content="Increment" />
        <Button onClick={decrementcounter} color="red" content="Decrement" />
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
