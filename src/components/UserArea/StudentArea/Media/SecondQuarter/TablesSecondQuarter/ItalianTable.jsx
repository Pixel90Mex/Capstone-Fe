import React from 'react'
import { Table } from "react-bootstrap"

const ItalianTable = ({italiano}) => {
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
                            {italiano && italiano.orale.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                        <td>
                            {italiano && italiano.scritto.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default ItalianTable