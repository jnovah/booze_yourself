import { shallow, mount, render } from 'enzyme';
import BeersIndex from '../../src/Components/BeersIndex.js'
import BeersTile from '../../src/Components/BeersTile'

describe('BeersIndex', () => {
  let wrapper;
  let beers = [
    {beerName: "Bud Light",
    brewery: "Busch",
    rating: 2}, {beerName: "Bud",
    brewery: "Busch",
    rating: 2}]

  beforeEach(() => {
    wrapper = shallow(
      <BeersIndex beers={beers}/>
    )
  })

  it('should render a BeersTile component', () => {
    expect(wrapper.find(BeersTile)).toBePresent();
  })

  it('should render one div element', () => {
    expect(wrapper.find('div')).toBePresent()
  })

  it('should render one table element', () => {
    expect(wrapper.find('table')).toBePresent()
  })

  it('should render one thead element', () => {
    expect(wrapper.find('thead')).toBePresent()
  })

  it('should render tr elements', () => {
    expect(wrapper.find('tr')).toBePresent()
  })

  it('should render three th tags with text Name, Brewery and Rating', () => {
    expect(wrapper.find('th').at(0).text()).toEqual('Name')
    expect(wrapper.find('th').at(1).text()).toEqual('Brewery')
    expect(wrapper.find('th').at(2).text()).toEqual('Rating')
  })

  it('should render one tbody element', () => {
    expect(wrapper.find('tbody')).toBePresent()
  })
})
