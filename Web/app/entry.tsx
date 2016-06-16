/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './containers/Root.react';

import '../css/base.css';
import '../css/app.css';

class Dummy extends React.Component<{}, {}> { }

ReactDOM.render(
    <Root />,
    document.getElementById('content')
);