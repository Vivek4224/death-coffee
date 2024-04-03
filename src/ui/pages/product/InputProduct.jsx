import axios from "axios";
import React from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";

const categoryOptions = [
    { value: "dark", label: "dark" },
    { value: "light", label: "light" },
];

export default function Product({
    togle,
    refresHandle,
    product,
    setProduct,
    updatemode,
    intialProduct,
    setUpdatemode,
}) {
    // data post----->
    const dataTransfer = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:9999/product/create",
            data: product,
        })
            .then((res) => {
                refresHandle();
                togle();
                setProduct(intialProduct);
                toast.success("Done");
            })
            .catch((err) => {
                toast.error("Somthing wrong");
            });
    };
    // <---------

    const updateHandler = () => {
        axios({
            method: "put",
            url: `http://localhost:9999/product/update/${product._id}`,
            data: product,
        })
            .then((res) => {
                setProduct(intialProduct);
                refresHandle();
                togle();
                setUpdatemode(false);
                toast.success("update Done");
            })
            .catch((err) => {
                toast.error("not found");
            });
    };
    return (
        <div>
            <Form onSubmit={(e) => submitHandler(e)}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        id="title"
                        placeholder="Enter Title"
                        type="text"
                        value={product?.title}
                        onChange={(e) =>
                            setProduct({ ...product, title: e?.target?.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        id="description"
                        placeholder="Enter description"
                        type="text"
                        value={product?.description}
                        onChange={(e) =>
                            setProduct({ ...product, description: e?.target?.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="brand">Brand</Label>
                    <Input
                        id="brand"
                        placeholder="Enter brand"
                        type="text"
                        value={product?.brand}
                        onChange={(e) =>
                            setProduct({ ...product, brand: e?.target?.value })
                        }
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="category">Category</Label>
                    <Select
                        id="category"
                        isMulti
                        options={categoryOptions}
                        value={product.category?.map((ele) => {
                            return { value: ele, label: ele };
                        })}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                category: e.map((ele) => ele.value),
                            })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                        id="price"
                        placeholder="Enter price"
                        type="number"
                        value={product?.price}
                        onChange={(e) =>
                            setProduct({ ...product, price: e?.target?.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="discountPercentage">Discount</Label>
                    <Input
                        id="discountPercentage"
                        placeholder="Enter brand"
                        type="number"
                        value={product?.discountPercentage}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                discountPercentage: e?.target?.value,
                            })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Thumbnail</Label>
                    <Input
                        type="text"
                        value={product.thumbnail}
                        onChange={(e) =>
                            setProduct({ ...product, thumbnail: e.target.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="availableStock">Available Stock</Label>
                    <Input
                        id="availableStock"
                        placeholder="Enter brand"
                        type="number"
                        value={product?.availableStock}
                        onChange={(e) =>
                            setProduct({ ...product, availableStock: e?.target?.value })
                        }
                    />
                </FormGroup>
                {updatemode ? (
                    <Button style={{ backgroundColor: "#E12627", border: "none", fontFamily: "Fenomen" }} className="w-100" onClick={updateHandler}>
                        Update
                    </Button>
                ) : (
                    <Button
                        className="w-100"
                        onClick={(e) => dataTransfer(e)}
                        style={{ backgroundColor: "#E12627", border: "none", fontFamily: "Fenomen" }}
                    >
                        Submit
                    </Button>
                )}
            </Form>
        </div>
    );
}