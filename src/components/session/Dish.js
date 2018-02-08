import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import {addDish, addSession, setDishInput, addDishVote} from '../../reducers/session'
import {deleteDish} from '../../actions/index'

class Dish extends React.Component {
  constructor(props) {
    super(props)
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
    this.handleDeleteDish = this.handleDeleteDish.bind(this)
  }

  handleUpVote (e) {
    e.preventDefault()
    this.props.addDishVote( this.props.name, {
      user: 'M',
      value: 1
    })
  }

  handleDownVote (e) {
    e.preventDefault()
    this.props.addDishVote( this.props.name, {
      user: 'J',
      value: -1
    })
  }

  handleDeleteDish (id) {
    console.log('props.location', this.props.match)
    deleteDish(id)
  }

  render() {
    return (<div className="dish column is-12">
      <div className="columns">
        <div className="column is-2">
          <strong>{this.props.name}</strong>
        </div>
        <div className="column is-4">
          <div className="field has-addons">
            <p className="control">
              <a onClick={this.handleUpVote} className="button is-medium">
                <span role="img" aria-label="thumbs up">👍</span>
                <span>{this.props.votes.filter(vote => vote.value > 0).length || null}</span>
              </a>
            </p>
            <p className="control">
              <a onClick={this.handleDownVote} className="button is-medium">
                <span role="img" aria-label="thumbs down">👎</span>
                <span>{this.props.votes.filter(vote => vote.value < 0).length || null}</span>
              </a>
            </p>
            <p className="control">
              <a onClick={this.handleDeleteDish} className="button is-medium">
                <span role="img" aria-label="trash emoji">🗑</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>)
  }
}

// const Dish = ({ name, votes, addDishVote, id, deleteDish, location }) => {
//   function handleUpVote () {
//     addDishVote( name, {
//       user: 'M',
//       value: 1
//     })
//   }
//
//   function handleDownVote () {
//     addDishVote( name, {
//       user: 'J',
//       value: -1
//     })
//   }
//
//   function handleDeleteDish () {
//     console.log('props.location', location)
//     deleteDish(id)
//   }
//
//   return (<div className="dish column is-12">
//     <div className="columns">
//       <div className="column is-2">
//         <strong>{name}</strong>
//       </div>
//       <div className="column is-4">
//         <div className="field has-addons">
//           <p className="control">
//             <a onClick={handleUpVote} className="button is-medium">
//               <span role="img" aria-label="thumbs up">👍</span>
//               <span>{votes.filter(vote => vote.value > 0).length || null}</span>
//             </a>
//           </p>
//           <p className="control">
//             <a onClick={handleDownVote} className="button is-medium">
//               <span role="img" aria-label="thumbs down">👎</span>
//               <span>{votes.filter(vote => vote.value < 0).length || null}</span>
//             </a>
//           </p>
//           <p className="control">
//             <a onClick={handleDeleteDish} className="button is-medium">
//               <span role="img" aria-label="trash emoji">🗑</span>
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>)
// }

const mapStateToProps = (props) => {
  console.log('mapStateToProps:', props)
  return {location: props.router.location}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteDish
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dish)
