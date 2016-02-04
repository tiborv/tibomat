import AppDispatcher from '../dispatcher/AppDispatcher';
import { QuestionConstants } from '../constants/Constants';
import { getQuestions, submitAnswer } from '../utils/Api';

export default class QuestionActions {
  static submitAnswer(answer) {
    AppDispatcher.dispatch({ type: QuestionConstants.SUBMIT_BEGIN });
    submitAnswer(answer).then(result => {
      AppDispatcher
        .dispatch({ type: QuestionConstants.SUBMIT_SUCCESS, data: result.body });
    });
  }

  static retrieveAllQuestions(area) {
    AppDispatcher.dispatch({ type: QuestionConstants.FETCH_ALL_BEGIN });
    getQuestions(area).then(result => {
      AppDispatcher
        .dispatch({ type: QuestionConstants.FETCH_ALL_SUCCESS, data: result.body });
    });
  }
}
