import React, { Component } from 'react'
import FormInput from '../Components/FormInput'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: '',
      description: '',
      warning: ''
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleRadioChange(event) {
    this.setState({rating: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad = { rating: this.state.rating, description: this.state.description, beer_id: this.props.beerId, user_id: this.props.userId }
    if (this.state.rating !== '' && this.state.description !== '') {
      this.setState({ rating: '', description: '', warning: ''})
      this.props.addNewReview(formPayLoad)
    } else {
      this.setState({ warning: 'Please pick a rating and leave a comment!' })
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.warning}</p>
        <div className='row' onChange={this.handleRadioChange}>
          <label className="small-1 column">
            1 <input type="radio" name='rating' value="1"/>
          </label>
          <label className="small-1 column">
            2 <input type="radio" name='rating' value="2"/>
          </label>
          <label className="small-1 column">
            3 <input type="radio" name='rating' value="3" />
          </label>
          <label className="small-1 column">
            4 <input type="radio" name='rating' value="4" />
          </label>
          <label className="small-1 column">
            5 <input type="radio" name='rating' value="5" />
          </label>
        </div>
        <FormInput
          key='description'
          name='description'
          label='Description'
          value={this.state.description}
          handleChange={this.handleDescriptionChange}
        />
        <input type="submit" className="button"/>
      </form>
    )
  }
}

export default ReviewForm
