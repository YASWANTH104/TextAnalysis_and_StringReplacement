import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TextAnalysisApp = () => {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    setUniqueWordCount(uniqueWords.size);

    const chars = text.replace(/[^a-zA-Z0-9]/g, '');
    setCharCount(chars.length);
  }, [text]);

  const handleReplace = () => {
    const newText = text.split(searchString).join(replaceString);
    setText(newText);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="10"
          cols="50"
          placeholder="Enter your text here..."
        />
      </div>
      <div className="mb-3">
        <p className="text-primary">Unique Words: {uniqueWordCount}</p>
        <p className="text-success">Character Count (excluding spaces and punctuation): {charCount}</p>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search String"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Replace String"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
};

export default TextAnalysisApp;
