import React, { useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { BsSearch } from 'react-icons/bs';
import './Datatable.css';

const DataTable = ({ data, columns }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter);

  const { globalFilter } = state;

  return (
    <div className="table-container">
      <div className="search-container">
        <div className="relative">
          <input
            type="text"
            className="rounded-lg border focus:outline-none focus:border-blue-500"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
          <div className="search-icon">
            <BsSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <table {...getTableProps()} className="border">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="p-3">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="p-3">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
