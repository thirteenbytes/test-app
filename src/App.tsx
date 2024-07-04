import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { IProductResponse } from './data/IProductResponse';
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import SortableItem from './components/SortableItem';



function App() {

  const productSamples: IProductResponse[] = [
    {
      Id: "1",
      Code: "R",
      Name: "Test Product",
      Description: "This is a test product. Giving a Detail of information about this product",
      Weight: 123432,
      WeightUom: "kg",
      Label: "This is the label of the product",
      IsActive: true
    },
    {
      Id: "2",
      Code: "C",
      Name: "Test Product 2",
      Description: "This is a test product 2. Giving a Detail of information about this product",
      Weight: 263656,
      WeightUom: "kg",
      Label: "This is the label of the product",
      IsActive: false
    },
    {
      Id: "3",
      Code: "R",
      Name: "Test Product 3",
      Description: "This is a test product 3. Giving a Detail of information about this product",
      Weight: 163656,
      WeightUom: "lb",
      Label: "This is the label of the product",
      IsActive: false
    },
    {
      Id: "4",
      Code: "P",
      Name: "Test Product 4",
      Description: "This is a test product 4. Giving a Detail of information about this product",
      Weight: 313256,
      WeightUom: "kg",
      Label: "This is the label of the product",
      IsActive: false
    },
    {
      Id: "5",
      Code: "R",
      Name: "Test Product 5",
      Description: "This is a test product 5. Giving a Detail of information about this product",
      Weight: 766762,
      WeightUom: "lb",
      Label: "This is the label of the product",
      IsActive: false
    }

  ];

  const [products, setProducts] = useState<IProductResponse[]>(productSamples);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    const activeProduct = products.find((product) => product.Id == active.id);

    console.log(activeProduct?.Name);
    
    if (active.id !== over.id) {
      const oldIndex = products.findIndex((product) => product.Id === active.id);
      const newIndex = products.findIndex((product) => product.Id === over.id);
      const newProducts = arrayMove(products, oldIndex, newIndex);
      setProducts(newProducts.map((product, index) => ({ ...product, position: index + 1 })));
      
      console.log("activeId: " + active.id + " over: " + over.id);
    }
  };

  return (
    <ChakraProvider>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={products.map(product => product.Id)} strategy={verticalListSortingStrategy}>
          <div>
            {products.map((product) => (
              <SortableItem key={product.Id} product={product} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </ChakraProvider>
  );
}

export default App;
