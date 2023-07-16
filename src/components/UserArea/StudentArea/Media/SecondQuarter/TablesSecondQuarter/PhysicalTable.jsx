import React from 'react'
import { Table } from "react-bootstrap"

const PhysicalTable = ({ fisica }) => {
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
                            {fisica && fisica.orale.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                        <td>
                            {fisica && fisica.scritto.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default PhysicalTable