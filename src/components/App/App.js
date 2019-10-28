import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../FAQ/Faq';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResults';
import styles from './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import { AnimatedSwitch } from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/list/:id" component={List} />
        <Route path="/search/" component={SearchResults} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
