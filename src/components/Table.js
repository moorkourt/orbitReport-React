const Table = ({ sat }) => {
  return (
    <div>
      <table>
        {/* header */}
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        {sat.map((data, id ) => {
          return (
        <tr>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>"Active"</td>
        </tr>
          );
})};
      </table>
    </div>
  );
};

export default Table;