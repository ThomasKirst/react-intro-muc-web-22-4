import './App.css';

import Box from './Box';

function Headline() {
  return <h1>This is my headline</h1>;
}

function Subline() {
  return <h2>And a subline</h2>;
}

function App() {
  return (
    <main>
      <Headline />
      <Subline />
      <Box />
      <Box />
      <Box />
    </main>
  );
}

export default App;
