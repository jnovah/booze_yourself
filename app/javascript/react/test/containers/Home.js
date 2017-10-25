import Home from '../../src/containers/Home'
import TopBeersTile from '../../src/Components/TopBeersTile'
import NewestBeersTile from '../../src/Components/NewestBeersTile'
import { shallow, mount, render } from 'enzyme';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Home />
    )
  })

  it('should have a specified initial state', () => {
    expect(wrapper.state()).toEqual({
        beers:[
          {name: "Bud Light",
          brewery: "Busch",
          rating: 2, id: 1}, {name: "Bud",
          brewery: "Busch",
          rating: 2, id: 2}],
          search_value: ''
    })
  })

  it('should render a TopBeersTile component', () => {
    expect(wrapper.find(TopBeersTile)).toBePresent();
  })

  it('should render a NewestBeersTile component', () => {
    expect(wrapper.find(NewestBeersTile)).toBePresent();
  })

  it('should have a search bar', () => {
    expect(wrapper.find("input")).toBePresent();
  })

  it( 'search bar should affect text field and tables', () => {
    expect(wrapper.find('input').text()).toEqual('')
  })

})
