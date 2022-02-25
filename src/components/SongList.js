import React from 'react'
import Song from './Song'

export default function(props) {
	return (
		<div>
			{
				props.songs.map(c =>
					<Song key={c.id} name={c.name} id={c.id}/>
				)
			}
		</div>
	)
}