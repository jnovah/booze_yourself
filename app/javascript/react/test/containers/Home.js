import Home from '../../src/containers/Home'
import TopBeersTile from '../../src/Components/TopBeersTile'
import NewestBeersTile from '../../src/Components/NewestBeersTile'

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Home />
    )
  })

  it('should have a specified initial state', () => {
    expect(wrapper.state()).toEqual({
      beerName: "Bud Light",
      brewery: "Busch",
      rating: 2
    })
  })

  it('should render a TopBeersTile component', () => {
    expect(wrapper.find(TopBeersTile)).toBePresent();
  })

  it('should render a NewestBeersTile component', () => {
    expect(wrapper.find(NewestBeersTile)).toBePresent();
  })

})
