import TopBeersTile from '../../src/Components/TopBeersTile'
import { shallow, mount, render } from 'enzyme';

describe('TopBeersTile', () => {
  let wrapper;
  let beers = [
    {beerName: "Bud Light",
    brewery: "Busch",
    rating: 2}, {beerName: "Bud",
    brewery: "Busch",
    rating: 2}]

  beforeEach(() => {
    wrapper = shallow(
      <TopBeersTile
        beers={beers}
      />
    )
  })

  it('should render one div element', () => {
    expect(wrapper.find('div')).toBePresent()
  })

  it('should render tr elements', () => {
    expect(wrapper.find('BootstrapTable')).toBePresent()
  })

  it('should render three th tags with text Name, Brewery and Rating', () => {
    expect(wrapper.find('TableHeaderColumn').at(0).text()).toEqual('Name')
    expect(wrapper.find('TableHeaderColumn').at(1).text()).toEqual('Brewery')
    expect(wrapper.find('TableHeaderColumn').at(2).text()).toEqual('Rating')
  })
})
