import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

class Lyriclist extends React.Component {
	onClick(id, likes) {
		this.props.mutate({
			variables: {
				id: id
			},
			//IMPORTANT: this causes immediate change in our data. Then when response comes back the data is updated again.
			// We pretty much assume what will be the response and show it. This is done for performance reasons. Otherwise in this example number of like is changed only when response comes back and
			// not when like button is clicked. If our prediction does not match response from server, our prediction will be overwritten with the server data.
			//CRAZY!
			optimisticResponse: {
				__typename: 'Mutation',
				likeLyric: {
					id: id,
					__typename: 'LyricType',
					likes: likes + 1
				}
			}
		})
	}

	renderLyrics() {
		return this.props.lyrics.map(lyric => {
			return (
				<li key={lyric.id} className="collection-item">
					{lyric.content}
					<div className="vote-box">
						<i onClick={() => this.onClick(lyric.id, lyric.likes)} className="material-icons">thumb_up</i>
						{lyric.likes}
					</div>

				</li>
			)
		})
	}

	render() {
		return (
			<ul className="collection">
				{this.renderLyrics()}
			</ul>
		)
	}
}

const mutation = gql`
	mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`

export default graphql(mutation)(Lyriclist)