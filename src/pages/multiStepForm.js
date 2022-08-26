import React, { useState } from 'react'
import '../App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import BasicInfo from './BasicInfo';
import AboutForm from './AboutForm';
import Details from './Details';


const BASIC_INFO = 1;
const ABOUT = 2;
const DETAILS = 3;
export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        name: "",
        dob: "",
        gender: "",
        sports: [],
        team: "",
        location: "",
        interests: "",
        image: "",
        description: ""
    });

    const next = () => {
        setStep(step + 1)
    }

    const prev = () => {
        setStep(step - 1)
    }

    console.log(formValues)
    const handleChangeValue = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <Form style={{ position: 'relative' }}>
                {renderForm(step, handleChangeValue, formValues)}
                {step === 3 && <Button type="submit" className="submit-btn">Submit</Button>}
            </Form>

            <div className="d-flex justify-content-between my-3">
                {step > 1 && <Button onClick={prev}>Previous</Button>}
                {step < 3 && <Button onClick={next}>Next</Button>}
            </div>
        </>
    )
}

const renderForm = (formPage, updateForm, values) => {
    if (formPage === BASIC_INFO) {
        return <BasicInfo handleChangeValue={updateForm} values={values} />
    }
    if (formPage === ABOUT) {
        return <AboutForm handleChangeValue={updateForm} values={values} />
    }
    if (formPage === DETAILS) {
        return <Details formValues={values} />
    }
}
