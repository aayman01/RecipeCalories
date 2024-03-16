import PropTypes from "prop-types";
import WantToCookTable from "../WantToCookTable/WantToCookTable";

const Wantcook = ({ wantCook }) => {
    // console.log(wantCook)
  return (
    <>
      <h3>Want to cook: {wantCook.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          {wantCook.map((cook) => (
            <WantToCookTable key={wantCook.id} cook={cook}></WantToCookTable>
          ))}
        </table>
      </div>
    </>
  );
};

Wantcook.propTypes = {
  wantCook: PropTypes.array.isRequired,
};
export default Wantcook;
