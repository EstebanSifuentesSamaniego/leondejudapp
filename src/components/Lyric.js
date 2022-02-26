import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import letras from '../letras.js'

export default function Lyric(){

    let { id } = useParams()

    return(
        /*<div>
            <Header />
            <div style={{ margin: '10px', padding: '10px' }}>
                { letras[id] }
            </div>
        </div>*/
        <div>
            <Header />
            <div style={{ margin: '10px', padding: '10px' }}>
                { 
                    letras[id].split ('\n').map ((item, i) => (
                        <p key={i} style={{ marginBottom: '0px', marginTop: '0px' }} >{item}<span /></p>
                    ))
                }
            </div>
        </div>
    )
}