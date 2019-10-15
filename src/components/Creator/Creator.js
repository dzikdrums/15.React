import React from "react";
import styles from "./Creator.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.node
  };

  static defaultProps = {
    text: "Add new item"
  };

  state = {
    value: "",
    visibleButtons: false,
    visibleButtonsCancel: false
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0
    });
  }

  handleOK() {
    if (this.state.value != "") {
      this.props.action(this.state.value);
      this.setState({
        value: "",
        visibleButtons: false
      });
    }
  }

  handleCancel() {
    this.setState({
      visibleButtons: false,
      visibleButtonsCancel: true
    });
  }

  handleCancelYes() {
    this.setState({
      value: "",
      visibleButtons: false,
      visibleButtonsCancel: false
    });
  }

  handleCancelNo() {
    this.setState({
      visibleButtons: true,
      visibleButtonsCancel: false
    });
  }

  render() {
    return (
      <div
        className={
          styles.component +
          (this.state.visibleButtonsCancel ? " " + styles.buttonsShown : "")
        }
      >
        <input
          type="text"
          placeholder={this.props.text}
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
        <div
          className={
            styles.buttons +
            (this.state.visibleButtons ? " " + styles.buttonsShown : "")
          }
        >
          <Button onClick={() => this.handleOK()}>OK</Button>
          <Button onClick={() => this.handleCancel()} variant="danger">
            cancel
          </Button>
        </div>
        <div
          className={
            styles.buttons +
            (this.state.visibleButtonsCancel
              ? " " + styles.buttonsShown + " " + styles.flexColumn
              : "")
          }
        >
          <div className={styles.buttons + " " + styles.buttonsShown}>
            <Button onClick={() => this.handleCancelYes()}>Yes</Button>
            <Button onClick={() => this.handleCancelNo()} variant="danger">
              No
            </Button>
          </div>
          <p className={styles.confirmation}>Do You really want to cancel?</p>
        </div>
      </div>
    );
  }
}

export default Creator;
