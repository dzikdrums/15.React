import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import { pageContents, listData } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class App extends React.Component {
  addList() {
    this.setState({
      text: { columns: [] },
    });
    console.log(this.state.text);
  }

  state = {
    text: { ...listData },
  };

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...this.state.text} />
        <Creator
          text={settings.listCreatorText}
          action={() => this.addList()}
        />
      </main>
    );
  }
}

export default App;
