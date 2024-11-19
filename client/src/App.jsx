import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDocument, listenForDocumentUpdates } from './actions/documentActions';
import './App.css';
import DocumentEditor from './DocumentEditor';

const App = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.document.content);

  useEffect(() => {
    dispatch(listenForDocumentUpdates());
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(updateDocument(event.target.value));
  };

  return (
    <div className="app">
      <DocumentEditor />
      <h1>Real-Time Collaborative Document</h1>
      
      <textarea value={content} onChange={handleChange} />
    </div>
  );
};

export default App;



