import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';

import { productColumns, userColumns } from '../../datatablesource'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods'
import { deleteProduct } from '../../redux/apiCalls';

import {useDispatch} from 'react-redux'

function Datatable({ data, type }) {



    const [usersData, setUsersData] = useState("")
    const [listData, setListData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const users = await userRequest.get("users/?new=true");
                const temp = users.data.map((user) => (
                    { id: user._id, fullName: user.fullName, email: user.email }
                ))

                setListData(temp)

            } catch (error) {
                console.log(error)
            }
        }

        const getProducts = async () => {
            const products = data
            console.log(products)
            const temp = products.map((product) => (
                { id: product._id, img: product.img, title: product.title, desc:product.desc, price: product.price + " TL",inStock:product.inStock,color: product.color}
            ))
            setListData(temp)
        }

        if (type === "products") {
            getProducts();
        }

        else if (type === "users") {
            getUsers();
        }
    }, [type, data])


    const handleDelete = (id) => {
        if(type==="users"){
        setUsersData(usersData.filter(item => item.id !== id))
        }

        else if (type === "products"){
            deleteProduct(id,dispatch)
        }
    }

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <div className="cell-action">
                        <div className='button view-button'>Düzenle</div>
                        <div className='button delete-button' onClick={() => handleDelete(params.row.id)}>Kaldır</div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="datatable">
            <div className="datatable-title">

                <Link to="/users/new" className='link'>Yeni Kullanıcı Ekle</Link>
                <Link to="/products/new" className='link'>Yeni Ürün Ekle</Link>
            </div>
            <DataGrid
                className='data-grid'
                rows={listData}
                columns={type === "products" ? productColumns.concat(actionColumn) : userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable