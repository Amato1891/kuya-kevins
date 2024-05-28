import React from 'react';

const Menu = () => {
    // import images
function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
  
  // images
  const fourEggrollImg = images['4_Count_Eggroll.jpg'];
  const fiveWingsImg = images['5_Count_Marinated_Wings_2.jpg'];
  const tenWingsImg = images['10_Count_Marinated_Wings_2.jpg'];
  const bourbonChixImg = images['Bourbon_Chicken_with_Pancit.jpg'];
  const adoboChixImg = images['Chicken_Adobo_with_Rice.jpg'];
  const pancitImg1 = images['Pancit_2.jpg'];
  const porkStick = images['porkstick.jpg'];
  const jasmineRiceImg = images['Jasmine_Rice.jpg'];
  const glutenFreeImg = images['gluten_free.jpg'];
  const cokeImg = images['coca_cola_logo.jpg'];
  

  const menuItems = [
    {
        name: "Meat Eggrolls",
        price: "1-$3 / 2-$5",
        image: fourEggrollImg,
        description: "Crispy eggrolls stuffed with seasoned ground beef, fresh carrots, garlic, water chestnuts, green onions, and eggs, perfectly spiced with salt and pepper. Available in 2 or 4 counts."
    },
    {
        name: "Bourbon Chicken w/rice",
        price: "$13",
        image: bourbonChixImg,
        description: "Juicy chicken cooked in a savory bourbon sauce with soy sauce, garlic, ginger, green onions, water, brown sugar, and a touch of pepper flakes for heat, seasoned with salt, pepper, and chicken granules."
    },
    {
        name: "Wings",
        price: "5-$10 / 10-$18",
        image: tenWingsImg,
        description: "Crispy wings marinated in soy sauce, water, and Mama Sita sour powder, coated with a blend of flour and corn starch, seasoned with salt and pepper for a perfect crunch. Available in 5 or 10 counts."
    },
    {
        name: "Pork BBQ",
        price: "$13",
        image: porkStick,
        description: "Tender pork marinated in soy sauce and ketchup, sweetened with brown sugar and a hint of pineapple juice, skewered on BBQ sticks and grilled to perfection."
    },
    {
        name: "Chicken Adobo w/rice",
        price: "$13",
        image: adoboChixImg,
        description: "Classic adobo with chicken simmered in soy sauce, garlic, salt, pepper, and bay leaves, balanced with a touch of sugar and vinegar for a rich and savory flavor."
    },
    {
      name: "Pancit",
      price: "$10 | Add Chicken +$3",
      image: pancitImg1,
      description: "Traditional Filipino stir-fried noodles with garlic, onions, carrots, cabbage, and green beans, all tossed in a savory soy sauce blend."
    },
    {
      name: "Jasmine Rice",
      price: "$3",
      image: jasmineRiceImg,
      description: "Fragrant and silky, our Jasmine Rice elevates any dish with its delicate aroma and smooth texture. Sourced from Southeast Asia, it's the perfect accompaniment to your favorite meats and sauces."
  },
    {
      name: "Beverages",
      name: "Coke Products",
        price: "$3",
        image: cokeImg,
        description: "Proudly serving Coke products including Coca-Cola, Diet Coke, Coke Zero Sugar, Sprite, and more."
    }
];

  return (<>
    {/* <div className="container-xxl bg-white py-5"> */}
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="ff-secondary text-center text-warning fw-normal">Food Menu</h1>
          <h3 className="mb-5">Proudly Serving A 100% Gluten Free Menu</h3>
          <img style={{ maxWidth: '30%', height: 'auto', paddingBottom: '10%' }} src={glutenFreeImg} alt="Gluten Free"></img>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {menuItems.map((menuItem, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={menuItem.image} alt={menuItem.name} style={{ width: '80px',height: '60px', boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.9)',filter: 'brightness(110%)'}} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span style={{paddingRight: '3%'}}>{menuItem.name}</span>
                          <span className="text-warning">{menuItem.price}</span>
                        </h5>
                        <small className="fst-italic">{menuItem.description}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </>
  );
};

export default Menu;
