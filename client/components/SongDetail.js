import React from 'react'
import {graphql} from 'react-apollo'
import getSong from '../queries/getSong'
import {Link} from 'react-router'
import LyricCreate from "./LyricCreate";
import Lyriclist from "./LyricList";

class SongDetail extends React.Component {

	render() {
		console.log("this.props", this.props)
		const {song} = this.props.data

		if (!song) {return <div>Loading...</div>}

		return(
			<div>
				<Link to="/">Back</Link>
				<h3>Song detail</h3>
				<Lyriclist lyrics={song.lyrics}/>
				<LyricCreate songId={this.props.params.id} />
			</div>
		)
	}
}

export default graphql(getSong, {
	//this is done to pass variable to query.
	options: (props) => {return {variables: { id: props.params.id }}}
})(SongDetail)
