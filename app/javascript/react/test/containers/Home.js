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
          {beerName: "Bud Light",
          brewery: "Busch",
          rating: 2, id: 1}, {beerName: "Bud",
          brewery: "Busch",
          rating: 2, id: 2}]
    })
  })

  it('should render a TopBeersTile component', () => {
    expect(wrapper.find(TopBeersTile)).toBePresent();
  })

  it('should render a NewestBeersTile component', () => {
    expect(wrapper.find(NewestBeersTile)).toBePresent();
  })

})
