import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useBlockLayout, useFlexLayout } from 'react-table';

const Table = ({ columns, data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(30); // Измените количество строк в соответствии с вашими требованиями
  const itemCount = data.length;

  const tableData = useMemo(() => data.slice(startIndex, endIndex), [data, startIndex, endIndex]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows
  } = useTable(
    {
      columns,
      data: tableData
    },
    useSortBy,
    useBlockLayout,
    useFlexLayout
  );

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    console.log("scrollTop:", scrollTop);
    console.log("clientHeight:", clientHeight);
    console.log("scrollHeight:", scrollHeight);
  
    if (scrollTop + clientHeight === scrollHeight) {
      console.log("Reached bottom of table");
      setStartIndex(prevIndex => {
        console.log("Previous startIndex:", prevIndex);
        return prevIndex + 20;
      });
      setEndIndex(prevIndex => {
        console.log("Previous endIndex:", prevIndex);
        return Math.min(prevIndex + 40, itemCount);
      });
    }
  };

  return (
    <div style={{ overflowX: 'auto', overflowY: 'auto', height: '600px' }} onScroll={handleScroll}>
      <table {...getTableProps()} style={{ width: '100%', minWidth: '800px' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ display: 'inline-block', width: '100%', minWidth: '400px' }}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    display: 'inline-block',
                    background: column.isSorted ? 'lightblue' : 'lightgray',
                    color: 'black',
                    fontWeight: 'bold',
                    position: 'relative',
                    zIndex: 2,
                    padding: '8px',
                    border: '1px solid black',
                    width: '30%'
                  }}
                >
                  <div {...column.getSortByToggleProps()} style={{ display: 'inline-block', width: '100%' }}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                style={{ display: 'block' }}
              >
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      display: 'inline-block',
                      padding: '8px',
                      border: '1px solid black',
                      background: cell.column.id === columns[0].id ? 'lightyellow' : '#fff223',
                      position: 'relative',
                      width: '30%',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
