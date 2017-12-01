import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Link, hashHistory} from 'react-router'
import fetchSongs from '../queries/fetchSongs'


class SongCreate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: ""
		}
	}

	onSubmit(e) {
		e.preventDefault()

		this.props.mutate({
			//variables are what is passed to queries with '$' sign
			variables: {
				title: this.state.title
			},
			//this queries will be refetched after mutation is done
			refetchQueries: [{
				query: fetchSongs,
				variables: {}
			}]
		})
			.then(() => hashHistory.push('/'))
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<h3>Create song</h3>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label>Song title:</label>
					<input type="text" value={this.state.title} onChange={e => this.setState({title: e.target.value})} />
				</form>
			</div>
		)
	}
}

const mutation = gql`
	mutation AddSong($title: String){
	  addSong(title: $title) {
	    title
	  }
}`

//when we pass mutation to graphql() helper we get prop 'mutation' on props
export default graphql(mutation)(SongCreate)
