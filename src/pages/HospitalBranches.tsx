import hospitalLogo from "../assets/hospital.svg?react";
import locationLogo from "../assets/LocationOutline.svg?react";
import userLogo from "../assets/UserOutlined.svg?react";
import StatBox from "../components/StatBox";

const hBranches = [
  {
    title: "Total Branches",
    stat: 4,
    subPara: "Across 3 cities",
    subParaBg: "text-green-600",
    Icon: hospitalLogo,
    iconLines: "fill-green-500",
  },
  {
    title: "Total Trainees",
    stat: 143,
    Icon: userLogo,
    iconLines: "fill-blue-700",
    subPara: "Active enrollment",
    subParaBg: "text-blue-600",
  },
  {
    title: "Average capacity",
    stat: 39,
    Icon: locationLogo,
    iconLines: "fill-orange-700",
    subPara: "Per branch",
    subParaBg: "text-orange-600",
  },
  {
    title: "Active branches",
    stat: 3,
    Icon: hospitalLogo,
    iconLines: "fill-green-300",
    subPara: "Operational",
    subParaBg: "text-green-600",
  },
];

function HospitalBranches() {
  return (
    <div>
      <div>
        <div>
          <h1>Hospotal Branches</h1>
          <p>
            Manage multiple hospital locations under the consultancy network
          </p>
        </div>
        <div>
          <button>Add new Branch</button>
        </div>
      </div>
      <StatBox data={hBranches} />
    </div>
  );
}

export default HospitalBranches;
