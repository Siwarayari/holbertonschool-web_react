import { shallow } from 'enzyme';
import App from './task_0/dashboard/src/App/App';
import Header from '../Header/Header';
import Notifications from './Notifications/Notifications';
import Footer from '../Footer/Footer';


describe('<MyComponent />', () => {
it('verifies that calling handleDisplayDrawer updates the state to true', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  expect(wrapper.state().displayDrawer).toEqual(false);
  instance.handleDisplayDrawer();
  expect(wrapper.state().displayDrawer).toEqual(true);
});

it('verifies that calling handleHideDrawer updates the state to false', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  wrapper.setState({ displayDrawer: true });
  expect(wrapper.state().displayDrawer).toEqual(true);
  instance.handleHideDrawer();
  expect(wrapper.state().displayDrawer).toEqual(false);
});
