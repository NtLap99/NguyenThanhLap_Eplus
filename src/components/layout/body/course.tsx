import { Avatar } from 'antd';
import { EStatus, EType, IUser } from '../../../common/interface';
import courses from '../../../data/courses.json';
import { Table } from '../../table';
import { CourseStatus } from './course-status';
import { Box } from '../../box';

const columns = [
  {
    id: 1,
    title: "Người tạo",
    dataIndex: "user",
    align: "center",
    width: 120,
    fixed: 'left',
    render: (user: IUser) => {
      return <Avatar size={40} src={<img src={`/avatar/${user.avatar}`} alt={`${user.name}`} />} />
    }
  },
  {
    id: 2,
    title: "Tên khoá đào tạo",
    dataIndex: "name",
    width: 450,
    render: (name: string, { type }: { type: EType }) => {
      return <CourseStatus name={name} type={type} />
    }
  },
  {
    id: 3,
    title: "Hình thức đào tạo",
    dataIndex: "method",
    width: 200,
  },
  {
    id: 4,
    title: "Giảng viên",
    dataIndex: "lecturer",
    width: 120,
    align: "center",
    render: (lecturer: IUser) => {
      return <Avatar size={40} src={<img src={`/avatar/${lecturer.avatar}`} alt={`${lecturer.name}`} />} />
    }
  },
  {
    id: 5,
    title: "Từ ngày",
    dataIndex: "fromDate",
    width: 120,
    align: "center"
  },
  {
    id: 6,
    title: "Đến ngày",
    dataIndex: "toDate",
    width: 120,
    align: "center"
  },
  {
    id: 7,
    title: "Trạng thái",
    dataIndex: "status",
    align: "center",
    width: 200,
    render: (status: EStatus) => {
      return <Box className={`status ${status === EStatus.PENDING ? 'pending' : 'complete'}`}>{status}</Box>
    }
  },
  {
    id: 8,
    title: "Số học viên",
    dataIndex: "studentCount",
    width: 120,
    align: "center"
  },
  {
    id: 9,
    title: "Tiền phạt nếu vi phạm cam kết",
    dataIndex: "fine",
    width: 250,
    align: "right"
  },
  {
    id: 10,
    title: "Ngày tạo",
    dataIndex: "createdDate",
    width: 120,
    align: "center"
  }
]

export const Course = () => {
  return (
    <Box>
      <Table columns={columns} data={courses} />
    </Box>
  )
}
