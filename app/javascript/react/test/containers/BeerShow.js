import BeerShow from '../../src/containers/BeerShow'
import { shallow } from 'enzyme'


describe('BeerShow', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(
      <BeerShow/>
    )
  })


  it('should have a specified initial state', () => {
    expect(wrapper.state()).toEqual({
      beerName: "Bud Light",
      brewery: "Busch",
      rating: 2,
      id: 1,
      style: "lager",
      ABV: "4.5%",
      availability: "year round",
      breweryLink: "http://www.budlight.com/"

  })
})

  it('should render Eighteen div elements', () => {
        expect(wrapper.find('div').length).toEqual(18)
  })

  it('should render one h1 element', () => {
    expect(wrapper.find('h1')).toBePresent()
  })
  it('should render one h3 element', () => {
    expect(wrapper.find('h3')).toBePresent()
  })

  it('should render one a element', () => {
    expect(wrapper.find('a')).toBePresent()
  })
  it('should render one NavLink element', () => {
    expect(wrapper.find('NavLink')).toBePresent()
  })
})
