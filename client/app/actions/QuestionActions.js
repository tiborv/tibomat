import AppDispatcher from '../dispatcher/AppDispatcher';
import { QuestionConstants } from '../constants/Constants';
import { getQuestions, getAnswers } from '../utils/Api';

export default class QuestionActions {
  static answer(answer) {
    AppDispatcher.dispatch({ type: QuestionConstants.ANSWER_BEGIN });
    getAnswers(answer.question).then(result => {
      AppDispatcher
        .dispatch({ type: QuestionConstants.ANSWER_SUCCESS,
          data: {
            answers: result.body,
            value: answer.value,
            weight: answer.weight
          }
        });
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
