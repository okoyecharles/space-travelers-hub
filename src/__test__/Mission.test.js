import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Mission from '../components/Mission';
import store from '../redux/configureStore';

describe('Test for Mission', () => {
  test('should render', () => {
    const msn = {
      id: 1,
      name: 'dfg',
      description: 'ghdj',
      reserved: false,
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Mission mission={msn} key={1} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
