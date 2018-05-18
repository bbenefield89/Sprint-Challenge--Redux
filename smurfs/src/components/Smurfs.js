import React, { Component } from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

import { getSmurfs } from '../actions/actions';

class Smurfs extends Component {  
  componentDidMount() {
    this.props.getSmurfs();
  }
  
  render() {
    if (this.props.smurfData.fetchingSmurf) {
      return (
        <h1>Loading smurf data</h1>
      )
    }
    else {
      return (
        <div>
          {
            this.props.smurfData.smurfs.map(({ id, name, age, height }) => {
              return (
                <Smurf key={ id } id={ id } name={ name } age={ age } height={ height } />
              )
            })
          }
        </div>
      )
    }
  }
};

const mapStateToProps = state => {
  return {
    smurfData: state
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);