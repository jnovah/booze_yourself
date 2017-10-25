import ReviewForm from '../../src/containers/ReviewForm'
import { mount} from 'enzyme'
import React, {Component} from 'react'
import FormInput from '../../src/Components/FormInput'

describe('ReviewForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper=mount(
      <ReviewForm />
    )
  })
  it('should render a FormInput component', () => {
    expect(wrapper.find(FormInput)).toBePresent()
  })

  it('should render five radio buttons', () => {
    expect(wrapper.find('input').length).toEqual(7)
  })
})
