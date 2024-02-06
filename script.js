import React from "react";
import ReactDOM from "react-dom/client";

/*
    Food ordering App
    *Header
       - Logo
       - nav links
    *Body
        - search
        - restaurant container
            - restaurant cards
                -img
                -name of restaurant, star rating, delivery time....
    *footer
        - copyright
        - links
        - address
        - contact
*/

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// inline css - not recommended.
// const styleCard = {
//     backgroundColor : "#D3D3D3",
// }

const resList = [
        {
        "info": 
        {
            "id": "162357",
            "name": "Darbar Veg Restaurant",
            "cloudinaryImageId": "90e65f9bfc54de0d1da6a000def0ea2b",
            "locality": "Rajiv Gandhi Square",
            "areaName": "Naudra Bridge",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "North Indian",
            "Chinese",
            "Biryani",
            "Snacks",
            "Indian"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "68469",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "deliveryTime": 22,
            "sla": {
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-05 23:00:00",
            "opened": true
            },
            "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
            },
        },
        },
        {
        "info": {
            "id": "291632",
            "name": "Pride By Samrat - The Kitchen",
            "cloudinaryImageId": "qwtj2i6mqgwaumsvalhy",
            "locality": "Narmada Road",
            "areaName": "Katanga",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "North Indian",
            "Chinese",
            "Snacks",
            "Tandoor"
            ],
            "avgRating": 4.5,
            "parentId": "210634",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "deliveryTime": 30,
            "sla": {
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-06 00:00:00",
            "opened": true
            },
            "badges": {
            
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pride-by-samrat-the-kitchen-narmada-road-katanga-jabalpur-291632",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
            "id": "102140",
            "name": "New Pawar Restaurant",
            "cloudinaryImageId": "62df07c8f844172e57475d67741c5b6e",
            "locality": "Model Road",
            "areaName": "Teen Patti",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "North Indian",
            "Thalis",
            "Biryani",
            "Chinese",
            "Snacks"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "147483",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",            
            "deliveryTime": 25,
            "sla": {
            "lastMileTravel": 0.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "0.8 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-05 23:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                    }
                ]
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/new-pawar-restaurant-model-road-teen-patti-jabalpur-102140",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
            "id": "547612",
            "name": "Vasanta Bhavan",
            "cloudinaryImageId": "tdhhkr3w6nmkbskqqt34",
            "locality": "Jab_North",
            "areaName": "Jab_North",
            "costForTwo": "₹150 for two",
            "cuisines": [
            "South Indian"
            ],
            "veg": true,
            "parentId": "16954",
            "avgRatingString": "--",            
            "deliveryTime": 24,
            "sla": {
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-05 22:30:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
                }
            ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
            
            },
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                    }
                ]
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/vasanta-bhavan-jab-north-jabalpur-547612",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
            "id": "630269",
            "name": "Bapu Ki Kutia",
            "cloudinaryImageId": "753591cf8c1a73d79608feeddaf8b88f",
            "locality": "Narmada Road",
            "areaName": "Gorakhpur",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "North Indian",
            "Thalis",
            "Snacks",
            "Mughlai"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "7065",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "deliveryTime": 33,
            "sla": {
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-05 23:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                    }
                ]
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "₹175 OFF",
            "subHeader": "ABOVE ₹599",
            "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bapu-ki-kutia-narmada-road-gorakhpur-jabalpur-630269",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
            "id": "219652",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
            "locality": "4th Bridge Road",
            "areaName": "Napier Town",
            "costForTwo": "₹200 for two",
            "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "4961",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",            
            "deliveryTime": 25,
            "sla": {
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-06 02:00:00",
            "opened": true
            },
            "badges": {
            
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹549",
            "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-4th-bridge-road-napier-town-jabalpur-219652",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
            "id": "606735",
            "name": "Sardar G Malai Chaap Junction",
            "cloudinaryImageId": "f91d3130cc148cec0c9b703039161d8d",
            "locality": "near 2nd Bridge RABS HEIGHT",
            "areaName": "Civil Lines",
            "costForTwo": "₹249 for two",
            "cuisines": [
            "North Indian"
            ],
            "avgRating": 3.8,
            "parentId": "14511",
            "avgRatingString": "3.8",
            "totalRatingsString": "50+",            
            "deliveryTime": 26,
            "sla": {
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-06 02:29:00",
            "opened": true
            },
            "badges": {
            
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
            
            },
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sardar-g-malai-chaap-junction-near-2nd-bridge-rabs-height-civil-lines-jabalpur-606735",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
            "id": "767215",
            "name": "Kathi Nation",
            "cloudinaryImageId": "5c8fa0250094725311629f6d1cd88571",
            "locality": "George Disilwa Ward",
            "areaName": "Jab_North",
            "costForTwo": "₹200 for two",
            "cuisines": [
            "Rolls & Wraps",
            "Italian-American",
            "Chinese",
            "Kebabs"
            ],
            "avgRating": 3.5,
            "parentId": "115628",
            "avgRatingString": "3.5",
            "totalRatingsString": "9",            
            "deliveryTime": 29,
            "sla": {
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-05 23:00:00",
            "opened": true
            },
            "badges": {
            
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kathi-nation-george-disilwa-ward-jab-north-jabalpur-767215",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
            "id": "310184",
            "name": "The Juice Box",
            "cloudinaryImageId": "i4ebkh36qoqyjyithgj5",
            "locality": "Narmada Road",
            "areaName": "Gorakhpur",
            "costForTwo": "₹200 for two",
            "cuisines": [
            "Beverages",
            "Fast Food"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "210219",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",            
            "deliveryTime": 29,
            "sla": {
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-05 21:45:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
                }
            ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
            
            },
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                    }
                ]
                },
                "textBased": {
                
                },
                "textExtendedBadges": {
                
                }
            }
            },
            "orderabilityCommunication": {
            "title": {
                
            },
            "subTitle": {
                
            },
            "message": {
                
            },
            "customIcon": {
                
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                
                },
                "video": {
                
                }
            }
            },
            "reviewsSummary": {
            
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
            
            }
        },
        "analytics": {
            "context": "seo-data-bd708b5d-180a-4bdd-9aa2-2f90ee27e6b8"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-juice-box-narmada-road-gorakhpur-jabalpur-310184",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ]

const RestaurantCard = (props) =>{
    console.log(props);
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData?.info;
    return (
        <div className="res-cards" style={{backgroundColor : "#D3D3D3"}}>
            <div className="res-cards-img" >
                <img 
                    className="res-card-img" 
                    alt="cardImg" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
                />
            </div>
            <div className="res-cards-details">
                <h3>{name}</h3>
                <h5>{cuisines.join(",")}</h5>
                <p>{"⭐"+avgRating}</p>
                <p>{"Delivert time:"+deliveryTime+" minutes"}</p>
                <p>{costForTwo}</p>
            </div>
            
        </div>
    )
};

const BodyComp = () => {
    return (
        <div className="main-body">
            <div className="search">Search</div>

            <div className="restaurant-container">
                {resList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <BodyComp />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);