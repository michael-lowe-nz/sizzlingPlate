import React from 'react'

export default ({title, id}) => {
    return <button key={id} className="button is-outlined">{title}</button>
}