import './table.scss'
import TableMui from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TimeAgo from 'react-timeago'
import turkishStrings from 'react-timeago/lib/language-strings/tr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import { useEffect, useState } from "react";
import { userRequest } from '../../requestMethods'

function Table() {
    const formatter = buildFormatter(turkishStrings)

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const { data } = await userRequest.get("orders");

                setOrders(data)

            } catch (error) {
                console.log(error)
            }
        }
        getOrders();
    }, [])


    return (
        <TableContainer component={Paper} className="table">
            <TableMui sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table-cell">Müşteri</TableCell>
                        <TableCell className="table-cell">Tarih</TableCell>
                        <TableCell className="table-cell">Tutar</TableCell>
                        <TableCell className="table-cell">Durum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.reverse().map((order) => (
                        <TableRow key={order.id} >

                            <TableCell className="table-cell">{order.userId}</TableCell>
                            <TableCell className="table-cell"><TimeAgo date={(order.createdAt)} formatter={formatter} /></TableCell>
                            <TableCell className="table-cell">{order.amount} TL</TableCell>
                            <TableCell className="table-cell">
                                <span className={`status ${order.status}`}>
                                    {order.status === "pending" && "Hazırlanıyor"}
                                    {order.status === "approved" && "Teslim Edildi"}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableMui>
        </TableContainer>
    )
}

export default Table