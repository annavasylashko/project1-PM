const CURRENCY = "UAH";

const CURRENCY_EXCHANGE = {
  USD: 27.96,
  RUB: 0.38,
};

const BASKET = {
  elements: 4,
  price: 4000,
};

const TOP_MENU = {
  catalog: {
    order: 1,
    title: "Каталог",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  about_company: {
    order: 2,
    title: "О компании",
    submenu: [
      {
        order: 1,
        title: "VOIP оборудование",
        url: "voip_equipment.html",
      },
      {
        order: 2,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
      },
    ],
  },
  payment_delivery: {
    order: 3,
    title: "Payment and delivery",
    url: "payment_delivery.html",
  },
};

const MENU = [
  {
    order: 1,
    title: "VOIP ОБОРУДОВАНИЕ",
    url: "voip_equipment.html",
  },
  {
    order: 2,
    title: "SKYPE оборудование",
    url: "skype_equipment.html",
  },
  {
    order: 3,
    title: "GSM оборудование",
    url: "gsm_equipment.html",
  },
  {
    order: 4,
    title: "VIDEO оборудование",
    url: "video_equipment.html",
  },
  {
    order: 5,
    title: "VOIP ОБОРУДОВАНИЕ",
    url: "voip_equipment.html",
  },
  {
    order: 6,
    title: "SKYPE оборудование",
    url: "skype_equipment.html",
  },
  {
    order: 7,
    title: "SKYPE оборудование",
    url: "skype_equipment.html",
  },
  {
    order: 8,
    title: "VOIP ОБОРУДОВАНИЕ",
    url: "voip_equipment.html",
  },
  {
    order: 9,
    title: "What is up",
    url: "skype_equipment.html",
  },
];

const NEWS = [
  {
    date: "2021/01/01",
    title: "Новинка от «Элтекс» - точка доступа WEP",
    description:
      "Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.",
    img: "./img/sankt-petersburg-3012671_960_720.jpg",
    url: "voip_equipment.html",
  },
  {
    date: "2020/12/25",
    title: "Новинка от компании Grandstream!",
    description: "Скоро в продаже мощный маршрутизатор GWN7000!",
    img: "./img/untitled.png",
    url: "voip_equipment.html",
  },
  {
    date: "2021/01/14",
    title: "WiFi точка доступа от компании Grandstream!",
    description: "Уже скоро в продаже!",
    img: "./img/35_2.png",
    url: "voip_equipment.html",
  },
  {
    date: "2021/05/06",
    title: "WiFi точка доступа от компании Grandstream!",
    description: "Уже скоро в продаже!",
    img: "./img/35_2.png",
    url: "voip_equipment.html",
  },
  {
    date: "2021/08/29",
    title: "WiFi точка доступа от компании Grandstream!",
    description: "Уже скоро в продаже!",
    img: "./img/35_2.png",
    url: "voip_equipment.html",
  },
];

const BANNER = [
  {
    order: 1,
    img: "./img/banners/banner_bg.png",
    url: "voip_equipment.html",
  },
  {
    order: 2,
    img: "./img/banners/banner_bg.png",
    url: "voip_equipment.html",
  },
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/11.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/141.png",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1781.jpg",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    price: "100",
    oldPrice: "200",
    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1781.jpg",

    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/11.png",
    price: "1000",
    oldPrice: "4000",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/141.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2019/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1_large.png",
    price: "500",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    price: "150",
    oldPrice: "200",
    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1781.jpg",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/11.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2021/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",

    price: "100",
    oldPrice: "200",
    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",

    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    price: "1000",
    oldPrice: "4000",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2020/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "new",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/1781.jpg",
    price: "1000",
    oldPrice: "1100",
    currency: "UAH",
    date: "2019/01/01",
    url: "new_items/item1.html",
  },
  {
    type: "recommended",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    price: "300",
    oldPrice: "1100",
    currency: "RUB",
    date: "2020/12/25",
    url: "new_items/item.html",
  },
  {
    type: "sale",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/35_2.png",
    price: "150",
    oldPrice: "200",
    currency: "USD",
    date: "2021/01/13",
    url: "https://same_url/item.html",
  },
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
  {
    title: "Название акции",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/promo1.png",
    url: "https://same_url/item.html",
    time_action: "1d 2h 20m",
  },
  {
    title: "Название акции 2",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/promo2.png",
    url: "https://same_url/item.html",
    time_action: "5d 1h 29m",
  },
  {
    title: "Название акции 2",
    description: "IP телефон Siemens Gigaset C530A IP",
    img: "./img/promo3.png",
    url: "https://same_url/item.html",
  },
];

const BUYING_RIGHT_NOW = [
  {
    title: "Название товара",
    img: "./img/35_2.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 2",
    img: "./img/141.png",
    url: "https://same_url/item.html",
  },
  {
    title: "Название товара 2",
    img: "./img/1781.jpg",
    url: "https://same_url/item.html",
  },
];
