import React, { PropTypes, Component } from 'react';
import QuestionActions from '../actions/QuestionActions';


export default class AreaQuestion extends Component {
  static propTypes = {
    nextSection: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  _onSubmit = e => {
    if (!this.state) return;
    QuestionActions.retrieveAllQuestions(this.state.area || '');
    this.props.nextSection();
  };

  _onChange = e => this.setState({ area: e.target.value });

  render() {
    return (
      <div className='large-12 columns large-centered'>
        <h5 className='subheader text-center'>Bosted:</h5>
        <div className='radio'>
          <input id='radio1' type='radio' name='area' value='trondheim' onChange={this._onChange} />
          <label htmlFor='radio1'>Trondheim</label>
          <input id='radio2' type='radio' name='area' value='oslo' onChange={this._onChange} />
          <label htmlFor='radio2'>Oslo</label>
          <input id='radio3' type='radio' name='area' value='bergen' onChange={this._onChange} />
          <label htmlFor='radio3'>Bergen</label>
          <input id='radio4' type='radio' name='area' onChange={this._onChange} />
          <label htmlFor='radio4'>Vet ikke</label>
        </div>
        <input
          type='button'
          className='button primary'
          defaultValue='Velg'
          onClick={this._onSubmit}
        />
      </div>
    );
  }
}
