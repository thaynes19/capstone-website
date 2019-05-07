import React from 'react'
import Head from './Head'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

import {BrowserRouter, Route} from 'react-router-dom'

class MyApp extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div style = {{backgroundColor: "#eeeeff"}}>
          <Head />
          <Route path = "/TrueFalseQuiz" component = {PageOne} />
          <Route path = "/FillInTheBlankQuiz" component = {PageTwo} />
          <Route path = "/PageThree" component = {PageThree} />
        </div>
      </BrowserRouter>
    )
  }
}

export default MyApp
