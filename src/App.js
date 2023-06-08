import { Routes, Route }   from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from './common/Layout';
import Dashboard from "./pages/Dashboard";

import ItemsList from './pages/items/ItemsList';
import ItemForm from "./pages/items/ItemForm";

import PartiesList from "./pages/parties/PartiesList"
import PartiesForm from './pages/parties/PartiesForm';

import SalesList from './pages/sales/SalesList'
import SalesForm from "./pages/sales/SalesForm";

// import PracticeForm from './pages/PracticeForm';
// import Practice from './pages/Practice';
function App() {
  return (
    <>
     <ChakraProvider>
      <Routes>
        <Route path='/' element={<Layout/>} >              
          <Route index  element={<Dashboard/>} />
          
          <Route path="/items_list" element={<ItemsList/>} />
          <Route path="/create_items" element={<ItemForm/>} />

          <Route path="/parties_list" element={<PartiesList/>} />
          <Route path="/create_parties" element={<PartiesForm/>} />

          <Route path="/sales_list" element={<SalesList/>} />
          <Route path="/create_sales" element={<SalesForm/>} />

          {/* <Route path="/pc" element={<Practice/>} />
          <Route path="/create_pc" element={<PracticeForm/>} /> */}
          
        </Route>
      </Routes>
     </ChakraProvider>
    </>
  );

  }
export default App;
