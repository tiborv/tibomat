import AppDispatcher from '../dispatcher/AppDispatcher';
import { PartyConstants } from '../constants/Constants';
import { getParties } from '../utils/Api';

export default class ParyActions {
  static retrieveAllParties() {
    AppDispatcher.dispatch({ type: PartyConstants.FETCH_ALL_BEGIN });
    getParties().then(result => {
      AppDispatcher
        .dispatch({ type: PartyConstants.FETCH_ALL_SUCCESS, data: result.body });
    });
  }
}
