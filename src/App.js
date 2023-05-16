import { Routes, Route }   from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from './common/Layout';
import Dashboard from "./pages/Dashboard";

import ItemForm from "./pages/items/ItemForm";

import Parties from "./pages/parties/Parties"
import PartiesForm from './pages/parties/PartiesForm';

import Sales from './pages/sales/Sales'
import SalesForm from "./pages/sales/SalesForm";

 
function App() {
  return (
    <>
     <ChakraProvider>
      <Routes>
        <Route path='/' element={<Layout/>} >              
          <Route index  element={<Dashboard/>} />
          
          <Route path="/item" element={<ItemForm/>} />

          <Route path="/parties" element={<Parties/>} />
          <Route path="/create_parties" element={<PartiesForm/>} />

          <Route path="/sales" element={<Sales/>} />
          <Route path="/create_sales" element={<SalesForm/>} />

         

         
        </Route>
      </Routes>
     </ChakraProvider>
    </>
  );

  }
export default App;
