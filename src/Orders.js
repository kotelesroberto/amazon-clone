import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // only if user is exist, protection
      db.collection("users") //reach into database collection of users
        .doc(user?.uid) // choose this user, document of this user id
        .collection("orders") // choose their orders
        .orderBy("created", "desc") // latest first
        .onSnapshot((snapshot) => {
          // because from above we have all of orders with having documents, we can map them
          // realtime snapshot of database
          console.log("snapshot >>>", snapshot.docs);

          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log("user >>>", user);
  console.log("orders >>>", orders);

  return (
    <div className="orders">
      <h2 className="orders__title">Your orders</h2>
      <div className="orders__order">
        {!user && (
          <p className="order__warning">
            Please <Link to="/login">login</Link> to see your orders
          </p>
        )}
        {orders?.map((order) => (
          <Order order={order} key={order.data.created} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
