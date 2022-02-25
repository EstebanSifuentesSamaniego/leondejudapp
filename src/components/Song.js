import React from 'react'
import '../styles/Song.css'
//import PropTypes from "prop-types"

export default function Song(props){
	const id = props.id;

	function handleSongClick(){
		console.log(`hola song ${id}`)
	}

	return (
		<div className='song' onClick={handleSongClick}>
			<span>{props.name}</span>
		</div>
	)
}