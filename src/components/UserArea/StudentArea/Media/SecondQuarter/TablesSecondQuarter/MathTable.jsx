import React from 'react'
import { Table } from 'react-bootstrap'

const MathTable = ({matematica}) => {
    return (
        <>
            <Table responsive className='mt-5'>
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