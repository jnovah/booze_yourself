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
        <div className='grid-x' onChange={this.handleRadioChange}>
          <label className="small-4 cell">
            1  &nbsp;<input type="radio" name='rating' value="1"/> &nbsp;
            2  &nbsp;<input type="radio" name='rating' value="2"/> &nbsp;
            3  &nbsp;<input type="radio" name='rating' value="3" /> &nbsp;
            4  &nbsp;<input type="radio" name='rating' value="4" /> &nbsp;
            5  &nbsp;<input type="radio" name='rating' value="5" /> &nbsp;
          </label>
        </div>
        <div className='small-6 cell'>
        <FormInput
          key='description'
          name='description'
          label='Description'
          value={this.state.description}
          handleChange={this.handleDescriptionChange}
        />
      </div>
      <div onClick={this.handleSubmit}>
        <a href='/' className="submit-button button">Submit</a>
      </div>
      </form>
    )
  }
}

export default ReviewForm
