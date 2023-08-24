import useDataTable from '../hooks/useDataTable';
import TableSimple from '../components/TableSimple';
import Image from 'react-bootstrap/Image'

const tableHeader = [
  'Image',
  'Title',
  'Category'
]

function User() {

  const { dataSource } = useDataTable({
    endPoint: 'https://fakestoreapi.com/products',
    option: {
      limit: 5
    }
  })

  return (
    <TableSimple
      tableHeader={tableHeader}
      dataSource={dataSource}
      renderTableRow={(row) => {
        return (
          <tr key={row.id}>
            <td>
              <Image style={{width: '100px', height: '100px'}} src={row.image} rounded />
            </td>
            <td>{row.title}</td>
            <td>{row.category}</td>
          </tr>
        )
      }}
    />
  );
}

export default User;