import { connect } from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeCards,
} from '../../redux/searchStringRedux';

const mapStateToProps = state => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchString: newSearchString =>
    dispatch(createAction_changeCards(newSearchString)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
