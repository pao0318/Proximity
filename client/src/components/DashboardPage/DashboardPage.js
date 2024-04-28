import React, { useEffect, useState } from "react";
import "./DashboardPage.css";

const DashboardPage = () => {

    const [shops, setShops] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const userLocationString = localStorage.getItem("location");
  
    // Extracting latitude and longitude of user's location
    const userLatitude = parseFloat(userLocationString.split("Latitude: ")[1].split(",")[0]);
    const userLongitude = parseFloat(userLocationString.split("Longitude: ")[1]);

    // console.log("Lat",userLatitude)
    // console.log("Long",userLongitude)
    
    useEffect(() => {
        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const R = 6371; // Radius of the earth in km
            const dLat = deg2rad(lat2 - lat1);
            const dLon = deg2rad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // Distance in km
            return d;
          };

      const getShopLists = async () => {
        const response = {
            "status": "success",
            "message": "Shops retrieved successfully",
            "data": {
              "shops": [
                {
                  "id": "shop1",
                  "name": "Peter's Grocery",
                  "location": {
                    "latitude": 40.7128,
                    "longitude": -74.0060
                  },
                  "items": [
                    {
                      "id": "item1",
                      "name": "Apples",
                      "category": "Fruits",
                      "price": 2.99,
                      "tags": ["Organic", "Fresh"]
                    },
                    {
                      "id": "item2",
                      "name": "Milk",
                      "category": "Dairy",
                      "price": 1.99,
                      "tags": ["Whole", "Organic"]
                    },
                    {
                      "id": "item3",
                      "name": "Bananas",
                      "category": "Fruits",
                      "price": 1.49,
                      "tags": ["Fresh", "Yellow"]
                    },
                    {
                      "id": "item4",
                      "name": "Eggs",
                      "category": "Dairy",
                      "price": 2.49,
                      "tags": ["Organic", "Free-range"]
                    },
                    {
                      "id": "item5",
                      "name": "Bread",
                      "category": "Bakery",
                      "price": 2.29,
                      "tags": ["Whole wheat", "Fresh"]
                    },
                    {
                      "id": "item6",
                      "name": "Cheese",
                      "category": "Dairy",
                      "price": 4.99,
                      "tags": ["Cheddar", "Aged"]
                    }
                  ]
                },
                {
                  "id": "shop2",
                  "name": "Corner Bakery",
                  "location": {
                    "latitude": 40.7306,
                    "longitude": -73.9352
                  },
                  "items": [
                    {
                      "id": "item7",
                      "name": "Baguette",
                      "category": "Bakery",
                      "price": 3.49,
                      "tags": ["Fresh", "Crusty"]
                    },
                    {
                      "id": "item8",
                      "name": "Croissant",
                      "category": "Bakery",
                      "price": 2.99,
                      "tags": ["Buttery", "Flaky"]
                    },
                    {
                      "id": "item9",
                      "name": "Chocolate Chip Cookie",
                      "category": "Bakery",
                      "price": 1.99,
                      "tags": ["Sweet", "Soft"]
                    },
                    {
                      "id": "item10",
                      "name": "Cinnamon Roll",
                      "category": "Bakery",
                      "price": 2.49,
                      "tags": ["Sweet", "Cinnamon"]
                    },
                    {
                      "id": "item11",
                      "name": "Pretzel",
                      "category": "Bakery",
                      "price": 1.99,
                      "tags": ["Salty", "Soft"]
                    },
                    {
                      "id": "item12",
                      "name": "Brownie",
                      "category": "Bakery",
                      "price": 2.99,
                      "tags": ["Chocolate", "Fudgy"]
                    }
                  ]
                },
                {
                  "id": "shop3",
                  "name": "The Butcher",
                  "location": {
                    "latitude": 40.7174,
                    "longitude": -74.0060
                  },
                  "items": [
                    {
                      "id": "item13",
                      "name": "Ribeye Steak",
                      "category": "Meat",
                      "price": 12.99,
                      "tags": ["Grass-fed", "Prime"]
                    },
                    {
                      "id": "item14",
                      "name": "Chicken Breast",
                      "category": "Meat",
                      "price": 7.99,
                      "tags": ["Free-range", "Boneless"]
                    },
                    {
                      "id": "item15",
                      "name": "Pork Chops",
                      "category": "Meat",
                      "price": 9.99,
                      "tags": ["Grilled", "Bone-in"]
                    },
                    {
                      "id": "item16",
                      "name": "Ground Beef",
                      "category": "Meat",
                      "price": 6.99,
                      "tags": ["Fresh", "80% lean"]
                    },
                    {
                      "id": "item17",
                      "name": "Lamb Shoulder",
                      "category": "Meat",
                      "price": 14.99,
                      "tags": ["Slow-cooked", "Bone-in"]
                    },
                    {
                      "id": "item18",
                      "name": "Sausages",
                      "category": "Meat",
                      "price": 5.99,
                      "tags": ["Grilled", "Assorted"]
                    }
                  ]
                },
                {
                  "id": "shop4",
                  "name": "Appollo Pharmacy",
                  "location": {
                    "latitude": 40.7282,
                    "longitude": -74.0776
                  },
                  "items": [
                    {
                      "id": "item19",
                      "name": "Aspirin",
                      "category": "Medicine",
                      "price": 5.99,
                      "tags": ["Pain relief", "Non-prescription"]
                    },
                    {
                      "id": "item20",
                      "name": "Band-Aids",
                      "category": "Medical Supplies",
                      "price": 3.49,
                      "tags": ["Adhesive", "Waterproof"]
                    },
                    {
                      "id": "item21",
                      "name": "Antibacterial Soap",
                      "category": "Personal Care",
                      "price": 2.99,
                      "tags": ["Gentle", "Fragrance-free"]
                    },
                    {
                      "id": "item22",
                      "name": "Hand Sanitizer",
                      "category": "Personal Care",
                      "price": 4.99,
                      "tags": ["Alcohol-based", "Travel-size"]
                    },
                    {
                      "id": "item23",
                      "name": "Cough Syrup",
                      "category": "Medicine",
                      "price": 7.99,
                      "tags": ["Cold", "Flu"]
                    },
                    {
                      "id": "item24",
                      "name": "Vitamins",
                      "category": "Health Supplements",
                      "price": 9.99,
                      "tags": ["Multivitamin", "Daily"]
                    }
                  ]
                },
                {
                  "id": "shop5",
                  "name": "Ather Bookstore",
                  "location": {
                    "latitude": 40.7419,
                    "longitude": -74.0048
                  },
                  "items": [
                    {
                      "id": "item25",
                      "name": "1984",
                      "category": "Fiction",
                      "price": 9.99,
                      "tags": ["Classic", "Dystopian"]
                    },
                    {
                      "id": "item26",
                      "name": "Sapiens: A Brief History of Humankind",
                      "category": "Non-fiction",
                      "price": 14.99,
                      "tags": ["History", "Anthropology"]
                    },
                    {
                      "id": "item27",
                      "name": "To Kill a Mockingbird",
                      "category": "Fiction",
                      "price": 8.99,
                      "tags": ["Classic", "Drama"]
                    },
                    {
                      "id": "item28",
                      "name": "The Great Gatsby",
                      "category": "Fiction",
                      "price": 10.99,
                      "tags": ["Classic", "Romance"]
                    },
                    {
                      "id": "item29",
                      "name": "The Catcher in the Rye",
                      "category": "Fiction",
                      "price": 11.99,
                      "tags": ["Classic", "Coming-of-age"]
                    },
                    {
                      "id": "item30",
                      "name": "The Alchemist",
                      "category": "Fiction",
                      "price": 12.99,
                      "tags": ["Adventure", "Philosophical"]
                    }
                  ]
                }
              ]
            }
          }          
  
        // Calculate distance for each shop from user's location
        const shopsWithDistance = response.data.shops.map((shop) => {
          const shopLatitude = shop.location.latitude;
          const shopLongitude = shop.location.longitude;
          const distance = calculateDistance(userLatitude, userLongitude, shopLatitude, shopLongitude);
          return { ...shop, distance };
        });
  
        // Sort shops based on distance
        const sortedShops = shopsWithDistance.sort((a, b) => a.distance - b.distance);
  
        setShops(sortedShops);
      };
  
      getShopLists();

      
    }, [userLatitude, userLongitude]);

      // Function to calculate distance between two points using Haversine formula


  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

   // Filter shops based on search term
   const filteredShops = shops.filter((shop) => {
    return shop.items.some((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <main id="main">
      <section id="shops" className="shops">
        <div className="container">
          <div className="heading-container">
            <h2 className="heading">
              Nearest shops to your location
            </h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for an item ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          {filteredShops.map((shop) => (
            <div key={shop.id} className="shop-section">
              <h3>{shop.name} <span>({shop.distance.toFixed(2)} km)</span></h3>
              <div className="items-list">
                {shop.items
                  .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((item) => (
                    <div key={item.id} className={`item-card shop${shop.id}`}>
                      <h4>{item.name}</h4>
                      <p><b>Category:</b> {item.category}</p>
                      <p><b>Price:</b> ${item.price}</p>
                      <p><b>Tags:</b> {item.tags.join(', ')}</p>
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
  
};

export default DashboardPage;