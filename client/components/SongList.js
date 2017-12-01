import React from 'react'
import {graphql} from 'react-apollo'
import {Link} from 'react-router'
import fetchSongs from '../queries/fetchSongs'
import deleteSongs from '../queries/deleteSong'


class SongList extends React.Component {
	onSongDelete(id) {

		this.props.mutate({
			variables: {
				id: id
			}})
			.then(() => this.props.data.refetch())	//this data.refetch works only if certain query is already used in this component
	}

	renderSongs() {
		//Alollo passes data to props withing which there is list of songs. fetching is done automatically when component renders.
		return this.props.data.songs.map(song => {
			return(
				<li
					key={song.id}
					className="collection-item">
					<Link to={`/songs/${song.id}`} >
						{song.title}
					</Link>

					<i
						className="material-icons"
						onClick={() => this.onSongDelete(song.id)}
					>delete</i>
				</li>
			)
		})
	}

	render() {
		console.log("this.props", this.props)

		//this.props.data.loading shows status of fetching
		if (this.props.data.loading)
			return <div>Loading...</div>

		return (
			<div>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link
					to="/songs/new"
					className="btn-floating btn-large red right">
					<i className="material-icons" >add</i>
				</Link>
			</div>
		)
	}
}

							 //bind query to the SongList component.
							 // this query will be executed as soon as component mounts
export default graphql(deleteSongs)(graphql(fetchSongs)(SongList))