import React from 'react'
import addLyricToSong from '../queries/addLyricToSong'
import {graphql} from 'react-apollo'

class LyricCreate extends React.Component {
	constructor() {
		super()

		this.state = {
			content: ""
		}
	}

	onSubmitLyric(e) {
		e.preventDefault()

		this.props.mutate({
			variables: {
				content: this.state.content,
				songId: this.props.songId
			}
		})
			.then(() => this.setState({content: ''}))

	}

	render() {
		return(
			<form onSubmit={this.onSubmitLyric.bind(this)}>
				<label>Create a lyric</label>
				<input
					type="text"
					value={this.state.content}
					onChange={e => this.setState({content: e.target.value})} />
			</form>
		)
	}
}

export default graphql(addLyricToSong)(LyricCreate)
