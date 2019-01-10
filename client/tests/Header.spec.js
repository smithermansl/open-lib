import React from 'react'
import { Header } from '../src/components/Header'

describe('Header', () => {
  const wrapper = shallow(<Header/>)

  it ('has state', () => {
    expect(wrapper.state().query).to.equal('')
  })

  it('renders a header <div>', () => {
    expect(wrapper.find('#header')).to.have.length(1)
  })

  it('renders an about <div>', () => {
    expect(wrapper.find('#about')).to.have.lengthOf(1)
  })

  it('renders a search <div>', () => {
    expect(wrapper.find('#search')).to.have.lengthOf(1)
  })

  // it('button fires handleClick function when clicked', () => {
  //   // errors with preventDefault(), this.props.sendQuery(str)
  //   const methodSpy = spy(Header.prototype, 'handleSearch')
  //   const spyWrapper = shallow(<Header/>)
  //   spyWrapper.find('button').simulate('click')
  //   expect(methodSpy).toHaveBeenCalled()
  // })
})
