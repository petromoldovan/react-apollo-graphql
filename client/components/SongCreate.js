import React from 'react'

class SongCreate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: ""
		}
	}


	render() {
		return (
			<div>
				<h3>create song</h3>
				<form>
					<label>Song title:</label>
					<input type="text" value={this.state.title} onChange={e => this.setState({title: e.target.value})} />
				</form>
			</div>
		)
	}
}


export default SongCreate