import React from 'react'
import Header from '../src/components/Header'

describe('Header', () => {
  const wrapper = shallow(<Header/>)

  it('renders a header <div>', () => {
    expect(wrapper.find('#header')).to.have.lengthOf(1)
  })

  // it('renders an about <div>', () => {
  //   expect(wrapper.find('#about')).to.have.lengthOf(1)
  // })

  // it('renders a search <div>', () => {
  //   expect(wrapper.find('#search')).to.have.lengthOf(1)
  // })
})
