import React from 'react'
import { Table } from "react-bootstrap";

const HistoryTable = ({ storia }) => {
  //console.log(subject.orale)
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
              {storia && storia.orale.map((item, index) => (
                <ul key={index}>{item}</ul>
              ))}
            </td>
            <td>
              {storia && storia.scritto.map((item, index) => (
                <ul key={index}>{item}</ul>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </>)
}

export default HistoryTable



