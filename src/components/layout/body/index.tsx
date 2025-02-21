import { Table } from '../../table'
import columnHeaders from '../../../data/headers.json';
import courses from '../../../data/courses.json';

export const Body = () => {
  return (
    <div>
      <Table columns={columnHeaders} data={courses} />
    </div>
  )
}
