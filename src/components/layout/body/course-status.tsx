import React from 'react';
import { Box } from '../../box';
import { EType } from '../../../common/interface';

interface ICourseStatusProps {
  name: string;
  type?: string;
}

export const CourseStatus: React.FC<ICourseStatusProps> = ({ name, type }) => {
  return (
    <Box>
      <Box>{name}</Box>
      {
        type
          ? <Box className={`course-status ${type === EType.EXPERTISE ? 'expertise' : 'training'}`}>
            <Box className={`course-status-circle ${type === EType.EXPERTISE ? 'expertise' : 'training'}`} />
            <Box>{type}</Box>
          </Box>
          : <></>
      }
    </Box>
  )
}
