import { mount, render } from 'enzyme';
import ReviewsIndex from '../../src/containers/ReviewsIndex'
import ReviewTile from '../../src/Components/ReviewTile'

describe('ReviewsIndex', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewsIndex
        reviews={[{rating: 5, descrption: 'hello hello'}]}
        beerId={1}/>
    )
  })

  it('should render a ReviewTile component', () => {
    expect(wrapper.find(ReviewTile)).toBePresent()
  })
})
