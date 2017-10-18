import NavBar from '../../src/containers/NavBar'

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <NavBar />
    )
  })

  it('should render five a elements', () => {
    expect(wrapper.find('a')).toBePresent()
<<<<<<< HEAD
    expect(wrapper.find('a').length).toEqual(5)
=======
    expect(wrapper.find('a').length).toEqual(1)
>>>>>>> 0f801766cfc0dad0609813a525a98cfe8ac088a5
  })

  it('should render an anchor tag with text Booze Yourself', () => {
    expect(wrapper.find('a').at(0).text()).toEqual('Booze Yourself')
  })
<<<<<<< HEAD

  it('should render an anchor tag with text Beers', () => {
    expect(wrapper.find('a').at(1).text()).toEqual('Beers')
  })

  it('should render an anchor tag with text Breweries', () => {
    expect(wrapper.find('a').at(2).text()).toEqual('Breweries')
  })

  it('should render an anchor tag with text Sign In', () => {
    expect(wrapper.find('a').at(3).text()).toEqual('Sign In')
  })

  it('should render an anchor tag with text Home', () => {
    expect(wrapper.find('a').at(4).text()).toEqual('Home')
  })

=======
>>>>>>> 0f801766cfc0dad0609813a525a98cfe8ac088a5
})
