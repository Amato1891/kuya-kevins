import React from 'react';

const Menu = () => {
    // import images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/img/', false, /\.(png|jpe?g|svg)$/));
  
  // images
  const menuImg1 = images['menu-1.jpg'];
  const menuImg2 = images['menu-2.jpg'];
  const menuImg3 = images['menu-3.jpg'];
  const menuImg4 = images['menu-4.jpg'];
  const menuImg5 = images['menu-5.jpg'];
  const menuImg6 = images['menu-6.jpg'];
  const menuImg7 = images['menu-7.jpg'];
  const menuImg8 = images['menu-8.jpg'];

    const menuItems = [
        {
          name: "Taco Fries",
          price: "$8",
          image: menuImg1,
          description: "Crispy fries topped with seasoned ground beef, melted cheese, diced tomatoes, and cilantro."
        },
        {
          name: "Sushi Burrito",
          price: "$10",
          image: menuImg2,
          description: "A fusion delight! Fresh sushi ingredients wrapped in a large tortilla, served with soy sauce."
        },
        {
          name: "Mac 'n' Cheese Grilled Cheese",
          price: "$7",
          image: menuImg3,
          description: "Creamy mac 'n' cheese sandwiched between golden, buttery grilled cheese slices."
        },
        {
          name: "Pizza Tacos",
          price: "$9",
          image: menuImg4,
          description: "A crispy taco shell filled with marinara sauce, melted cheese, pepperoni, and topped with fresh basil."
        },
        {
          name: "Donut Burger",
          price: "$12",
          image: menuImg5,
          description: "A juicy beef patty sandwiched between two glazed donuts, with crispy bacon and maple syrup."
        },
        {
          name: "Loaded Tater Tot Nachos",
          price: "$11",
          image: menuImg6,
          description: "Crispy tater tots topped with melted cheese, jalapenos, sour cream, and guacamole."
        },
        {
          name: "Buffalo Chicken Waffle Fries",
          price: "$9",
          image: menuImg7,
          description: "Crispy waffle fries smothered in spicy buffalo chicken, ranch dressing, and blue cheese crumbles."
        },
        {
          name: "Pulled Pork Sliders",
          price: "$8",
          image: menuImg8,
          description: "Slow-cooked pulled pork piled high on mini brioche buns, topped with tangy barbecue sauce."
        },
        {
          name: "Cheesesteak Egg Rolls",
          price: "$10",
          image: menuImg1,
          description: "Philly cheesesteak filling rolled in crispy egg roll wrappers, served with spicy ketchup."
        },
        {
          name: "Fried Chicken and Waffle Sandwich",
          price: "$12",
          image: menuImg2,
          description: "Crispy fried chicken sandwiched between two fluffy waffles, drizzled with maple syrup."
        }
      ];
  return (<>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-warning fw-normal">Food Menu</h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {menuItems.map((menuItem, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={menuItem.image} alt={menuItem.name} style={{ width: '80px' }} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menuItem.name}</span>
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
