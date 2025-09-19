import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";


let all_product = [
  {
    id: 1,
    name: "IPHONE 15 PRO MAX Natural titanium 256GB",
    category: "phone",
    image: p1_img,
    new_price: 4649,
    old_price: 4499,
  },
  {
    id: 2,
    name: "Smart Watch Samsung Galax y 4 Classic - Noir",
    category: "accessorie",
    image: p2_img,
    new_price: 1300,
    old_price: 1200,
  },
  {
    id: 3,
    name: "Setup Gamer Pc De Bureau Gaming / Ryzen 5",
    category: "pc",
    image: p3_img,
    new_price: 2255,
    old_price: 2099,
  },
  {
    id: 4,
    name: "LENOVO IDEAPAD GAMING 3 |CORE I7|RTX3050TI|16GB",
    category: "pc",
    image: p4_img,
    new_price: 3115,
    old_price: 3089,
  },
  {
    id: 5,
    name: "MSI KATANA 17 | I7 12650H | RTX 2050 |16 GB DDR5 | NVME 512GB",
    category: "pc",
    image: p5_img,
    new_price: 3085,
    old_price: 2999,
  },
  {
    id: 6,
    name: "ASUS TUF GAMING F17 | I7-12700H |16GO| 512GO |RTX 3050",
    category: "pc",
    image: p6_img,
    new_price: 3455,
    old_price: 3219,
  },
  {
    id: 7,
    name: "GIGABYTE AERO 16 BSF OLED | CORE I7 | 16 GB RAM | RTX 4070 | 1TO NVME",
    category: "pc",
    image: p7_img,
    new_price: 7510,
    old_price: 7399,
  },
  {
    id: 8,
    name: "ASUS VIVOBOOK PRO 16X | I7 13650HX |RTX4070 |16GB | NVME 512 GB",
    category: "pc",
    image: p8_img,
    new_price: 4799,
    old_price: 4699,
  },
  {
    id: 9,
    name: "LEGION PRO 5 | CORE I7-13700Hx | Nvidia RTX 4060 | 16GB DDR5 | NVME 1TB",
    category: "pc",
    image: p9_img,
    new_price: 6240,
    old_price: 6109,
  },
  {
    id: 10,
    name: "AORUS 15 BKF | CORE I7-13700H | 16 GB RAM | RTX 4060 | 1 TB NVME",
    category: "pc",
    image: p10_img,
    new_price: 5615,
    old_price: 5489,
  },
  {
    id: 11,
    name: "SMARTPHONE XIAOMI REDMI NOTE 13 PRO 12GO 512GO",
    category: "phone",
    image: p11_img,
    new_price: 1399,
    old_price: 1260,
  },
  {
    id: 12,
    name: "IPHONE 14 - BLUE Natural titanium | 128GO",
    category: "phone",
    image: p12_img,
    new_price: 3960,
    old_price: 3656,
  },
  {
    id: 13,
    name: "SMARTPHONE HONOR 90 LITE 5G 8GO 256GO",
    category: "phone",
    image: p13_img,
    new_price: 999,
    old_price: 879,
  },
  {
    id: 14,
    name: "SMARTPHONE REALME 11 4G 8GO 256GO - GOLD",
    category: "phone",
    image: p14_img,
    new_price: 899,
    old_price: 729,
  },
  {
    id: 15,
    name: "SMARTPHONE OPPO A78 8GO 256GO",
    category: "phone",
    image: p15_img,
    new_price: 999,
    old_price: 929,
  },
  {
    id: 16,
    name: "SAMSUNG GALAXY A14 5G 6GO 128GO",
    category: "phone",
    image: p16_img,
    new_price: 819,
    old_price: 659,
  },
  {
    id: 17,
    name: "SMARTPHONE VIVO Y35 8GO 128GO",
    category: "phone",
    image: p17_img,
    new_price: 799,
    old_price: 700,
  },
  {
    id: 18,
    name: "EARBUDS INFINIX XE23 TWS - White",
    category: "accessorie",
    image: p18_img,
    new_price: 79,
    old_price: 49,
  },
  {
    id: 19,
    name: "Borofone BJ31 Mini Power Bank 5000mAh Black",
    category: "accessorie",
    image: p19_img,
    new_price: 49,
    old_price: 39,
  },
  {
    id: 20,
    name: "ANKER SOUNDCORE BLUETOOTH LIFE 2 NEO - BLACK",
    category: "accessorie",
    image: p20_img,
    new_price: 199,
    old_price: 169,
  },
  {
    id: 21,
    name: "VIDEO PROJECTEUR FOCUS S20 | 1280*720P | 32-176 pouces",
    category: "accessorie",
    image: p21_img,
    new_price: 519,
    old_price: 475,
  },
  {
    id: 22,
    name: "REDRAGON MA301 HODER MOUSE SUPPORT - BLACK",
    category: "accessorie",
    image: p22_img,
    new_price: 40,
    old_price: 29,
  },
  {
    id: 23,
    name: "EPSON ECOTANK L6270 WIFI, COULEUR, MULTIFONCTION 3EN1",
    category: "accessorie",
    image: p23_img,
    new_price: 1189,
    old_price: 1000,
  },
  {
    id: 24,
    name: "NINTENDO SWITCH V2 + JOY-CON (ROUGE) ET (BLEU)",
    category: "accessorie",
    image: p24_img,
    new_price: 1599,
    old_price: 1499,
  },
  
];

export default all_product;
