import './App.css';
import {ProductProvider} from "./API/fetchApi";
import ListProduct from './Components/js/ListProduct';


const App = () => {
  return (
      <ProductProvider>
     	  <ListProduct/>
      </ProductProvider>
  );
}

export default App;
