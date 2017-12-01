import React from 'react'

class Lyriclist extends React.Component {
	renderLyrics() {
		return this.props.lyrics.map(lyric => {
			return (
				<li key={lyric.id} className="collection-item">{lyric.content}</li>
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

export default Lyriclist