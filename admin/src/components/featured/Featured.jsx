import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';


function Featured() {


  const [income, setIncome] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const { data } = await userRequest.get("orders/income")
        setIncome(data)
        setPercentage((data[1].total * 100) / data[0].total - 100)
      } catch (err) {
        console.log(err)
      }
    }
    getIncome();
  }, [])

  console.log(income);

  return (
    <div className="featured">
      <div className="top">
        <span className="top-title">Toplam Gelir</span>
        <MoreVertIcon className='button' />
      </div>
      <div className="bottom">
        <CircularProgressbar className="circle" value={percentage} text={`%${percentage > 99 && "100"}`} strokeWidth={5} />
        <span className="bottom-title">Bugünkü yapılan satış</span>
        <span className="sale-counter">{income[1] && income[1].total} TL</span>
        <span className='bottom-text'>Önceki işlemler hazırlanıyor. Son ödemeleri içermeyebilir.</span>
        <div className="statistics">


          <div className="statistic">
            <span className="statistic-title">Önceki Ay</span>

            
            {percentage < 0 ? (
              <span className="statistic-counter negative">
                %{Math.floor(percentage)}{" "} <KeyboardArrowDownIcon />
              </span>
            ) : <span className="statistic-counter positive">
              %{Math.floor(percentage)}{" "} <KeyboardArrowUpIcon />
            </span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured