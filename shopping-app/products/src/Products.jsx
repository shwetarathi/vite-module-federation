import { faker } from "@faker-js/faker";

const Products = () => {
  
  const renderProducts = () => {
    const products = [];
    for (let i = 0; i < 10; i++) {
      products.push(<p key={i}>{faker.commerce.product()}</p>);
    }
    return products;
  };

  return <div>{renderProducts()}</div>;
};

export default Products;
