import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ElectronicRegister from './ElectronicRegister';
const StudentList = ({ singleClass, section, Teacher }) => {
    console.log(Teacher)
    const [renderStudents, setRenderStudents] = useState(false);
    const toggleStudents = () => {
        setRenderStudents(!renderStudents)
    }

    return (
        <>
            <Button onClick={toggleStudents}>{section}</Button>
                {
                    singleClass && singleClass.SingleClass?.class?.students?.map((item) => {
                        return (
                            <>
                                {
                                    renderStudents &&
                                    <>
                                        <Card>
                                            <Card.Header>{item.name + ' ' + item.surname}</Card.Header>
                                            <Card.Body>
                                                <ElectronicRegister
                                                    dataStudents={item.school_subjects}
                                                    Student={item}
                                                    Teacher={Teacher}
                                                />
                                            </Card.Body>
                                        </Card>
                                        
                                    </>
                                }
                            </>
                        )
                    })
                }   
        </>
    )
}

export default StudentList