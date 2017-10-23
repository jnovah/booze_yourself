import NewestBeersTile from '../../src/Components/NewestBeersTile'
import { shallow } from 'enzyme'

describe('NewestBeersTile', () => {
  let wrapper;
  let beers = [
    {beerName: "Bud Light",
    brewery: "Busch",
    rating: 2}, {beerName: "Bud",
    brewery: "Busch",
    rating: 2}]

  beforeEach(() => {
    wrapper = shallow(
      <NewestBeersTile
        beers={beers}
      />
    )
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

  it('should render six td tags with text Bud Light, Busch and 2', () => {
    expect(wrapper.find('td').at(0).text()).toEqual('Bud Light')
    expect(wrapper.find('td').at(1).text()).toEqual('Busch')
    expect(wrapper.find('td').at(2).text()).toEqual('2')
    expect(wrapper.find('td').at(3).text()).toEqual('Bud')
    expect(wrapper.find('td').at(4).text()).toEqual('Busch')
    expect(wrapper.find('td').at(5).text()).toEqual('2')

  })
})
