import './App.css';
import { Box, Card, CardBody, ChakraProvider, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import ProductCard from './components/ProductCard';
import { IProductResponse } from './data/IProductResponse';


function App() {

  const products: IProductResponse[] = [
    {
      Id: "RS123344",
      Code: "R",
      Name: "Test Product",
      Description: "This is a test product. Giving a Detail of information about this product",
      Weight: 123432,
      WeightUom: "kg",
      Label: "This is the label of the product"
    },
    {
      Id: "RS434343",
      Code: "C",
      Name: "Test Product 2",
      Description: "This is a test product 2. Giving a Detail of information about this product",
      Weight: 263656,
      WeightUom: "kg",
      Label: "This is the label of the product"
    },
    {
      Id: "RS594343",
      Code: "R",
      Name: "Test Product 3",
      Description: "This is a test product 3. Giving a Detail of information about this product",
      Weight: 163656,
      WeightUom: "lb",
      Label: "This is the label of the product"
    }
  ];

  return (
    <ChakraProvider>
      { products.map(product => (
        <ProductCard product={product} />        
      ))}
    </ChakraProvider>
  );
}

export default App;
