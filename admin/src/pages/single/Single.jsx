import "./single.scss"

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Table from "../../components/table/Table"
import Chart from "../../components/chart/Chart"

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">

          <div className="left">

            <span className="title">Bilgi</span>
            <div className="item-details">
              <div className="item-image">
                <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
              </div>
              <div className="item-info">
                <span className="item-title">Ali Karagöz</span>
                <div className="item">
                  <span className="item-key">Email:</span>
                  <span className="item-value"> ali.blackeye@hotmail.com</span>
                </div>
                <div className="item">
                  <span className="item-key">Telefon:</span>
                  <span className="item-value"> +90 552 648 37 36</span>
                </div>
                <div className="item">
                  <span className="item-key">Adres:</span>
                  <span className="item-value"> Mehmet Akif Mah. Osmangazi Cad. No 53 Daire 14 İstanbul/Ümraniye</span>
                </div>
                <div className="item">
                  <span className="item-key">Ülke:</span>
                  <span className="item-value"> TR</span>
                </div>
              </div>

            </div>
            <button className="edit-button">Edit</button>

          </div>
          <div className="right">
            <Chart aspect={5 / 1} chartTitle="Kullanıcı Harcamaları (Son 6 Ay)" />
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-table">
            <h1 className="bottom-title">Son İşlemler</h1>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single