import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './CommentBox.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentBox parent_id={223} />, document.getElementById('root'));
registerServiceWorker();
