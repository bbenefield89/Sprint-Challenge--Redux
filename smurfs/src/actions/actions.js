import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const EDIT_SMURF = 'EDIT_SMURF';
export const ERROR = 'ERROR';

// getSmurf
export const getSmurfs = () => {
  return dispatch => {
    axios.get('http://localhost:3333/smurfs')
      .then(({ data }) => {
        dispatch({
          type: GET_SMURFS,
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        });
      });
  };
};

// addSmurf
export const addSmurf = smurf => {
  return dispatch => {
    axios.post('http://localhost:3333/smurfs', {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
      .then(({ data }) => {
        dispatch({
          type: ADD_SMURF,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

// editSmurf
export const editSmurf = ({ id, name, age, height }) => {
  return dispatch => {
    axios.put(`http://localhost:3333/smurfs/${ id }`, {
      name,
      age,
      height,
    })
      .then(({ data }) => {
        dispatch({
          type: EDIT_SMURF,
          payload: data,
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      });
  };
};