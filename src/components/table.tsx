import type { TableColumnsType, TableProps } from 'antd';
import { Table as _Table } from 'antd';
import React from 'react';
import { ICourse } from '../common/interface';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface ITableProps {
  data: ICourse[];
  columns: TableColumnsType;
}

export const Table: React.FC<ITableProps> = ({ data, columns }) => {
  const rowSelection: TableRowSelection = {
    type: 'checkbox',
  };

  const dataSource = React.useMemo(() => {
    return data.map(d => ({
      ...d,
      key: d.id,
    }))
  }, [data])

  // eslint-disable-next-line react/jsx-pascal-case
  return <_Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />;
};
