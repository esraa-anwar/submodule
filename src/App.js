import React from 'react';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
    alert('hello bbbb!');
  };

  return (
    <div>
      <h1>Button Sub-module</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}

export default App;