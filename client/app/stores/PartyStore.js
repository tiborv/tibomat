import AppDispatcher from '../dispatcher/AppDispatcher';
import { QuestionConstants, PartyConstants } from '../constants/Constants';
import EventEmitter from 'events';


const CHANGE_EVENT = 'change';
let allParties = [];

class PartyStore extends EventEmitter {

  constructor() {
    super();
    this.dispatchToken = AppDispatcher.register(this.dispatcherCallback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getScores() {
    return Object.keys(allParties)
      .map(p => allParties[p])
      .sort((a, b) => b.score - a.score);
  }

  updatePartyStats(data) {
    console.log(allParties);
    data.answers.map(a => {
      allParties[a.party].score += (4 - Math.abs(a.value - data.value)) * data.weight;
    });
  }

  dispatcherCallback = action => {
    switch (action.type) {
      case (PartyConstants.FETCH_ALL_SUCCESS):
        allParties = action.data.reduce((p, c) => {
          p[c.ID] = { score: 0, name: c.name };
          return p;
        }, {});
        this.emitChange();
        break;
      case (QuestionConstants.ANSWER_SUCCESS):
        this.updatePartyStats(action.data);
        this.emitChange();
        break;
      default:
    }
  };

}

export default new PartyStore();
