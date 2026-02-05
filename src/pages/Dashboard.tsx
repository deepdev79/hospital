import StatBox from "../components/StatBox";
import DashboardBasicInformation from "../components/DashboardBasicInformation";
import Notifications from "../components/Notifications";
import QuickAction from "../components/QuickAction";

//icons

import Bell from "../assets/Bell.svg?react";
import HospitalLogo from "../assets/hospital.svg?react";
import CourseLogo from "../assets/BookFilled.svg?react";
import TraineesLogo from "../assets/BookOutlined.svg?react";
import UserLogo from "../assets/UserOutlined.svg?react";
import ScheduleLogo from "../assets/schedule.svg?react";
import Plus from "../assets/Plus.svg?react";

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
    Icon: CourseLogo,
    time: "2 hours ago",
  },
  {
    notification: "New trainee added to 'Chicago Branch'",
    Icon: Plus,
    time: "4 hours ago",
  },
  {
    notification: "Training session 'Emergency Medicine' completed",
    Icon: Plus,
    time: "6 hours ago",
  },
  {
    notification: "Trainer Dr. Ahmed assigned to 'Pediatric Care'",
    Icon: UserLogo,
    time: "1 day ago",
  },
  {
    notification: "Branch 'Austin Medical Center' updated capacity",
    Icon: ScheduleLogo,
    time: "2 days ago",
  },
];

const quickActions = [
  {
    label: "Add New Branch",
    description: "Register a new hospital branch",
    Icon: HospitalLogo,
  },
  { label: "Add New Course", description: "Add new course", Icon: CourseLogo },
  {
    label: "Schedule Training session",
    description: "Setup new training center",
    Icon: ScheduleLogo,
  },
];

function Dashboard() {
  return (
    <div className="px-2 bg-gray-50 h-dvh">
      <div className="bg-linear-to-r from-teal-500 to-blue-600 rounded-2xl p-6 mb-6">
        <h1 className="text-white text-2xl font-semibold">
          Welcome back, Dr,Sarah Johnson
        </h1>
        <p className="text-white text-sm mt-1">
          Here's a snapshot of your hospital training network.
        </p>
      </div>
      <div className="mt-1 mb-6">
        <h2 className="text-lg font-semibold mb-4">Key Statistics</h2>
        <div className="grid grid-cols-5 gap-4">
          <StatBox
            title="Total Hospital Branches"
            stat={15}
            Icon={HospitalLogo}
            iconbg="bg-blue-500"
          />
          <StatBox
            title="Active Courses"
            stat={24}
            Icon={CourseLogo}
            iconbg="bg-green-500"
          />
          <StatBox
            title="Enrolled Trainees"
            stat={247}
            Icon={TraineesLogo}
            iconbg="bg-purple-500"
          />
          <StatBox
            title="Active Trainers"
            stat={42}
            Icon={UserLogo}
            iconbg="bg-teal-500"
          />
          <StatBox
            title="Upcoming Sessions"
            stat={18}
            Icon={ScheduleLogo}
            iconbg="bg-orange-500"
          />
        </div>
      </div>
      {/* Notifications and Quick Actions */}
      <div className="grid grid-cols-3 gap-6 mt-5">
        <div className="col-span-2 border rounded-2xl border-borderOutline p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              <p className="font-semibold">Recent Notifications</p>
            </div>
            <p className="bg-teal-100 text-teal-800 font-semibold p-1 rounded-xl text-sm">
              5 New
            </p>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            <Notifications data={notifications} />
          </div>
          <div className="flex justify-center pt-2">
            <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              View All Notifications
            </button>
          </div>
        </div>
        <div className="col-span-1 border rounded-2xl border-borderOutline bg-white p-5">
          <p className="font-semibold mb-4">Quick Actions</p>
          <div className="flex flex-col gap-3">
            <QuickAction data={quickActions} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
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
