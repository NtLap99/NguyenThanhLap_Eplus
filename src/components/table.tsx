import type { TableProps } from 'antd';
import { Table as _Table } from 'antd';
import React from 'react';
import { ICourse } from '../common/interface';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface ITableProps {
  data: ICourse[];
  columns: any;
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
  return <_Table scroll={{ x: 1500, y: 700 }} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={dataSource} />;
};
