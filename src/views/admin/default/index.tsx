import Widget from "components/widget/Widget";
import { getOverview } from "layouts/admin/redux/HomeRedux";
import { useEffect } from "react";
import {
  MdApps,
  MdBarChart,
  MdCategory
} from "react-icons/md";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieChartCard from "views/admin/default/components/PieChartCard";
import TotalSpent from "views/admin/default/components/TotalSpent";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import General from "../profile/components/General";
import ProfileNavBar from "./components/ProfileNavBar";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error, overview } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(getOverview());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!overview) return null;

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-6 gap-5">
        <Widget
          icon={<MdCategory className="h-7 w-7" />}
          title={"Categories"}
          subtitle={`${overview.totalCategories} groups`}
          path="categories"
        />
        <Widget
          icon={<MdApps className="h-6 w-6" />}
          title={"Products"}
          subtitle={`${overview.totalProducts} items`}
          path="profile"
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Sales"}
          subtitle={`$${overview.totalSales}`}
          path="nft-marketplace"
        />

        <ProfileNavBar />

        {/* <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
          path="profile"
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
          path="nft-marketplace"
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
          path="nft-marketplace"
        /> */}
      </div>

      {/* Charts */}

      <div className="mb-5 mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="h-full">
          <TotalSpent
            data={overview.monthlyProfit.map((item) => item.profit)}
            categories={overview.monthlyProfit.map((item) => item.month)}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic
            data={overview.dailyProfit.map((item) => item.total)}
            categories={overview.dailyProfit.map((item) => item.date)}
          />
          <PieChartCard
            data={overview.topCategories.map((item) => item.total)}
            categories={overview.topCategories.map((item) => item.category)}
          />
        </div>
      </div>
      <General />
    </div>
  );
};

export default Dashboard;
