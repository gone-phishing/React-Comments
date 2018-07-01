import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './CommentBox.jsx';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
		<Router> 
			<Switch> <Route basename={process.env.PUBLIC_URL} path={'/'} render={ (routerProps) => <CommentBox parent_id={223}  routerProps={routerProps} />} /> </Switch>
        </Router>, document.getElementById('root'));
registerServiceWorker();
