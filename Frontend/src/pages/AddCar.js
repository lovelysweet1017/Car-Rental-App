import { Col, Row, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { addCar } from "../redux/actions/carsAction";
function AddCar() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));

  function onFinish(values) {
    values.bookedTimeSlots = [];

    dispatch(addCar(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      {user.admin ? (
        <Row justify="center mt-4">
          <Col
            lg={12}
            sm={24}
            xs={24}
            className="p-2 mb-3"
            style={{ backgroundColor: "#0d8585" }}
          >
            <Form className="bs1 p-1" layout="vertical" onFinish={onFinish}>
              <h3 style={{ color: "white" }}>Add New Car</h3>
              <hr />
              <Form.Item
                name="name"
                label="Car name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image url"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rentPerHour"
                label="Rent per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fuelType"
                label="Fuel Type"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <button className="btn1">ADD CAR</button>
            </Form>
          </Col>
        </Row>
      ) : (
        <div style={{ height: "50vh" }}>
          <h1
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15rem",
            }}
          >
            Erorr, You are not authorize to view this page.
          </h1>
          <button
            className="btn1"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go back
          </button>
        </div>
      )}
    </DefaultLayout>
  );
}

export default AddCar;
