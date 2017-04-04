import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ButtonProps {
    label: string
}

const App = (props: ButtonProps) =>  <button>{props.label}</button>

export default App;