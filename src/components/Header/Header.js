import React from 'react';
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Search from '../Search/Search';

class Header extends React.Component {
  static propTypes = {
    headerIcon: PropTypes.node,
    homeTitle: PropTypes.node,
    infoTitle: PropTypes.node,
    faqTitle: PropTypes.node,
  };
  static defaultProps = {
    headerIcon: settings.headerIcon,
    homeTitle: settings.subpageTitle.home,
    infoTitle: settings.subpageTitle.info,
    faqTitle: settings.subpageTitle.faq,
  };

  render() {
    const { headerIcon, homeTitle, infoTitle, faqTitle } = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <BrowserRouter>
              <Link to="/" className={styles.logo}>
                <Icon name={headerIcon} />
              </Link>
              <Search />

              <nav>
                <NavLink exact to="/" activeClassName="active">
                  {homeTitle}
                </NavLink>
                <NavLink exact to="/faq" activeClassName="active">
                  {faqTitle}
                </NavLink>
                <NavLink exact to="/info" activeClassName="active">
                  {infoTitle}
                </NavLink>
              </nav>
            </BrowserRouter>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
