import React from 'react'
import { NavLink } from 'react-router-dom'
import { shallow } from 'enzyme'
import BeersTile from '../../src/Components/BeersTile'

describe('BeersTile', () => {
  let wrapper;
  let beers = {beerName: "Bud Light",
  brewery: "Busch",
  rating: 2, id: 1}

  beforeEach(() => {
    wrapper = shallow(
      <BeersTile
        key={beers.id}
        beerName={beers.beerName}
        brewery={beers.brewery}
        rating={beers.rating}
        id={beers.id}
      />
    )
  })

  it('should render one tr element', () => {
    expect(wrapper.find('tr')).toBePresent()
    expect(wrapper.find('tr').length).toEqual(1)
  })

  it('should render three td elements', () => {
    expect(wrapper.find('td')).toBePresent()
    expect(wrapper.find('td').length).toEqual(3)
  })

  it('should render a td element with a NavLink', () => {
    expect(wrapper.find('td').find('NavLink')).toBePresent()
    expect(wrapper.find('td').find('NavLink').length).toEqual(1)
    expect(wrapper.find('td').find('NavLink').prop('to')).toEqual('/beers/1')
    expect(wrapper.find('td').find('NavLink')).toContainReact(<NavLink to="/beers/1">Bud Light</NavLink>)
  })

  it('should render a td element with the brewery name Busch', () => {
    expect(wrapper.find('td').at(1).text()).toEqual('Busch')
  })

  it('should render a td element with rating 2', () => {
    expect(wrapper.find('td').at(2).text()).toEqual('2')
  })
})
