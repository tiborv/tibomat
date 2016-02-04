import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import PartyActions from '../actions/PartyActions';
import '../styles/MainSection';

export default class Tibomat extends Component {

  constructor(props) {
    super(props);
    PartyActions.retrieveAllParties();
  }

  render() {
    return (
      <div className='row'>
      <div className='MainSection large-8 columns large-centered'>
        <h3 className='section-title center primary'><span>Tibomat</span></h3>
        <MainSection />
        </div>

      </div>
    );
  }
}
