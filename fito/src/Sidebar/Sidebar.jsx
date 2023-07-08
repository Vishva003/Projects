import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleCategory ,handlePrice}) => {
    return (
      <>
        <section className="sidebar">
         
          <Category handleCategory={handleCategory} />
          <Price handlePrice={handlePrice} />
        </section>
      </>
    );
  };
  
  export default Sidebar;
  