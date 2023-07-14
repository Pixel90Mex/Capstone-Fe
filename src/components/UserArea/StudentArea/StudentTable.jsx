import React from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

const StudentTable = () => {
    return (
        <>
        <Button>STORIA</Button>
        <Button>FISICA</Button>
            <Table responsive>
                <thead>
                    <tr>
                        <th>STUDENTE</th>
                        <th>SCRITTO</th>
                        <th>ORALE</th>
                        <th>MEDIE
                            <th>O</th>
                            <th>S</th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default StudentTable