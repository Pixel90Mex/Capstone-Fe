import React from 'react'
import { Table, Button } from "react-bootstrap";

const StudentTable = ({ school_subjects }) => {
    console.log(school_subjects)
    return (
        <>
            <Table responsive className='mt-5'>
                <thead>
                    <tr>
                        <th>MATERIA</th>
                        <th>SCRITTO</th>
                        <th>ORALE</th>
                        <th>M. ORALE</th>
                        <th>M. SCRITTA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </>)
}

export default StudentTable



