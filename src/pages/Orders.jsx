const Orders = () => {
  return (
    <div>
        <h1>Your Orders</h1>
        <input type="text" className="searchOrders" placeholder="Search all orders"/>
        <p>Looks like you haven't placed an order in the last 3 months</p>
    </div>
  )
}

export default Orders