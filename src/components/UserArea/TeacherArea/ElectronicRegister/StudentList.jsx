import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ElectronicRegister from './ElectronicRegister';
import "../../../../style/StudentList.css";

const StudentList = ({ singleClass, section, Teacher }) => {
    console.log(Teacher)
    const [renderStudents, setRenderStudents] = useState(false);
    const toggleStudents = () => {
        setRenderStudents(!renderStudents)
    }

    return (
        <>
            
                <Button id='butStudent' className='mt-0 font-italic' onClick={toggleStudents}>{section}</Button>
                {
                    singleClass && singleClass.SingleClass?.class?.students?.map((item) => {
                        return (
                            <>
                                {
                                    renderStudents &&
                                    <>
                                        <Card className='mt-1' style={{borderColor:'#b4b4b4'}}>
                                            <Card.Header className='font-italic' style={{fontSize:'21px', backgroundColor:'#cdcdcd', color:'#3c3c3c', border:'none'}}>{item.name + ' ' + item.surname}</Card.Header>
                                            <Card.Body style={{backgroundColor:'#ebebef'}}>
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