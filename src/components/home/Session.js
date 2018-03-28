import React from 'react'

export default ({title, id, goToSession}) => {
    return (
        <div className="column is-12">
            <button onClick={() => goToSession(id)} className="button is-outlined">{title}</button>
        </div>
    )
}