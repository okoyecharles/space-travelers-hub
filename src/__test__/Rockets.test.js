import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';
import { reserveRocket, loadRockets } from '../redux/rocket/actions';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type GET_ROCKETS', () => {
    const data = [
      {
        id: 1,
        rocket_id: 'rock52',
        rocket_name: 'rock 52',
        rocket_type: 'rocket',
        flickr_images: ['image1.png', 'imag2.jpg'],
        description: 'A test rocket',
      },
    ];
    const action = loadRockets(data);
    expect(action.type).toBe('store/rockets/GET_ROCKETS');
  });

  it('should return an action with type RESERVE_ROCKET', () => {
    const id = 1;
    const action = reserveRocket(id);
    expect(action.type).toBe('store/rockets/RESERVE_ROCKET');
  });
});
