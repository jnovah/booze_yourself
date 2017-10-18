import BoozeYourself from '../src/BoozeYourself';

describe('BoozeYourself', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BoozeYourself />
    )
  })

  it('should render four a elements', () => {
    expect(wrapper.find('a')).toBePresent()
    expect(wrapper.find('a').length).toEqual(4)
  })

  it('should render an anchor tag with text Booze Yourself', () => {
    expect(wrapper.find('a').at(0).text()).toEqual('Booze Yourself')
  })

  it('should render an anchor tag with text Beers', () => {
    expect(wrapper.find('a').at(1).text()).toEqual('Beers')
  })

  it('should render an anchor tag with text Breweries', () => {
    expect(wrapper.find('a').at(2).text()).toEqual('Breweries')
  })

  it('should render an anchor tag with text Sign In', () => {
    expect(wrapper.find('a').at(3).text()).toEqual('Sign In')
  })
})
