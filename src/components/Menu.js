import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const Menu = () => {

const imgUrl = process.env.NODE_ENV === 'production' ? 'https://kuyakevinsbbq.com/images/' : 'http://192.168.4.122:3000/images/';
  
  // images
  const fourEggrollImg = `${imgUrl}4_Count_Eggroll.jpg`;
  const tenWingsImg = `${imgUrl}10_Count_Marinated_Wings_2.jpg`;
  const bourbonChixImg = `${imgUrl}Bourbon_Chicken_with_Pancit.jpg`;
  const adoboChixImg = `${imgUrl}Chicken_Adobo_with_Rice.jpg`;
  const pancitImg1 = `${imgUrl}Pancit_2.jpg`;
  const porkStick = `${imgUrl}porkstick.jpg`;
  const poutine = `${imgUrl}poutine.jpeg`;
  const sisig = `${imgUrl}sisig.jpg`;
  const jasmineRiceImg = `${imgUrl}Jasmine_Rice.jpg`;
  const glutenFreeImg = `${imgUrl}gluten_free-removebg.png`;
  const cokeImg = `${imgUrl}coca_cola_logo.jpg`;

  const menuItems = [
    {
        name: "Lumpia Eggrolls",
        price: "1-$4 / 2-$6",
        image: fourEggrollImg,
        description: "Eggrolls stuffed with seasoned ground beef, fresh carrots, garlic, water chestnuts, and green onions fried to crispy perfection. The kind where you keep eating even though you're full!"
    },
    {
        name: "Bourbon Chicken w/rice",
        price: "$14",
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
        price: "$8",
        image: porkStick,
        description: "Marinated pork, sliced and grilled to perfection, skewered with an onion and pepper medley."
    },
    {
        name: "Chicken Adobo w/rice",
        price: "$14",
        image: adoboChixImg,
        description: "A favorite in the Philippines. Soy sauce and vinegar marinated chicken stewed with garlic, bay leaves, black peppercorn, and brown sugar. Served over a bed of fresh white jasmine rice. Upgrade from rice to pancit noodles for an additional $2"
    },
    {
      name: "Pancit",
      price: "$10",
      image: pancitImg1,
      description: "A lighter choice. Filipino rice noodles cooked in soy sauce and chicken broth, tossed in a wok alongside fresh cabbage, carrots, onions, and celery. Add sautéed chicken for an additional $4"
    },
    {
      name: "Filipino Poutine",
      price: "$14",
      image: poutine,
      description: "A twist on a Canadian classic. Hot and fresh steak fries topped with lumpia eggroll meat, shredded cheese, and homemade adobo gravy."
    },
    {
      name: "Pork Sisig",
      price: "$14",
      image: sisig,
      description: "Smoked and deep fried pork belly, chopped and sautéed with onions and calamansi juice. Served over a bed of silky white rice."
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

  // get current path 
  const location = useLocation();
  const currentRoute = location.pathname;

  return (<>
  <Helmet>
        <title>Menu - Kuya Kevin's BBQ</title>
        <meta name="description" content="Explore the delicious menu of Kuya Kevin's BBQ, featuring authentic Filipino fusion dishes like Pancit and Adobo." />
        <link rel="canonical" href="https://kuyakevinsbbq.com/menu" />
      </Helmet>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          {currentRoute === '/menu' ? <h1 className="ff-secondary text-center text-warning fw-normal">Food Menu</h1> : <h2 className="ff-secondary text-center text-warning fw-normal">Food Menu</h2>}
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
