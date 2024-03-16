import PropTypes from "prop-types";

const WantToCookTable = ({ cook }) => {
    console.log(cook)
  return (
   
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
      </tbody>
   
  );
};

WantToCookTable.propTypes = {
  cook: PropTypes.object.isRequired,
};
export default WantToCookTable;
