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
  const tenWingsImg = images['10_Count_Marinated_Wings_2.jpg'];
  const bourbonChixImg = images['Bourbon_Chicken_with_Pancit.jpg'];
  const adoboChixImg = images['Chicken_Adobo_with_Rice.jpg'];
  const pancitImg1 = images['Pancit_2.jpg'];
  const porkStick = images['porkstick.jpg'];
  const jasmineRiceImg = images['Jasmine_Rice.jpg'];
  const glutenFreeImg = images['gluten_free-removebg.png'];
  const cokeImg = images['coca_cola_logo.jpg'];
  

  const menuItems = [
    {
        name: "Lumpia Eggrolls",
        price: "1-$3 / 2-$5",
        image: fourEggrollImg,
        description: "Eggrolls stuffed with seasoned ground beef, fresh carrots, garlic, water chestnuts, and green onions fried to crispy perfection. The kind where you keep eating even though you're full!"
    },
    {
        name: "Bourbon Chicken w/rice",
        price: "$13",
        image: bourbonChixImg,
        description: "(GF) The fan favorite! Garlic, ginger, and green onions fusedwith bourbon marinated chicken grilled to perfection over an open flame, served over a bed of fresh white jasmine rice. Upgrade from rice to pancit noodles for an additional $2"
    },
    {
        name: "Marinated Fried Wings",
        price: "5-$12 / 10-$20",
        image: tenWingsImg,
        description: "Kuya Kevin's favorite! Jumbo wings marinated in sinigang juices then fried to a crunchy finish. No sauce needed for this one. Caution, very addicting!"
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
        description: "A favorite in the Philippines. Soy sauce and vinegar marinated chicken stewed with garlic, bay leaves, black peppercorn, and brown sugar. Served over a bed of fresh white jasmine rice. Upgrade from rice to pancit noodles for an additional $2"
    },
    {
      name: "Pancit",
      price: "$10",
      image: pancitImg1,
      description: "A lighter choice. Filipino rice noodles cooked in soy sauce and chicken broth, tossed in a wok alongside fresh cabbage, carrots, onions, and celery. Add sautéed chicken for an additional $3"
    },
    {
      name: "Jasmine Rice",
      price: "$2",
      image: jasmineRiceImg,
      description: "Freshly steamed white jasmine rice."
  },
    {
      name: "Beverages",
      name: "Coke Products & Iced Tea",
        price: "$3",
        image: cokeImg,
        description: "Proudly serving Coke products including Coca-Cola, Diet Coke, and Sprite. Bottled Water available for $2"
    }
];

  return (<>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="ff-secondary text-center text-warning fw-normal">Food Menu</h1>
          <h3 className="mb-5">Proudly Serving A 100% Gluten Free Menu</h3>
          <img style={{ maxWidth: '30%', height: 'auto', paddingBottom: '10%' }} src={glutenFreeImg} alt="Gluten Free logo"></img>
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
    </div>
    </>
  );
};

export default Menu;
