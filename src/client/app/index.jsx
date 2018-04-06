import React from 'react';
import {render} from 'react-dom';
import Main from './components/main';
import ScrollToTop from 'react-scroll-up';



class App extends React.Component {
    render () { 
        let s = {
            fontSize: '38px',
            color: '#000'
        };
    return (<div>
        <ScrollToTop showUnder={160}>
        <i class="fa fa-arrow-circle-o-up fa-3" style={s} aria-hidden="true"></i>
  </ScrollToTop>
        <Main/></div>); 
    };
} 
/*
var a = document.createElement('div');
a.setAttribute("id","app");
console.log('test');
document.getElementById('etsp-ajax-container').appendChild(a);
*/

render(<App/>, document.getElementById('app'));  
