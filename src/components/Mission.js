import React from 'react';

const Mission = () => {
  const missions = [{ id: '1', description: 'description', reserved: false }];
  return (
    <>
      {
        missions.map((msn) => (
          <tr
            key={msn.id}
            className={((missions.indexOf(msn) + 1) % 2 === 0 ? 'bg-light' : '')}
          >
            <th className="border fs-5 flex p-2">
              <p>{msn.name}</p>
            </th>
            <td className="border p-2 pb-5">{msn.description}</td>
            <td className="border p-1">
              {msn.reserved
                ? (
                  <p
                    className="text-info text-center bg-info text-white border rounded"
                    style={{ minWidth: '120px' }}
                  >
                    ACTIVE MEMBER
                  </p>
                ) : (
                  <p
                    className="border rounded text-danger text-center bg-secondary text-white"
                    style={{ minWidth: '120px' }}
                  >
                    NOT A MEMBER
                  </p>
                )}
            </td>
            <td className="p-2 border">
              {!msn.reserved
                ? (
                  <button
                    type="button"
                    className="py-2 border-success rounded text-center"
                    style={{ minWidth: '100px' }}
                  >
                    Join Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="py-2 border border-danger rounded text-danger text-center"
                    style={{ minWidth: '100px' }}
                  >
                    Leave Mission
                  </button>
                )}
            </td>
          </tr>
        ))
      }
    </>
  );
};

export default Mission;
