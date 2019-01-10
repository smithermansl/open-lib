import React from 'react'
import App from '../src/components/App'
import Header from '../src/components/Header'
import Main from '../src/components/Main'

describe('App', () => {
  const wrapper = shallow(<App/>)

  it('renders a <Header/> component', () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  })

  it('renders a <Main/> component', () => {
    expect(wrapper.find(Main)).to.have.lengthOf(1);
  })
})
