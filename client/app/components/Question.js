import React, { PropTypes, Component } from 'react';
import QuestionActions from '../actions/QuestionActions';
import '../styles/Question';

let checkedButton;

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      value: -1
    };
  }

  _selectAnswer = e => {
    checkedButton = e.target;
    this.setState({ value: e.target.getAttribute('data-value') });
  };

  _submitAnswer = e => {
    if (this.state.value === -1) return;
    checkedButton.checked = false;
    QuestionActions.submitAnswer({
      question: this.props.question.ID,
      value: this.state.value,
      weight: e.target.getAttribute('data-weight')
    });
    this.setState({ value: -1 });
  };

  render() {
    const { question } = this.props;
    if (!question) return (<div></div>);
    return (
      <div className='Question'>
        <h4 className='text-center subheader'>{question.title}</h4>
        <h6 className='text-center subheader'>{question.body}</h6>

        <ul className='small-block-grid-5 text-center'>
        {['Helt uenig', 'Litt uenig', 'Meh', 'Litt enig', 'Helt enig'].map((str, i) => (
          <li key={i}>
            <input type='radio'
              onChange={this._selectAnswer}
              data-value={i + 1}
              name='alternative'
              id={`alternative${i}`}
            />
            <label htmlFor={`alternative${i}`}></label>
            <p>{str}</p>
          </li>
        ))}
        </ul>

        <div className='row large-centered'>
        <input onClick={this._submitAnswer}
          data-weight='0.75'
          type='button'
          className='large-4 columns button primary'
          defaultValue='Ikke viktig'
        />
        <input onClick={this._submitAnswer}
          data-weight='1.0'
          type='button'
          className='large-4 columns button primary'
          defaultValue='Viktig'
        />
        <input onClick={this._submitAnswer}
          data-weight='1.25'
          type='button'
          className='large-4 columns button primary'
          defaultValue='Veldig viktig'
        />
        </div>
      </div>
    );
  }
}
