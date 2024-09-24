import React from 'react';
import TextAnalysisApp from './components/TextAnalysisApp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <div className="text-center mb-4">
        <h1 className="text-primary">Real-Time Text Analysis and String Replacement</h1>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <TextAnalysisApp />
        </div>
      </div>
    </div>
  );
}

export default App;
