import StatBox from "../components/StatBox";
import DashboardBasicInformation from "../components/DashboardBasicInformation";

//icons

import bell from "../assets/Bell.svg";
import hospitalLogo from "../assets/medical-kit_2400690.png";
import courseLogo from "../assets/BookFilled.png";
import traineesLogo from "../assets/BookOutlined.png";
import userLogo from "../assets/UserOutlined.png";
import scheduleLogo from "../assets/gear_10450744.png";
import plus from "../assets/Plus.svg";
import Notifications from "../components/Notifications";
import QuickAction from "../components/QuickAction";

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

const notifications = [
  {
    notification: "Course 'Advanced Cardiology' starts in 2 days",
    icon: courseLogo,
    time: "2 hours ago",
  },
  {
    notification: "New trainee added to 'Chicago Branch'",
    icon: plus,
    time: "4 hours ago",
  },
  {
    notification: "Training session 'Emergency Medicine' completed",
    icon: plus,
    time: "6 hours ago",
  },
  {
    notification: "Trainer Dr. Ahmed assigned to 'Pediatric Care'",
    icon: userLogo,
    time: "1 day ago",
  },
  {
    notification: "Branch 'Austin Medical Center' updated capacity",
    icon: scheduleLogo,
    time: "2 days ago",
  },
];

const quickActions = [
  {
    label: "Add New Branch",
    description: "Register a new hospital branch",
    icon: hospitalLogo,
  },
  { label: "Add New Course", description: "Add new course", icon: courseLogo },
  {
    label: "Schedule Training session",
    description: "Setup new training center",
    icon: scheduleLogo,
  },
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
      <div className="flex gap-1.5 mt-5">
        <div className="border rounded-2xl border-borderOutline p-5">
          <div className="flex justify-between">
            <div className="flex">
              <img src={bell} alt="" />
              <p>Recent Notifications</p>
            </div>
            <p className="bg-teal-100 text-teal-800 font-semibold p-1 rounded-xl text-sm">
              5 New
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Notifications data={notifications} />
          </div>
        </div>
        <div className="border rounded-2xl border-borderOutline p-4">
          <p>Quick Actions</p>
          <div className="flex flex-col gap-2">
            <QuickAction data={quickActions} />
          </div>
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
