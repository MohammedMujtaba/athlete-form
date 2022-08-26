import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ImageUploading from 'react-images-uploading';

const AboutForm = ({ handleChangeValue, values }) => {

    return (
        <Container >
            <Form.Group controlId="form.Team">
                <Form.Label>Team</Form.Label>
                <Form.Control type="text" placeholder="Enter team" name="team" value={values.team} onChange={(e) => handleChangeValue(e)} />
            </Form.Group>

            <Form.Group controlId="form.Location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" name="location" value={values.location} onChange={(e) => handleChangeValue(e)} />
            </Form.Group>

            <Form.Group controlId="form.Interests">
                <Form.Label>Interests</Form.Label>
                <Form.Control type="text" placeholder="Enter Interest" name="interests" value={values.interests} onChange={(e) => handleChangeValue(e)} />
            </Form.Group>

            <Form.Group controlId="form.Image">
                <Form.Label>Image
                </Form.Label>
                <Form.Control type="file" name="image" onChange={(e) => { handleChangeValue({ target: { value: e.target.files[0], name: "image" } }) }} />
            </Form.Group>

            <ImageUploading
                value={values.images}
                onChange={(e) => { handleChangeValue({ target: { value: e.target.files[0], name: "image" } }) }}

                dataURLKey="data_url"
            >
                {({
                    onImageUpload,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            style={{
                                borderRadius: "100%",
                                width: "120px",
                                height: "120px",
                                border: "1px solid black",
                                backgroundColor: "transparent",
                                cursor: "pointer"
                            }}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                    </div>
                )}
            </ImageUploading>

            <Form.Group controlId="form.Description">
                <Form.Label>Description
                </Form.Label>
                <Form.Control as="textarea" row={3} name="description" onChange={(e) => handleChangeValue(e)} value={values.description} />
            </Form.Group>

        </Container>
    )
}

export default AboutForm