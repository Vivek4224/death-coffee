import { Table, Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Eye, Pencil, Search, Trash } from "lucide-react";
import ReactPaginate from "react-paginate";
import "./ProductTable.css";
export default function ProducttTable({
    refresh,
    refresHandler,
    setProduct,
    toggle,
    UpdateHandler,
    Preview,
}) {
    let [data, setData] = useState(null);
    let [paginate, setPeginate] = useState({
        limit: 10,
        page: 1,
        totalProduct: 0,
    });
    let [search, setSearch] = useState("");

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:9999/product/getAllPaginate",
            params: {
                limit: paginate.limit,
                page: paginate.page,
                search,
            },
        }).then((res) => {
            setData(res.data.data);
            setPeginate({ ...paginate, totalProduct: res.data.count });
        });
    }, [refresh]);

    const updateHandler = (e) => {
        toggle();
        setProduct(e);
        UpdateHandler();
    };

    const deletHandler = (e) => {
        axios({
            method: "delete",
            url: `http://localhost:9999/product/delete/${e?._id}`,
            data: data,
        })
            .then((res) => {
                toast.success("delet succesfully");
                if (data.length === 1) {
                    setPeginate({ ...paginate, page: paginate.page - 1 });
                }
                refresHandler();
            })
            .catch((err) => {
                toast.error("somthing wrong");
            });
    };

    const searchHandler = (e) => {
        setSearch(e?.target?.value);
        refresHandler();
    };
    const handlePageClick = (e) => {
        setPeginate({ ...paginate, page: e?.selected + 1 });
        refresHandler();
    };

    return (
        <div style={{ backgroundColor: "black", paddingTop: "4rem" }}>
            <div
                style={{
                    padding: "1rem",
                    textAlign: "center",
                    fontFamily: "ravana",
                    color: "white",
                    borderTop: "2px solid #E12627",
                    borderBottom: "2px solid #E12627",
                }}
            >
                <h1>Product Table </h1>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    width: "100%",
                }}
            >
                <div style={{ width: "100%" }}>
                    <input
                        placeholder="Search Here...."
                        onChange={(e) => searchHandler(e)}
                        style={{ position: "relative", width: "100%", height: "2.5rem" }}
                    />
                    <Search
                        style={{
                            position: "absolute",
                            width: "3rem",
                            height: "2rem",
                            left: "37rem",
                            alignSelf: "center",
                            color: "#E12627",
                            cursor: "pointer",
                        }}
                    />
                </div>
                <div style={{ width: "100%", textAlign: "end" }}>
                    <Button
                        color="danger"
                        onClick={toggle}
                        style={{ fontFamily: "Fenomen", backgroundColor: "#E12627" }}
                    >
                        ADD NEW PRODUCT
                    </Button>
                </div>
            </div>
            <Table
                style={{
                    width: "90%",
                    textAlign: "center",
                    color: "white",
                    border: "2px solid #E12627",
                    margin: "auto",
                    fontFamily: "Fenomen",
                    fontSize: "1.1rem",
                }}
            >
                <thead>
                    <tr>
                        {["Sr.", "Image", "Name", "Price", "Action"].map((e, i) => {
                            return <th key={i}>{e}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data?.map?.((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                    <img
                                        style={{ height: "80px" }}
                                        src={e?.thumbnail}
                                        alt="ajkkj"
                                    />
                                </td>
                                <td style={{ textAlign: "start" }}>{e?.title}</td>
                                <td>₹{e?.price}</td>

                                <td>
                                    <div className="d-flex gap-4 justify-content-center">
                                        <Eye role="button" onClick={() => Preview(e)} />
                                        <Pencil role="button" onClick={() => updateHandler(e)} />
                                        <Trash
                                            role="button"
                                            color="#E12627"
                                            onClick={() => deletHandler(e)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <hr />

            <ReactPaginate
                className=" d-flex gap-3 justify-content-center text-light mb-0 pb-4 paginate"
                breakLabel="....."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={paginate.totalProduct / paginate.limit}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}
