import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { About, Home, Nav, Projects } from 'pages'
import './App.css'

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
