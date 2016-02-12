import agent from 'superagent-bluebird-promise';

const ANSWER_API = '/api/answer';
const QUESTION_API = '/api/question';
const PARTY_API = '/api/party';

export function getParties() {
  return agent.get(PARTY_API).promise();
}

export function getQuestions(area) {
  return agent.get(QUESTION_API)
    .query({ area })
    .promise();
}

export function getAnswers(question) {
  return agent.get(ANSWER_API)
    .query({ question })
    .promise();
}
