export const userColumns = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "fullName",
    headerName: "Kullanıcı",
    width: 230,
    renderCell: (params) => {
      return <div className="cell-with-img">{params.row.fullName}</div>;
    },
  },
  { field: "email", headerName: "E-Posta", width: 300 },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "product",
    headerName: "Ürün",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cell-with-img">
          <img src={params.row.img} className="cell-img" alt="" />
          {params.row.title}
        </div>
      );
    },
  },
  { field: "inStock", headerName: "Stok", width: 100 },
  { field: "color", headerName: "Renk", width: 200 },
  { field: "price", headerName: "Fiyat", width: 150 },
];
