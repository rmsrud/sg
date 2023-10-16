import React from 'react'

const Banner2 = ({ people }) => {
    console.log(people)
    return (
        <div style={{
            // eslint-disable-next-line no-useless-concat
            backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_multi_faces${people.profile_path}` + ")"
        }} className='banner2'>
            <div className='banner-info'>
                <h1 className='people_h1'>{people.name}</h1>
                <p>{people.overview}</p>
            </div>
        </div>
    )
}

export default Banner2
