import "./Category.css";
import Input from "../../Components/Inputs/Input";

function Category({ handleCategory }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div >
        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="" name="test"  />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleCategory={handleCategory}
          value="watch"
          title="watch"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="dresses"
          title="dresses"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="bracelets & bangles"
          title="bracelets & bangles"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="soap"
          title="soap"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="bedsheet"
          title="bedsheet"
          name="test"
        />
         <Input
          handleCategory={handleCategory}
          value="bike covers"
          title="bike covers"
          name="test"
        />
         <Input
          handleCategory={handleCategory}
          value="bluetooth headphones"
          title="bluetooth headphones"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="car covers"
          title="car covers"
          name="test"
        />
        <Input
          handleCategory={handleCategory}
          value="cups & mugs"
          title="cups & mugs"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;

// function handledisplay() {
  //   setdisplay(!display);
  // }
  // const items = ['Analog Watches',
  //   'Bangles & Bracelets',
  //   ' Bedsheets',
  //   ' Bike Covers',
  //   'Bluetooth Headphones',
  //   'Car Covers',
  //   'Cups & Mugs',
  //   'Dresses',
  //   'Dupatta Sets',
  //   'Dupattas',
  //   'Earrings & Studs',
  //   'Flipflops & Slippers',
  //   'Gowns',
  //   ' Hair Oil',
  //   'Handbags',
  //   'Idols & Figurines',
  //   'Jeans',
  //   'Jewellery Set',
  //   'Kitchen Storage',
  //   'Kitchen Tools',
  //   ' Kurta Sets',
  //   'Kurtis',
  //   'Lehengas',
  //   'Lipsticks',
  //   'Lunchbox & Bottles',
  //   'Mangalsutras',
  //   'Men Jewellery',
  //   'Mobile Accessories',
  //   ' Mobile Cases & Covers',
  //   'Motorcycle Covers',
  //   'Nighties',
  //   'Panty',
  //   'Pendants & Lockets',
  //   'Puja Articles',
  //   'Rings',
  //   'Sarees',
  //   'Shirts',
  //   'Shoes',
  //   'Shorts',
  //   'Socks',
  //   'Suits & Dress Materials',
  //   'Sunglasses',
  //   'Sweater and Sweatshirts',
  //   ' T-shirts',
  //   'Tops and Bottom sets',
  //   'Tops And Tunics',
  //   'Wall Stickers & Murals',
  //   'Women Lehengas'
  // ];