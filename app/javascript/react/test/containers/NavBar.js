import NavBar from '../../src/containers/NavBar'
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NavBar />
    )
  })

  it('should render five a elements', () => {
    expect(wrapper.find('a')).toBePresent()
    expect(wrapper.find('a').length).toEqual(1)
  })

  it('should render four NavLink components', () => {
    expect(wrapper.find('NavLink').length).toEqual(2)
    expect(wrapper.find('NavLink').at(0).prop('to')).toEqual('/')
    expect(wrapper.find('NavLink').at(1).prop('to')).toEqual('/beers')
  })
})
