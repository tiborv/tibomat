import AppDispatcher from '../dispatcher/AppDispatcher';
import { QuestionConstants } from '../constants/Constants';
import EventEmitter from 'events';


const CHANGE_EVENT = 'change';
let currentQuestion = 0;
let allQuestions = [];


class QuestionStore extends EventEmitter {

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

  getCurrentQuestion() {
    return allQuestions[currentQuestion];
  }

  lastQuestion() {
    return allQuestions.length === currentQuestion
  }

  dispatcherCallback = action => {
    switch (action.type) {
      case (QuestionConstants.SUBMIT_SUCCESS):
        currentQuestion++;
        this.emitChange();
        break;
      case (QuestionConstants.FETCH_ALL_SUCCESS):
        allQuestions = action.data;
        this.emitChange();
        break;
      default:
    }
  };

}


export default new QuestionStore;
