import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import InputProduct from "../InputProduct";
import { IndianRupee } from "lucide-react";
import './productModel.css';

function ProducttModal({
    modal,
    toggle,
    refresHandler,
    produc,
    setProduc,
    updatemod,
    intialProduc,
    setUpdatemod,
    previewdata,
    chek
}) {
    console.log(previewdata);
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Product</ModalHeader>
                <ModalBody>
                    {chek === false ? (
                        <InputProduct
                            togle={toggle}
                            refresHandle={refresHandler}
                            product={produc}
                            setProduct={setProduc}
                            updatemode={updatemod}
                            intialProduct={intialProduc}
                            setUpdatemode={setUpdatemod}
                        />
                    ) : (
                        <>
                            {previewdata?.map((e) => {
                                return (
                                    <div>
                                        <div>
                                            <img src={e.thumbnail} alt="" style={{ width: "100%", paddingBottom: "1rem" }} />
                                        </div>
                                        <div className="flex gap-10 justify-content-center  ">
                                            <div style={{ fontFamily: "Fenomen" }}>
                                                <p>Title :-    {e?.title}</p>
                                                <p>Description :- {e.description}</p>
                                            </div>
                                            <div style={{ fontFamily: "Fenomen" }}>
                                                <p>category :- {e.category.map((e) => e).join(" / ")}</p>

                                                <p className="flex items-center "><span className="px-2">Price :- </span><IndianRupee size={15} /> {e.price} </p>
                                                <p>Discount :- {e?.discountPercentage} %</p>
                                            </div>
                                        </div>
                                        <Button className="w-100" style={{ backgroundColor: "#E12627", border: "none", fontFamily: "Fenomen" }}>Order now</Button>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ProducttModal;