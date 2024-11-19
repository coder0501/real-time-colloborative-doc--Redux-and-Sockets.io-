import socket from '../socket';

export const updateDocument = (document) => (dispatch) => {
  dispatch({
    type: 'UPDATE_DOCUMENT',
    payload: document,
  });
  socket.emit('documentUpdate', document);
};

export const listenForDocumentUpdates = () => (dispatch) => {
  socket.on('documentUpdate', (document) => {
    dispatch({
      type: 'UPDATE_DOCUMENT',
      payload: document,
    });
  });
};




