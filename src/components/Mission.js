import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissionAction, leaveMissionAction } from '../redux/missions/missions';

const Mission = ({ mission }) => {
  const {
    id,
    name,
    description,
    reserved,
  } = mission;

  const dispatch = useDispatch();
  const handleClick = () => {
    if (reserved) {
      dispatch(leaveMissionAction(id));
    } else {
      dispatch(joinMissionAction(id));
    }
  };

  return (
    <tr key={id}>
      <th className="border fs-5 flex p-2">
        <p>{name}</p>
      </th>
      <td className="border p-2 pb-5">{description}</td>
      <td className="border p-1 align-middle">
        <Badge
          bg={reserved ? 'info' : 'secondary'}
          style={{ minWidth: '120px' }}
          className="p-3"
        >
          {reserved ? 'Active Member' : 'Not A Member'}
        </Badge>
      </td>
      <td className="p-2 border align-middle">
        <Button
          type="button"
          onClick={handleClick}
          variant={!reserved ? 'success' : 'outline-danger'}
          className="p-2 rounded text-center"
          style={{ minWidth: '120px' }}
        >
          {!reserved ? 'Join Mission' : 'Leave Mission'}
        </Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
