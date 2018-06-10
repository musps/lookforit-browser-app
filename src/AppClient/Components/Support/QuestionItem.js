import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

const QuestionItem = ({title, content, onClickItem, isOpen}) => {
  const clsContent = classNames({
    'questionContent': true,
    'isOpen': isOpen
  })

  const clsArrows = classNames({
    'icon-arrowQuestionItem': true,
    'isOpen': isOpen
  })

  return (
    <div className='questionItem'>
      <div className='questionTitle' onClick={onClickItem}>
        <div className={clsArrows}></div>
        <h1>{title}</h1>
      </div>
      <div className={clsContent}>
        <p dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </div>
  )
}

class QuestionItemContainer extends Component {
  state = {
    isOpen: false
  }

  constructor (props) {
    super(props)
    this.onClickItem = this.onClickItem.bind(this)

    if (typeof this.props.alwaysOpen !== 'undefined') {
      this.state.isOpen = true
    }
  }

  onClickItem () {
    if (typeof this.props.alwaysOpen === 'undefined') {
      this.setState(prevState => ({
        isOpen: prevState.isOpen ? false : true
      }))
    }
  }

  render () {
    return (
      <QuestionItem
        title={this.props.title}
        content={this.props.content}
        onClickItem={this.onClickItem}
        isOpen={this.state.isOpen}
      />
    )
  }
}

export default QuestionItemContainer
