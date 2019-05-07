import React from 'react'

class PageThree extends React.Component{
  constructor(){
    super()
    this.state = {hello: "goodbye"}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    return(
      console.log(e.target.name)
    )
  }

  render(){
  return(
    <div>
    <p> </p>
    <ul className = "list">
      <li className = "listItem" name = "Africa" onClick = {this.handleClick}> Africa </li>
      <li className = "listItem" name = "Asia" onClick = {this.handleClick}> Asia </li>
      <li className = "listItem" name = "Europe" onClick = {this.handleClick}> Europe </li>
      <li className = "listItem" name = "North America" onClick = {this.handleClick}> North America </li>
      <li className = "listItem" name = "Oceania" onClick = {this.handleClick}> Oceania </li>
      <li className = "listItem" name = "South America" onClick = {this.handleClick}> South America </li>
    </ul>
    <h1>PLACEHOLDER TEXT</h1>
    </div>
  )
  }
}

export default PageThree
