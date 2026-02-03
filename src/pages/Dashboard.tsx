import StatBox from "../components/StatBox";
import hospitalLogo from "../assets/medical-kit_2400690.png";
import courseLogo from "../assets/BookFilled.png";
import traineesLogo from "../assets/BookOutlined.png";
import userLogo from "../assets/UserOutlined.png";
import scheduleLogo from "../assets/gear_10450744.png";
import DashboardBasicInformation from "../components/DashboardBasicInformation";

const enrollmentData = [
  { label: "Advanced Cardiology", value: "+5" },
  { label: "Emergency Medicine", value: "+3" },
  { label: "Pediatric Care", value: "+7" },
];

const courseCompletion = [
  { label: "Basic Surgery", value: "12 completed" },
  { label: "Diagnostic Imaging", value: "9 completed" },
  { label: "Patient Care", value: "15 completed" },
];

const branchPerformance = [
  { label: "Chicago", value: "98% completion" },
  { label: "Austin", value: "93% completion" },
  { label: "Seattle", value: "96% completion" },
];

function Dashboard() {
  return (
    <div className="px-2 bg-gray-50 h-dvh">
      <div>
        <h1>Welcome back, Dr,Sarah Johnson</h1>
        <p>Here's a snapshot of your hospital training network.</p>
      </div>
      <div className="mt-1">
        <p className="">Key Statistics</p>
        <div className="flex gap-4">
          <StatBox
            title="Total Hospital Branches"
            stat={15}
            icon={hospitalLogo}
          />
          <StatBox title="Active Courses" stat={24} icon={courseLogo} />
          <StatBox title="Enrolled Trainees" stat={247} icon={traineesLogo} />
          <StatBox title="Active Trainers" stat={42} icon={userLogo} />
          <StatBox title="Upcoming Sessions" stat={18} icon={scheduleLogo} />
        </div>
      </div>
      <div className="flex gap-10">
        <DashboardBasicInformation
          title="Recent Enrollments"
          data={enrollmentData}
          textStyle="bg-green-100 text-green-800"
        />
        <DashboardBasicInformation
          title="Course Completion"
          data={courseCompletion}
          textStyle="bg-blue-100 text-blue-800"
        />
        <DashboardBasicInformation
          title="Branch Performance"
          data={branchPerformance}
          textStyle="bg-teal-100 text-teal-800"
        />
      </div>
    </div>
  );
}

export default Dashboard;
