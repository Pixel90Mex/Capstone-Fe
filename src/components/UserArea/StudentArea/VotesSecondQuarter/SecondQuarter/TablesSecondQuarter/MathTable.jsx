import React from 'react'
import { Table } from 'react-bootstrap'

const MathTable = ({matematica}) => {
    return (
        <>
            <Table striped="columns" bordered hover responsive variant="dark" className='mt-5 ' size="sm">
                <thead>
                    <tr>
                        <th>ORALE</th>
                        <th>SCRITTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {matematica && matematica.orale.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                        <td>
                            {matematica && matematica.scritto.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default MathTable