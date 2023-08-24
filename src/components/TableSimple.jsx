import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableSimple({ tableHeader, dataSource, renderTableRow }) {
  
  console.log(typeof renderTableRow)
  console.log(dataSource)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableHeader.map((header) => (
            // eslint-disable-next-line react/jsx-key
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {dataSource.map(renderTableRow)}
      </tbody>
    </Table>
  )
}
