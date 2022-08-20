import "./home.scss"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../../requestMethods'

function Home() {


  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ], []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const { data } = await userRequest.get("/users/stats")
        data.map(item =>
          setUserStats(prev => [
            ...prev,
            { name: MONTHS[item._id - 1], "Aktif Kullanıcı:": item.total }
          ])
        )
      } catch (error) {
        console.log(error)
      }
    }
    getStats()

  }, [MONTHS])


  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart data={userStats} aspect={2 / 1} chartTitle="Aylara Göre Satış Sayısı" />
        </div>
        <div className="list-container">
          <div className="list-title">Son İşlemler</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home