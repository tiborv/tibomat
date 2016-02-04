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

export function submitAnswer(answer) {
  return agent.post(ANSWER_API)
    .send(answer)
    .promise();
}
