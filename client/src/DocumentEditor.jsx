import React, { useEffect, useState } from 'react';
import socket from './socket'; // Import the configured socket from your socket setup

const DocumentEditor = () => {
  const [documentData, setDocumentData] = useState('');

  useEffect(() => {
    // Listen for 'documentUpdate' events from the server
    socket.on('connect', () => {
        console.log('Connected to server');
      });
    
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    
    socket.on('documentUpdate', (data) => {
        console.log(1);
      console.log('Document updated:', data);
      setDocumentData(data); // Update the state with the received data
    });

    // Clean up the effect by removing the event listener on unmount
    return () => {
      socket.off('documentUpdate');
    };
  }, []);

  return (
    <div>
      <h2>Document Editor</h2>
      {/* <p></p> */}
      <textarea value={documentData} readOnly style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default DocumentEditor;
