import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'


class SongList extends React.Component {
	renderSongs() {

		//Alollo passes data to props withing which there is list of songs. fetching is done automatically when component renders.
		return this.props.data.songs.map(song => {
			return(
				<li key={song.id} className="collection-item">{song.title}</li>
			)
		})
	}

	render() {
		//this.props.data.loading shows status of fetching
		if (this.props.data.loading)
			return <div>Loading...</div>

		return (
			<div>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
			</div>
		)
	}
}

// define query with helper lib graphql-tag
const query = gql`
	{
		songs {
			id
			title
		}
	}
`
							 //bind query to the SongList component.
							 // this query will be executed as soon as component mounts
export default graphql(query)(SongList)