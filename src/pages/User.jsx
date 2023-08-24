import useDataTable from '../hooks/useDataTable';
import TableSimple from '../components/TableSimple';
import { Table } from 'react-bootstrap'

const tableHeader = [
  'Username',
  'Email',
  'Street',
  'City'
]

function User() {

  const { dataSource } = useDataTable({
    endPoint: 'https://fakestoreapi.com/users',
    option: {
      limit: 5
    }
  })

  console.log('DS in user',dataSource)

  return (
    <TableSimple
      tableHeader={tableHeader}
      dataSource={dataSource}
      renderTableRow={(row) => {
        return (
          <tr key={row.id}>
            <td>{row.username}</td>
            <td>{row.email}</td>
            <td>{row.address.street}</td>
            <td>{row.address.city}</td>
          </tr>
        )
      }}
    />
  );
}

export default User;