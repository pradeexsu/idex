import { Fragment } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';

function App() {
  const options = {
    lineNumbers: true,
    lineWrapping: true,
    autofocus: false,
    spellcheck: true,
    fullScreen: false,
    theme: "dracula",
    mode: "javascript",
    value: "function myScript(){\n\treturn 100;\n}\n"
  };
  return (
    <Fragment>
      <CodeEditor options={options} />
    </Fragment>
  );
}

export default App;