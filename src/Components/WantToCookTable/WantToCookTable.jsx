import PropTypes from "prop-types";

const WantToCookTable = ({ cook, index, handlePreparing }) => {
  // console.log(wantCook);

  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{cook.recipe_name}</td>
        <td>{cook.preparing_time}</td>
        <td>{cook.calories}</td>
        <td>
          <button
            onClick={() => handlePreparing(cook.id)}
            className="btn btn-xs rounded-3xl bg-[#0BE58A]"
          >
            Preparing
          </button>
        </td>
      </tr>
    </tbody>
  );
};

WantToCookTable.propTypes = {
  cook: PropTypes.object.isRequired,
  wantCook: PropTypes.array.isRequired,
  index: PropTypes.any,
  handlePreparing: PropTypes.func
};
export default WantToCookTable;
