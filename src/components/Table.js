const Table = ({ state, dispatch }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {state.members?.map((contributor) => {
          return (
            <tr key={contributor.id}>
              <td>{contributor.name}</td>
              <td>{contributor.role}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_MEMBER",
                      payload: { member: contributor },
                    })
                  }
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
