import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const DataTableStudy = () => {
  const [axiosdata, setData] = useState([]);
  console.log(axiosdata);

  const fetchData = async () => {
    try {
      const countries = await axios.get('https://api.github.com/users/mapbox');
      setData([...axiosdata, countries.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.login,
    },
    {
      name: 'Image',
      selector: (row) => <img width={50} height={50} src={row.avatar_url} />,
    },
  ];

  return (
    <div className="container">
      {axiosdata ? <DataTable columns={columns} data={axiosdata} /> : null}
    </div>
  );
};

export default DataTableStudy;
