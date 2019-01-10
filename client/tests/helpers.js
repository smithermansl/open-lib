const { expect } = require('chai')
const Enzyme = require('enzyme')
const shallow = Enzyme.shallow
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

global.expect = expect
global.shallow = shallow
