import React from 'react'
import ReviewTile from '../../src/Components/ReviewTile'

describe('ReviewTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        key={1}
        description='This is a description'
        rating='5'
      />
    )
  })

  it('should render eight div element', () => {
    expect(wrapper.find('div')).toBePresent()
    expect(wrapper.find('div').length).toEqual(7)
  })


  it('should render a div element with the description', () => {
    expect(wrapper.find('.review-description').text()).toEqual('Description: This is a description')
  })

  it('should render a div element with rating 2', () => {
    expect(wrapper.find('.rating').text()).toEqual('Rating: 5')
  })
})
