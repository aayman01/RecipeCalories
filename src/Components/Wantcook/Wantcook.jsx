import PropTypes from "prop-types";
import WantToCookTable from "../WantToCookTable/WantToCookTable";

const Wantcook = ({ wantCook }) => {
  // console.log(wantCook);
  return (
    <div className="border rounded-2xl p-4">
      <h3 className="text-[#282828] text-2xl font-semibold border-b-2 p-2">
        Want to cook: {wantCook.length}
      </h3>
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
          {wantCook.map((cook, index) => (
            <WantToCookTable
              key={wantCook.id}
              cook={cook}
              wantCook={wantCook}
              index={index}
            ></WantToCookTable>
          ))}
        </table>
      </div>
      {/* current cokking section */}
      <h1>Currently cooking: </h1>
      <div className="overflow-x-auto">
        <table className="table text-base font-normal text-[#150B2BB3]">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

Wantcook.propTypes = {
  wantCook: PropTypes.object.isRequired,
};
export default Wantcook;
