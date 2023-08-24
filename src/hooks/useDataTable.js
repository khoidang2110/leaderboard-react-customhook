import React, { useEffect, useState } from 'react'

export default function useDataTable({ endPoint, option = {} }) {

  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    async function fetchData() {
      let url = endPoint;
      if (option.limit) {
        url = `${endPoint}?limit=${option.limit}`
      }

      const res = await fetch(url);
      const data = await res.json();
      const newData = data.map(item => ({
        key: item.id,
        ...item
      }))
      setDataSource(newData)
    }
    fetchData();
  }, [endPoint, option.limit])

  return { dataSource }

}
