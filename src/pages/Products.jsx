import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
        <h1>Product list</h1>
        <ul>
          <li>
            <Link to ="/products/01">Product 1</Link>
          </li>
          <li>
            <Link to ="/products/02">Product 2</Link>
          </li>
          <li>
            <Link to ="/products/03">Product 3</Link>
          </li>
          <li>
            <Link to ="/products/04">Product 4</Link>
          </li>
        </ul>
    </div>
  )
}

export default Products