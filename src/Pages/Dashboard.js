import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import ActivitiesCard from "../Components/ActivitiesCard";
import Header from "../Components/Header";
import Schedule from "../Components/Schedule";
import TopProduct from "../Components/TopProduct";

// import "../CSS/dashboard.css";

const Dashboard = ({ user, setUser }) => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <Header />
          <Card />
          <ActivitiesCard />
          <div className="grid-container">
            <div className="grid-item">
              <TopProduct />
            </div>
            <div className="grid-item">
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
