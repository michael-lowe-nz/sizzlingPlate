import React from 'react'

export default ({title, id, goToSession}) => {
    return (
        <div className="recent-session clickable column is-12">
            <div onClick={() => goToSession(id)} className=''>
                <div class="columns">
                    <h3 className="column is-6 title is-">{title}</h3>
                    <h3 className="column is-6 has-text-right">{id}</h3>
                </div>
            </div>
        </div>
    )
}