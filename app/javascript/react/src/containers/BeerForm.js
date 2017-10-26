import React, { Component } from 'react'
import FormInput from '../Components/FormInput'

class BeerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beerName: '',
      abv: '',
      availability: '',
      description: '',
      type: '',
      breweryName: '',
      breweryWebsite: '',
      warning: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    debugger
    event.preventDefault();
    let formPayLoad = {
      beer_name: this.state.beerName,
      abv: this.state.abv,
      availability: this.state.availability,
      description: this.state.description,
      type: this.state.type,
      brewery_name: this.state.breweryName,
      brewery_website: this.state.breweryWebsite };
    if (this.state.beerName !== '' && this.state.abv !== '' && this.state.availability !== '' && this.state.description !== '' && this.state.type !== '' && this.state.breweryName !== '') {
      this.setState({
      beerName: '',
      abv: '',
      availability: '',
      description: '',
      type: '',
      breweryName: '',
      breweryWebsite: '',
      warning: ''
      })
      this.props.addNewBeer(formPayLoad);
    } else {
      this.setState({ warning: 'Please fill out all fields!' })
    }
  }

  render(){
    return(
    <div className='grid-x'>
      <form className=' small-4 small-offset-4 new-beer-form'onSubmit={this.handleSubmit}>
        <p>{this.state.warning}</p>
        <FormInput
          key='beerName'
          name='beerName'
          label='Beer Name'
          value={this.state.beerName}
          handleChange={this.handleChange}
        />
        <FormInput
          key='type'
          name='type'
          label='Beer Type'
          value={this.state.type}
          handleChange={this.handleChange}
        />
        <FormInput
          key='abv'
          name='abv'
          label='ABV'
          value={this.state.abv}
          handleChange={this.handleChange}
        />
        <FormInput
          key='availability'
          name='availability'
          label='Availability'
          value={this.state.availability}
          handleChange={this.handleChange}
        />
      <label htmlFor={'description'}>Description<textarea type="text" id='description' name='description' onChange={this.handleChange} value={this.state.description} /></label>
        <FormInput
          key='breweryName'
          name='breweryName'
          label='Brewery Name'
          value={this.state.breweryName}
          handleChange={this.handleChange}
        />
        <FormInput
          key='breweryWebsite'
          name='breweryWebsite'
          label='Brewery Website URL'
          value={this.state.breweryWebsite}
          handleChange={this.handleChange}
        />
        <input type="submit" className="beer-form-submit button" onSubmit={this.handleSubmit}/>
      </form>
    </div>
    )
  }
}

export default BeerForm
