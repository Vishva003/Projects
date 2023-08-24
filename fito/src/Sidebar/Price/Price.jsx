import Input from "../../Components/Inputs/Input";
import "./Price.css";

const Price = ({ handlePrice }) => {
    return (
      <>
        <div className="ml">
          <h2 className="sidebar-title price-title">Price</h2>
  
          <label className="sidebar-label-container">
            <input onChange={handlePrice} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>
  
          <Input
            handleCategory={handlePrice}
            value="0-200"
            title="$0 - $200"
            name="test2"
          />
  
          <Input
            handleCategory={handlePrice}
            value="200-399"
            title="$200 - $399"
            name="test2"
          />
  
          <Input
            handleCategory={handlePrice}
            value="399-700"
            title="$399 - $700"
            name="test2"
          />
  
          <Input
            handleCategory={handlePrice}
            value="700-9999999"
            title="$700+"
            name="test2"
          />
        </div>
      </>
    );
  };
  
  export default Price;
  