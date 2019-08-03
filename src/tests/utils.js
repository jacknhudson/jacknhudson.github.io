import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'

export function mountRoutedComponent(Component, props) {
  const wrapper = mount(
    <MemoryRouter>
      <Route>
        {({ history, location }) => <Component {...{ history, location }} {...props} />}
      </Route>
    </MemoryRouter>
  )
  return wrapper
}
