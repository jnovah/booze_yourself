import BeersTile from '../../src/Components/BeersTile'
import { shallow } from 'enzyme'




describe('BeersTile', () => {
  let wrapper;
  let beers = [
    {beerName: "Bud Light",
    brewery: "Busch",
    rating: 2, id: 1}, {beerName: "Bud",
    brewery: "Busch",
    rating: 2, id: 2}]

  beforeEach(() => {
    wrapper = shallow(
      <BeersTile beers={beers}/>
    )
  })
    it('should render 1 td tag with a Navlink', () => {
     expect(wrapper.find('td')).toBePresent()
    })

})
