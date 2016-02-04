import React, { Component } from 'react';
import Question from '../components/Question';
import AreaQuestion from '../components/AreaQuestion';
import Result from '../components/Result';
import QuestionStore from '../stores/QuestionStore';
import PartyStore from '../stores/PartyStore';


export default class MainSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: QuestionStore.getCurrentQuestion(),
      currentSection: 0
    };
  }

  componentDidMount() {
    QuestionStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    QuestionStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    if (this.state.currentSection === 1 && QuestionStore.lastQuestion()) {
      return this._nextSection();
    }
    this.setState({ activeQuestion: QuestionStore.getCurrentQuestion() });
  };


  _nextSection = () => {
    this.setState({ currentSection: this.state.currentSection + 1 });
  };

  _getSection = () => {
    switch (this.state.currentSection) {
      case 0: return (<AreaQuestion nextSection={this._nextSection}/>);
      case 1: return (<Question question={this.state.activeQuestion} />);
      default: return (<Result getScores={PartyStore.getScores}/>);
    }
  };

  render() {
    return (
      <div className='large-10 columns large-centered'>
      {this._getSection()}
      </div>
    );
  }
}
