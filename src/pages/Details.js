import { Avatar } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'

const Details = ({ formValues }) => {
    return (
        <Container>
            <div>
                <span>Name: </span>
                <span>{formValues.name}</span>
            </div>

            <div>
                <span>Date of Birth: </span>
                <span>{formValues.dob}</span>
            </div>

            <div>
                <span>Location: </span>
                <span>{formValues.location}</span>
            </div>

            <div>
                <span>Team: </span>
                <span>{formValues.team}</span>
            </div>

            <div>
                <span>gender: </span>
                <span>{formValues.gender}</span>
            </div>

            <div>
                <span>Sports: </span>
                {formValues.sports.map((value) => { return (<span>{value} </span>) })}
            </div>

            <div>
                <span>Interests: </span>
                <span>{formValues.interests}</span>
            </div>

            <div>
                <span>Description: </span>
                <span>{formValues.description}</span>
            </div>

            <div>
                <span>Image: </span>
                <img src={formValues.image} alt="img" />
            </div>
        </Container>
    )
}

export default Details