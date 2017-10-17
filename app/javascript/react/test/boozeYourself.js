import BoozeYourself from '../src/BoozeYourself';

describe('BoozeYourself', () => {
let wrapper;

beforeEach(() => {
wrapper = mount(
<BoozeYourself />
)
})

it('should render h1 tag', () => {
expect(wrapper.find('h1')).toBePresent()
})

it('should render h1 tag with text Hello from the react front end', () => {
expect(wrapper.find('h1').text()).toBe('Hello from the react front end')
})
})
