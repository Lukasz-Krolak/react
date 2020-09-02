import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import List from '../List/List.js';

class Column extends React.Component {
  static propTypes = {
    titleColumn: PropTypes.string.isRequired,
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}></h3>
      </section>
    )
  }
}

export default Column;