import React from 'react';
import {render} from 'react-dom';
import './index.less';

class App extends React.Component {
    render () { 
        return (<div>Start</div>); 
    };
} 

render(<App/>, document.querySelector('body'));  
