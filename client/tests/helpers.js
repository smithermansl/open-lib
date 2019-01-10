import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { sinon, spy } from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

global.expect = expect
global.sinon = sinon
global.spy = spy
global.shallow = shallow
