import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";
import Column from "../Column/Column";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired
  };
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageUrl={this.props.image} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column title="Kolumna 1" />
          <Column title="Kolumna 2" />
          <Column title="Kolumna 3" />
        </div>
      </section>
    );
  }
}

export default List;
