import React from 'react'
import { Table } from "react-bootstrap"

const PhysEd = ({ edFisica }) => {
    return (
        <>
            <Table striped="columns" bordered hover responsive variant="dark" className='m-0' size="sm">
                <thead>
                    <tr>
                        <th>ORALE</th>
                        <th>SCRITTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {edFisica && edFisica.orale.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                        <td>
                            {edFisica && edFisica.scritto.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default PhysEd