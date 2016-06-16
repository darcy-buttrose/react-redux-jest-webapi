/**
 * Created by Darcy on 14/06/2016.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {expect} from "chai";
import Root from '../app/containers/Root.react';
import * as TestUtils from 'react-addons-test-utils';

describe('test', () => {
    it('should pass', () => {
        const root = TestUtils.renderIntoDocument(<Root/>);
        const node = ReactDOM.findDOMNode(root);
        expect(node.textContent).to.equal('Add');
    });
});