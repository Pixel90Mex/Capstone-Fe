import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import ElectronicRegister from './ElectronicRegister';
import StudentTable from '../../StudentArea/StudentTable';
const StudentList = ({ singleClass, section }) => {
    //console.log(singleClass)
    const [renderTable, setRenderTable] = useState(false);
    const [renderStudents, setRenderStudents] = useState(false);
    const toggleStudents = () => {
        setRenderStudents(!renderStudents)
    }
    const toggleTable = () => {
        setRenderTable(!renderTable)
    }
    return (
        <>
            <Button onClick={toggleStudents}>STUDENTI</Button>
            <Table striped="columns">

                {
                    singleClass && singleClass.SingleClass?.class?.students?.map((item) => {
                        return (
                            <>
                                {
                                    renderStudents &&
                                    <>
                                        <thead>
                                            <tr>
                                                <th>{item.name + ' ' + item.surname}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ElectronicRegister
                                                dataStudents={item.school_subjects}
                                                Student={item}
                                            />
                                        </tbody>
                                        <Button onClick={toggleTable}>TABELLA VALUTAZIONI</Button>
                                        {
                                            renderTable && <StudentTable />
                                        }
                                    </>
                                }
                            </>
                        )
                    })
                }
            </Table>
        </>
    )
}

export default StudentList