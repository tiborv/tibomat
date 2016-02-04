import React, { PropTypes, Component } from 'react';
import '../styles/Result';

const round = num => Math.round(num * 100) / 100;

export default class Result extends Component {
  static propTypes = {
    getScores: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const scores = this.props.getScores();
    this.state = {
      scores,
      sum: scores.reduce((total, current) => total + current.score, 0)
    };
  }

  render() {
    const [first, second, third, ...rest] = this.state.scores;
    return (
      <div className='Result'>
        <h5 className='text-center'>Resultat</h5>
        <h3 className='subheader text-center'>
        {first.name} {round(100 * first.score / this.state.sum)}%
        </h3>
        <h4 className='subheader text-center'>
        {second.name} {round(100 * second.score / this.state.sum)}%
        </h4>
        <h5 className='subheader text-center'>
        {third.name} {round(100 * third.score / this.state.sum)}%
        </h5>
        {rest.map((s, i) => (
          <p className='subheader text-center' key={i}>
          {s.name} {round(100 * s.score / this.state.sum)}%
          </p>
        ))}
      </div>
    );
  }
}
