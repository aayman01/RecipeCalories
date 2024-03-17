import PropTypes from "prop-types";

const CurrentCokking = ({ cook, index }) => {
    console.log(cook)
    
  return (
    <>
      <tbody>
        <tr className=" text-sm">
          <th>{index + 1}</th>
          <td>{cook.recipe_name}</td>
          <td>{cook.preparing_time} minutes</td>
          <td>{cook.calories} calories</td>
        </tr>
      </tbody>
      {/* <div className="flex justify-end gap-2 text-[#150B2BCC] text-sm">
        <p>Total time = {} minutes</p>
        <p>Total Calories = {} calories</p>
      </div> */}
    </>
  );
};

CurrentCokking.propTypes = {
  cook: PropTypes.object.isRequired,
  index: PropTypes.any,
};

export default CurrentCokking;
