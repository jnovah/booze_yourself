import { mount, render } from 'enzyme';
import FormInput from '../../src/Components/FormInput'

describe('FormInput', () => {
  let wrapper;
  let onChange;
  beforeEach(() => {
    wrapper = mount(
      <FormInput
        key='description'
        name='description'
        label='description'
        value='This is the value of the description'
      />
    )
  })

  it('should call the onChange function when field is typed into', () => {
    expect(wrapper.find('input')).toBePresent()
    expect(wrapper.find('input').prop('value')).toEqual('This is the value of the description')
    expect(wrapper.find('label').text()).toEqual('description')
  })
})
