import React, { useState } from "react";
import ProducttModal from "./productModel/ProductModal";
import ProducttTable from "./productTable/ProductTable";
const intialProduct = {
    title: "",
    description: "",
    brand: "",
    price: "",
    discountPercentage: "",
    availableStock: "",
    category: [],
    thumbnail: "",
};

export default function Product() {
    const [modal, setModal] = useState(false);
    let [product, setProduct] = useState(intialProduct);
    let [updatemode, setUpdatemode] = useState(false);
    let [refresh, setRefresh] = useState(true);
    let [previewdata, setPreviewData] = useState([]);
    let [chek, setCheck] = useState(false);

    const toggle = () => {
        setModal(!modal);
        setProduct(intialProduct);
        setUpdatemode(false);
        setCheck(false);
    };

    const refresHandler = () => {
        setRefresh(!refresh);
    };

    const UpdateHandler = () => {
        setUpdatemode(true);
    };

    const Preview = (e) => {
        setPreviewData([e]);
        toggle();
        setCheck(true);
    };
    return (
        <>
            <div className="d-flex gap-2 justify-content-end" style={{ paddingTop: "6rem" }}>
            </div>
            <ProducttModal
                modal={modal}
                toggle={toggle}
                refresHandler={refresHandler}
                produc={product}
                updatemod={updatemode}
                setProduc={setProduct}
                intialProduc={intialProduct}
                setUpdatemod={setUpdatemode}
                previewdata={previewdata}
                chek={chek}
            />
            <ProducttTable
                refresh={refresh}
                refresHandler={refresHandler}
                setProduct={setProduct}
                toggle={toggle}
                UpdateHandler={UpdateHandler}
                Preview={Preview}
            />
        </>
    );
}