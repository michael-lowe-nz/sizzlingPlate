import React from 'react'

export default ({title, id, goToSession, location='unknown', created='?'}) => {
    return (
        <div className="recent-session clickable column is-12">
            <div onClick={() => goToSession(id)} className=''>
                <div className="columns">
                    <div className="column is-6">
                        <h3 className="title is-5">{title}</h3>
                        <p className="subtitle is-6">{location}</p>
                    </div>
                    <h3 className="column is-6 has-text-right-tablet">{created.toString()}</h3>
                </div>
            </div>
        </div>
    )
}