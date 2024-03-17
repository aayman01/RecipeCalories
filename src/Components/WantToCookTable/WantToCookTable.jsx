import PropTypes from "prop-types";

const WantToCookTable = ({ cook, index, handlePreparing }) => {
  console.log(cook);

  return (
    <tbody className="">
      <tr className="text-sm">
        <th>{index + 1}</th>
        <td>{cook.recipe_name}</td>
        <td>{cook.preparing_time} minutes</td>
        <td>{cook.calories} calories</td>
        <td>
          <button
            onClick={() => handlePreparing(cook.id, cook)}
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
  index: PropTypes.any,
  handlePreparing: PropTypes.func
};
export default WantToCookTable;
