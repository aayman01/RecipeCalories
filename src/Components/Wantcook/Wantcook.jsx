import PropTypes from "prop-types";
import WantToCookTable from "../WantToCookTable/WantToCookTable";
import CurrentCokking from "../CurrentCokking/CurrentCokking";

const Wantcook = ({ wantCook, handlePreparing, addCook }) => {
  // console.log(wantCook);

  // console.log(wantCook.id);
  return (
    <div className="border rounded-2xl p-4">
      <h3 className="text-[#282828] text-2xl font-semibold border-b-2 p-2">
        Want to cook: {wantCook.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table text-[#150B2BB3]">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          {wantCook.map((cook, index) => (
            <WantToCookTable
              key={index}
              cook={cook}
              index={index}
              handlePreparing={handlePreparing}
            ></WantToCookTable>
          ))}
        </table>
      </div>
      {/* current cokking section */}
      <h1 className="text-[#282828] text-2xl font-semibold border-b-2 p-2">
        Currently cooking:{addCook.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table text-[#150B2BB3]">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          {addCook.map((cook, index) => (
            <CurrentCokking
              key={index}
              cook={cook}
              index={index}
            ></CurrentCokking>
          ))}
        </table>
      </div>
      <div className="flex justify-end gap-2 text-[#150B2BCC] text-sm p-2">
        <p>Total time = </p>
        <p>Total Calories = </p>
      </div>
    </div>
  );
};

Wantcook.propTypes = {
  wantCook: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
  addCook: PropTypes.array.isRequired,
};
export default Wantcook;
