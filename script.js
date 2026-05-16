const data = [
  { src: './00043.jpg', title: 'Wallpaper 1', description: 'Beautiful high-quality wallpaper' },
  { src: './023a7d52-a98c-4c33-b20d-454397b0f26f.jpeg', title: 'Wallpaper 2', description: 'Beautiful high-quality wallpaper' },
  { src: './1280px-Africa.ma.jpg', title: 'Africa', description: 'Beautiful high-quality wallpaper' },
  { src: './1280px-Img102_(Windows_8).png', title: 'Windows Design 102', description: 'Beautiful high-quality wallpaper' },
  { src: './1280px-Img12_(Windows_8).jpg', title: 'Windows Design 12', description: 'Beautiful high-quality wallpaper' },
  { src: './1280px-Img1_(Windows_8).jpg', title: 'Windows Contrast', description: 'Crisp and cool with elegant texture.' },
  { src: './1280px-Img3_(Windows_8).jpg', title: 'Windows Design 3', description: 'Beautiful high-quality wallpaper' },
  { src: './1280px-Img5_(Windows_7).jpg', title: 'Windows Design 5', description: 'Beautiful high-quality wallpaper' },
  { src: './1280px-Img7_(Windows_7).jpg', title: 'Windows Design 7', description: 'Beautiful high-quality wallpaper' },
  { src: './1280px-Img8_(Windows_8).jpg', title: 'Windows Design 8', description: 'Beautiful high-quality wallpaper' },
  { src: './14f46d88ab4894cdebc8c77ffa5d5266.jpg', title: 'Wallpaper 11', description: 'Beautiful high-quality wallpaper' },
  { src: './19347_32.jpg', title: 'Wallpaper 12', description: 'Beautiful high-quality wallpaper' },
  { src: './22166_35.jpg', title: 'Wallpaper 13', description: 'Beautiful high-quality wallpaper' },
  { src: './27207_81.jpg', title: 'Wallpaper 14', description: 'Beautiful high-quality wallpaper' },
  { src: './28183_88.jpg', title: 'Wallpaper 15', description: 'Beautiful high-quality wallpaper' },
  { src: './2c46338410e9ef0a4ad566ce18372ae1.jpg', title: 'Wallpaper 16', description: 'Beautiful high-quality wallpaper' },
  { src: './3b1b5197cb82113f95187e5cf4556054.jpg', title: 'Wallpaper 17', description: 'Beautiful high-quality wallpaper' },
  { src: './3d929241-820a-4d2f-bed0-7953e9c9e6e7.jpeg', title: 'Wallpaper 18', description: 'Beautiful high-quality wallpaper' },
  { src: './3D_90.webp.jpg', title: 'Digital Glow', description: 'Modern abstract wallpaper with neon geometry.' },
  { src: './3e0290d0ec271b07b73545756c8cbf70.jpg', title: 'Aurora Dream', description: 'A dreamlike aurora painting the horizon.' },
  { src: './3f148c0b615b53d75ac474f8a38710e3.jpg', title: 'Wallpaper 20', description: 'Beautiful high-quality wallpaper' },
  { src: './53394c41e77d1a66eeae6918131c0668.jpg', title: 'Wallpaper 21', description: 'Beautiful high-quality wallpaper' },
  { src: './537d7b08-7356-4525-8a49-ee7af0037704.jpeg', title: 'Wallpaper 22', description: 'Beautiful high-quality wallpaper' },
  { src: './55dabcc4-bf22-4650-a400-f6770ea964e3.jpeg', title: 'Wallpaper 23', description: 'Beautiful high-quality wallpaper' },
  { src: './5d3e3d246833f0c57c8960305928ecad.jpg', title: 'Wallpaper 24', description: 'Beautiful high-quality wallpaper' },
  { src: './5e64d0edb28247609c345d0d91ef503c.jpg', title: 'Wallpaper 25', description: 'Beautiful high-quality wallpaper' },
  { src: './5ecd1a706c4e510e398da99e5fd54ca9.jpg', title: 'Wallpaper 26', description: 'Beautiful high-quality wallpaper' },
  { src: './5eeac39cf6cc5fd255fe8aa811aefb95.jpg', title: 'Wallpaper 27', description: 'Beautiful high-quality wallpaper' },
  { src: './5f1149389619cef38b9832c65b35cf28.jpg', title: 'Wallpaper 28', description: 'Beautiful high-quality wallpaper' },
  { src: './62377f460ee928df7def17a7bd40510c.jpg', title: 'Wallpaper 29', description: 'Beautiful high-quality wallpaper' },
  { src: './624a02e494255925cf990538f9104e6a.jpg', title: 'Wallpaper 30', description: 'Beautiful high-quality wallpaper' },
  { src: './63ecb484aff94ff9ae3d1375564a1acc.jpg', title: 'Wallpaper 31', description: 'Beautiful high-quality wallpaper' },
  { src: './662d261e4393fdfe629403a41d05d88d.jpg', title: 'Wallpaper 32', description: 'Beautiful high-quality wallpaper' },
  { src: './6b1ae1cd1700d49f8d340bf92070d993.jpg', title: 'Wallpaper 33', description: 'Beautiful high-quality wallpaper' },
  { src: './6b1bd11794242801f9c56d1e08e39842.jpg', title: 'Wallpaper 34', description: 'Beautiful high-quality wallpaper' },
  { src: './752e7b7d32ea48ec2799f5d6d094dfcf.jpg', title: 'Wallpaper 35', description: 'Beautiful high-quality wallpaper' },
  { src: './7de81b6fa038a3f3c64ead50e4a91d93.jpg', title: 'Wallpaper 36', description: 'Beautiful high-quality wallpaper' },
  { src: './7e8482ceaa21c59835199afad74f1274.jpg', title: 'Wallpaper 37', description: 'Beautiful high-quality wallpaper' },
  { src: './7f43cfde5eef58f49d3a624f05fe73da.jpg', title: 'Wallpaper 38', description: 'Beautiful high-quality wallpaper' },
  { src: './811a608a9f55d223b88c50336c44c619.jpg', title: 'Wallpaper 39', description: 'Beautiful high-quality wallpaper' },
  { src: './8c72ce8d57087306871d855f3ef2f6f3.jpg', title: 'Wallpaper 40', description: 'Beautiful high-quality wallpaper' },
  { src: './8e73c8e31e1def2c3f9bd20a5d2100ad.jpg', title: 'Wallpaper 41', description: 'Beautiful high-quality wallpaper' },
  { src: './90aab9705a24d82738fc2735964f354f.jpg', title: 'Wallpaper 42', description: 'Beautiful high-quality wallpaper' },
  { src: './93f4a4788cc068abb1e94fece51c689d.jpg', title: 'Wallpaper 43', description: 'Beautiful high-quality wallpaper' },
  { src: './9f4986e21ce6ca58c04bf9eb2ead7fad.jpg', title: 'Wallpaper 44', description: 'Beautiful high-quality wallpaper' },
  { src: './AU-wp5.jpg', title: 'Australia 5', description: 'Beautiful high-quality wallpaper' },
  { src: './AU-wp6.jpg', title: 'Australia 6', description: 'Beautiful high-quality wallpaper' },
  { src: './BR-wp2.jpg', title: 'Brazil 2', description: 'Beautiful high-quality wallpaper' },
  { src: './BR-wp3.jpg', title: 'Brazil 3', description: 'Beautiful high-quality wallpaper' },
  { src: './BR-wp4.jpg', title: 'Brazil 4', description: 'Beautiful high-quality wallpaper' },
  { src: './BR-wp6.jpg', title: 'Brazil 6', description: 'Beautiful high-quality wallpaper' },
  { src: './c011c4304775cf3ddf828bc554798824.jpg', title: 'Wallpaper 45', description: 'Beautiful high-quality wallpaper' },
  { src: './c49df2ac61baeeabe0c4ead6310cd624.jpg', title: 'Wallpaper 46', description: 'Beautiful high-quality wallpaper' },
  { src: './c5824b17419fc587f9ac7b507027531b.jpg', title: 'Wallpaper 47', description: 'Beautiful high-quality wallpaper' },
  { src: './c858e7abaaf41a2a0032b3c76221e860.jpg', title: 'Wallpaper 48', description: 'Beautiful high-quality wallpaper' },
  { src: './c90ee533b1c307b90ed12a5e265ed2b6.jpg', title: 'Wallpaper 49', description: 'Beautiful high-quality wallpaper' },
  { src: './CA-wp1.jpg', title: 'Canada 1', description: 'Beautiful high-quality wallpaper' },
  { src: './CA-wp3.jpg', title: 'Canada 3', description: 'Beautiful high-quality wallpaper' },
  { src: './CA-wp4.jpg', title: 'Canada 4', description: 'Beautiful high-quality wallpaper' },
  { src: './CA-wp5.jpg', title: 'Canada 5', description: 'Beautiful high-quality wallpaper' },
  { src: './CA-wp6.jpg', title: 'Canada 6', description: 'Beautiful high-quality wallpaper' },
  { src: './CN-wp1.jpg', title: 'China 1', description: 'Beautiful high-quality wallpaper' },
  { src: './CN-wp2.jpg', title: 'China 2', description: 'Beautiful high-quality wallpaper' },
  { src: './CN-wp3.jpg', title: 'China 3', description: 'Beautiful high-quality wallpaper' },
  { src: './CN-wp5.jpg', title: 'China 5', description: 'Beautiful high-quality wallpaper' },
  { src: './CN-wp6.jpg', title: 'China 6', description: 'Beautiful high-quality wallpaper' },
  { src: './d0720d14af5463a31d04262fd54511c1.jpg', title: 'Wallpaper 50', description: 'Beautiful high-quality wallpaper' },
  { src: './d3606b032f47cc0d0d0151d27d24425f.jpg', title: 'Wallpaper 51', description: 'Beautiful high-quality wallpaper' },
  { src: './db81536899c0a16463cec9b4307f00c2.jpg', title: 'Wallpaper 52', description: 'Beautiful high-quality wallpaper' },
  { src: './dc889a28d273cffc87fb281eaf3f40e2.jpg', title: 'Wallpaper 53', description: 'Beautiful high-quality wallpaper' },
  { src: './DE-wp1.jpg', title: 'Germany 1', description: 'Beautiful high-quality wallpaper' },
  { src: './DE-wp2.jpg', title: 'Germany 2', description: 'Beautiful high-quality wallpaper' },
  { src: './DE-wp3.jpg', title: 'Germany 3', description: 'Beautiful high-quality wallpaper' },
  { src: './DE-wp4.jpg', title: 'Germany 4', description: 'Beautiful high-quality wallpaper' },
  { src: './DE-wp5.jpg', title: 'Germany 5', description: 'Beautiful high-quality wallpaper' },
  { src: './DE-wp6.jpg', title: 'Germany 6', description: 'Beautiful high-quality wallpaper' },
  { src: './dfd4e7f8a021108cb950f02020b2a059.jpg', title: 'Wallpaper 54', description: 'Beautiful high-quality wallpaper' },
  { src: './ES-wp2.jpg', title: 'Spain 2', description: 'Beautiful high-quality wallpaper' },
  { src: './ES-wp3.jpg', title: 'Spain 3', description: 'Beautiful high-quality wallpaper' },
  { src: './ES-wp4.jpg', title: 'Spain 4', description: 'Beautiful high-quality wallpaper' },
  { src: './ES-wp6.jpg', title: 'Spain 6', description: 'Beautiful high-quality wallpaper' },
  { src: './Eternity.jpeg', title: 'Eternity Mist', description: 'Soft light and mist create a peaceful mood.' },
  { src: './Exclusive_145.webp.jpg', title: 'Exclusive 145', description: 'Beautiful high-quality wallpaper' },
  { src: './Exclusive_194.webp.jpg', title: 'Exclusive 194', description: 'Beautiful high-quality wallpaper' },
  { src: './Exclusive_290.webp.jpg', title: 'Exclusive 290', description: 'Beautiful high-quality wallpaper' },
  { src: './f0168c75a8ec70dbda3ac0a4d93284a8.jpg', title: 'Wallpaper 55', description: 'Beautiful high-quality wallpaper' },
  { src: './f0a95a6d0d31aed20962b2e276eddf2d.jpg', title: 'Wallpaper 56', description: 'Beautiful high-quality wallpaper' },
  { src: './f4757920e4a768a29d107de005a259e6.jpg', title: 'Wallpaper 57', description: 'Beautiful high-quality wallpaper' },
  { src: './FB_IMG_1484911795804.jpg', title: 'Wallpaper 58', description: 'Beautiful high-quality wallpaper' },
  { src: './FB_IMG_1485424153016.jpg', title: 'Wallpaper 59', description: 'Beautiful high-quality wallpaper' },
  { src: './FB_IMG_1486189992133.jpg', title: 'Wallpaper 60', description: 'Beautiful high-quality wallpaper' },
  { src: './FB_IMG_1489397109257.jpg', title: 'Wallpaper 61', description: 'Beautiful high-quality wallpaper' },
  { src: './FB_IMG_1494228871060.jpg', title: 'Wallpaper 62', description: 'Beautiful high-quality wallpaper' },
  { src: './Fireworks_over_the_Sydney_Opera_House_and_Harbor_Bridge.jpg', title: 'City Celebration', description: 'Night fireworks over a shimmering harbor skyline.' },
  { src: './fjjfr.jpg', title: 'Wallpaper 63', description: 'Beautiful high-quality wallpaper' },
  { src: './FR-wp2.jpg', title: 'France 2', description: 'Beautiful high-quality wallpaper' },
  { src: './FR-wp3.jpg', title: 'France 3', description: 'Beautiful high-quality wallpaper' },
  { src: './FR-wp4.jpg', title: 'France 4', description: 'Beautiful high-quality wallpaper' },
  { src: './FR-wp5.jpg', title: 'France 5', description: 'Beautiful high-quality wallpaper' },
  { src: './FR-wp6.jpg', title: 'France 6', description: 'Beautiful high-quality wallpaper' },
  { src: './GB-wp2.jpg', title: 'United Kingdom 2', description: 'Beautiful high-quality wallpaper' },
  { src: './GB-wp3.jpg', title: 'United Kingdom 3', description: 'Beautiful high-quality wallpaper' },
  { src: './GB-wp4.jpg', title: 'United Kingdom 4', description: 'Beautiful high-quality wallpaper' },
  { src: './GB-wp5.jpg', title: 'United Kingdom 5', description: 'Beautiful high-quality wallpaper' },
  { src: './GB-wp6.jpg', title: 'United Kingdom 6', description: 'Beautiful high-quality wallpaper' },
  { src: './glx.jpg', title: 'Wallpaper 64', description: 'Beautiful high-quality wallpaper' },
  { src: './god.jpg', title: 'Wallpaper 65', description: 'Beautiful high-quality wallpaper' },
  { src: './GreenMountainsNatureMobileWallpaper(Wall2mob.com)_40292-cprw.jpg', title: 'Emerald Peaks', description: 'Calm mountain range with lush green valleys.' },
  { src: './gx.jpg', title: 'Wallpaper 66', description: 'Beautiful high-quality wallpaper' },
  { src: './H6.jpg', title: 'Wallpaper 67', description: 'Beautiful high-quality wallpaper' },
  { src: './i(Wall2mob.com)_41277-cprw.jpg', title: 'Wallpaper 68', description: 'Beautiful high-quality wallpaper' },
  { src: './Ikingchohan👑.jpg', title: 'Wallpaper 69', description: 'Beautiful high-quality wallpaper' },
  { src: './image15.jpg', title: 'Wallpaper 70', description: 'Beautiful high-quality wallpaper' },
  { src: './image16.jpg', title: 'Wallpaper 71', description: 'Beautiful high-quality wallpaper' },
  { src: './image23.jpg', title: 'Wallpaper 72', description: 'Beautiful high-quality wallpaper' },
  { src: './image46.jpg', title: 'Wallpaper 73', description: 'Beautiful high-quality wallpaper' },
  { src: './image8.jpg', title: 'Wallpaper 74', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20230715-WA0000.jpg', title: 'Silent Dawn', description: 'A soft sunrise over a peaceful moment.' },
  { src: './IMG-20230721-WA0000.jpg', title: 'Wallpaper 75', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20230721-WA0002.jpg', title: 'Wallpaper 76', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20230721-WA0003.jpg', title: 'Wallpaper 77', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20230721-WA0006.jpg', title: 'Wallpaper 78', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0003.jpg', title: 'Evening Glow', description: 'Warm tones and gentle shadows create rich contrast.' },
  { src: './IMG-20250826-WA0004.jpg', title: 'Wallpaper 79', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0005.jpg', title: 'Wallpaper 80', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0006.jpg', title: 'Wallpaper 81', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0007.jpg', title: 'Wallpaper 82', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0014.jpg', title: 'Wallpaper 83', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0015.jpg', title: 'Wallpaper 84', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0017.jpg', title: 'Wallpaper 85', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0018.jpg', title: 'Wallpaper 86', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0019.jpg', title: 'Wallpaper 87', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0020.jpg', title: 'Wallpaper 88', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0021.jpg', title: 'Wallpaper 89', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0022.jpg', title: 'Wallpaper 90', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0023.jpg', title: 'Wallpaper 91', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0024.jpg', title: 'Wallpaper 92', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0026.jpg', title: 'Wallpaper 93', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0027.jpg', title: 'Wallpaper 94', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0028.jpg', title: 'Wallpaper 95', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0030.jpg', title: 'Wallpaper 96', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0031.jpg', title: 'Wallpaper 97', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0032.jpg', title: 'Wallpaper 98', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0033.jpg', title: 'Wallpaper 99', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0034.jpg', title: 'Wallpaper 100', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0035.jpg', title: 'Wallpaper 101', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0037.jpg', title: 'Wallpaper 102', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0038.jpg', title: 'Wallpaper 103', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0039.jpg', title: 'Wallpaper 104', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0040.jpg', title: 'Wallpaper 105', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0041.jpg', title: 'Wallpaper 106', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0042.jpg', title: 'Wallpaper 107', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0043.jpg', title: 'Wallpaper 108', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0044.jpg', title: 'Wallpaper 109', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0045.jpg', title: 'Wallpaper 110', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0046.jpg', title: 'Wallpaper 111', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250826-WA0047.jpg', title: 'Wallpaper 112', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250827-WA0002.jpg', title: 'Wallpaper 113', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250827-WA0003.jpg', title: 'Wallpaper 114', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG-20250827-WA0004.jpg', title: 'Wallpaper 115', description: 'Beautiful high-quality wallpaper' },
  { src: './Img0_(Windows_8).jpg', title: 'Windows Design 0', description: 'Beautiful high-quality wallpaper' },
  { src: './Img100_(Windows_8).png', title: 'Windows Design 100', description: 'Beautiful high-quality wallpaper' },
  { src: './Img101_(Windows_8).jpg', title: 'Windows Design 101', description: 'Beautiful high-quality wallpaper' },
  { src: './Img103_(Windows_8).jpg', title: 'Windows Design 103', description: 'Beautiful high-quality wallpaper' },
  { src: './Img104_(Windows_8).jpg', title: 'Windows Design 104', description: 'Beautiful high-quality wallpaper' },
  { src: './Img105_(Windows_8).jpg', title: 'Windows Design 105', description: 'Beautiful high-quality wallpaper' },
  { src: './Img10_(Windows_7).jpg', title: 'Windows Design 10', description: 'Beautiful high-quality wallpaper' },
  { src: './Img10_(Windows_8).jpg', title: 'Windows Design 10 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img11_(Windows_7).jpg', title: 'Windows Design 11', description: 'Beautiful high-quality wallpaper' },
  { src: './IMG12345.PNG', title: 'Wallpaper 116', description: 'Beautiful high-quality wallpaper' },
  { src: './Img12_(Windows_7).jpg', title: 'Windows Design 12 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img1_(Windows_7).jpg', title: 'Windows Design 1 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img2_(Windows_7).jpg', title: 'Windows Design 2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img2_(Windows_8).jpg', title: 'Windows Design 2 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img3_(Windows_7).jpg', title: 'Windows Design 3 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img4_(Windows_7).jpg', title: 'Windows Design 4', description: 'Beautiful high-quality wallpaper' },
  { src: './Img4_(Windows_8).jpg', title: 'Windows Design 4 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img5_(Windows_8).jpg', title: 'Windows Design 5 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img6_(Windows_7).jpg', title: 'Windows Design 6', description: 'Beautiful high-quality wallpaper' },
  { src: './Img6_(Windows_8).jpg', title: 'Windows Design 6 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img7_(Windows_8).jpg', title: 'Windows Design 7 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img8_(Windows_7).jpg', title: 'Windows Design 8 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Img9_(Windows_7).jpg', title: 'Windows Design 9', description: 'Beautiful high-quality wallpaper' },
  { src: './Img9_(Windows_8).jpg', title: 'Windows Design 9 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './IN-wp1.jpg', title: 'India 1', description: 'Beautiful high-quality wallpaper' },
  { src: './IN-wp3.jpg', title: 'India 3', description: 'Beautiful high-quality wallpaper' },
  { src: './IN-wp4.jpg', title: 'India 4', description: 'Beautiful high-quality wallpaper' },
  { src: './IN-wp5.jpg', title: 'India 5', description: 'Beautiful high-quality wallpaper' },
  { src: './IN-wp6.jpg', title: 'India 6', description: 'Beautiful high-quality wallpaper' },
  { src: './IT-wp1.jpg', title: 'Italy 1', description: 'Beautiful high-quality wallpaper' },
  { src: './IT-wp2.jpg', title: 'Italy 2', description: 'Beautiful high-quality wallpaper' },
  { src: './IT-wp3.jpg', title: 'Italy 3', description: 'Beautiful high-quality wallpaper' },
  { src: './IT-wp4.jpg', title: 'Italy 4', description: 'Beautiful high-quality wallpaper' },
  { src: './IT-wp5.jpg', title: 'Italy 5', description: 'Beautiful high-quality wallpaper' },
  { src: './IT-wp6.jpg', title: 'Italy 6', description: 'Beautiful high-quality wallpaper' },
  { src: './JP-wp1_(Windows_7).jpg', title: 'Japan 1', description: 'Beautiful high-quality wallpaper' },
  { src: './JP-wp2_(Windows_7).jpg', title: 'Japan 2', description: 'Beautiful high-quality wallpaper' },
  { src: './JP-wp3_(Windows_7).jpg', title: 'Japan 3', description: 'Beautiful high-quality wallpaper' },
  { src: './JP-wp5_(Windows_7).jpg', title: 'Japan 5', description: 'Beautiful high-quality wallpaper' },
  { src: './JP-wp6_(Windows_7).jpg', title: 'Japan 6', description: 'Beautiful high-quality wallpaper' },
  { src: './kba.jpg', title: 'Wallpaper 117', description: 'Beautiful high-quality wallpaper' },
  { src: './kbla.jpg', title: 'Wallpaper 118', description: 'Beautiful high-quality wallpaper' },
  { src: './khb.jpg', title: 'Wallpaper 119', description: 'Beautiful high-quality wallpaper' },
  { src: './kn fkn.jpg', title: 'Wallpaper 120', description: 'Beautiful high-quality wallpaper' },
  { src: './KR-wp1.jpg', title: 'South Korea 1', description: 'Beautiful high-quality wallpaper' },
  { src: './KR-wp5.jpg', title: 'South Korea 5', description: 'Beautiful high-quality wallpaper' },
  { src: './KR-wp6.jpg', title: 'South Korea 6', description: 'Beautiful high-quality wallpaper' },
  { src: './meraj.jpg', title: 'Wallpaper 121', description: 'Beautiful high-quality wallpaper' },
  { src: './msq.jpg', title: 'Wallpaper 122', description: 'Beautiful high-quality wallpaper' },
  { src: './MultiColor_117.webp.jpg', title: 'MultiColor 117', description: 'Beautiful high-quality wallpaper' },
  { src: './Multiverso.jpeg', title: 'Multiverso', description: 'Beautiful high-quality wallpaper' },
  { src: './MX-wp1.jpg', title: 'Mexico 1', description: 'Beautiful high-quality wallpaper' },
  { src: './MX-wp2.jpg', title: 'Mexico 2', description: 'Beautiful high-quality wallpaper' },
  { src: './MX-wp3.jpg', title: 'Mexico 3', description: 'Beautiful high-quality wallpaper' },
  { src: './MX-wp4.jpg', title: 'Mexico 4', description: 'Beautiful high-quality wallpaper' },
  { src: './MX-wp5.jpg', title: 'Mexico 5', description: 'Beautiful high-quality wallpaper' },
  { src: './MX-wp6.jpg', title: 'Mexico 6', description: 'Beautiful high-quality wallpaper' },
  { src: './Nature_Wallpaper_11578.jpg', title: 'Nature Wallpaper', description: 'Beautiful high-quality wallpaper' },
  { src: './NL-wp1.jpg', title: 'Netherlands 1', description: 'Beautiful high-quality wallpaper' },
  { src: './NL-wp2.jpg', title: 'Netherlands 2', description: 'Beautiful high-quality wallpaper' },
  { src: './NL-wp3.jpg', title: 'Netherlands 3', description: 'Beautiful high-quality wallpaper' },
  { src: './NL-wp4.jpg', title: 'Netherlands 4', description: 'Beautiful high-quality wallpaper' },
  { src: './NL-wp5.jpg', title: 'Netherlands 5', description: 'Beautiful high-quality wallpaper' },
  { src: './NL-wp6.jpg', title: 'Netherlands 6', description: 'Beautiful high-quality wallpaper' },
  { src: './peakpx.jpg', title: 'Wallpaper 123', description: 'Beautiful high-quality wallpaper' },
  { src: './PL-wp1.jpg', title: 'Poland 1', description: 'Beautiful high-quality wallpaper' },
  { src: './PL-wp2.jpg', title: 'Poland 2', description: 'Beautiful high-quality wallpaper' },
  { src: './PL-wp3.jpg', title: 'Poland 3', description: 'Beautiful high-quality wallpaper' },
  { src: './PL-wp4.jpg', title: 'Poland 4', description: 'Beautiful high-quality wallpaper' },
  { src: './PL-wp6.jpg', title: 'Poland 6', description: 'Beautiful high-quality wallpaper' },
  { src: './plnt.jpg', title: 'Wallpaper 124', description: 'Beautiful high-quality wallpaper' },
  { src: './pntng.jpg', title: 'Wallpaper 125', description: 'Beautiful high-quality wallpaper' },
  { src: './quran-translations-the-holy-qur-an-text-translation-and-noble-quran-png-512_.jpg', title: 'Wallpaper 126', description: 'Beautiful high-quality wallpaper' },
  { src: './r.jpg', title: 'Wallpaper 127', description: 'Beautiful high-quality wallpaper' },
  { src: './rmzn.jpg', title: 'Wallpaper 128', description: 'Beautiful high-quality wallpaper' },
  { src: './RU-wp1.jpg', title: 'Russia 1', description: 'Beautiful high-quality wallpaper' },
  { src: './RU-wp2.jpg', title: 'Russia 2', description: 'Beautiful high-quality wallpaper' },
  { src: './RU-wp3.jpg', title: 'Russia 3', description: 'Beautiful high-quality wallpaper' },
  { src: './RU-wp5.jpg', title: 'Russia 5', description: 'Beautiful high-quality wallpaper' },
  { src: './RU-wp6.jpg', title: 'Russia 6', description: 'Beautiful high-quality wallpaper' },
  { src: './s.jpg', title: 'Wallpaper 129', description: 'Beautiful high-quality wallpaper' },
  { src: './Screenshot_20230419_082102_YouTube.jpg', title: 'Wallpaper 130', description: 'Beautiful high-quality wallpaper' },
  { src: './Screenshot_20230428_082042_One UI Home.jpg', title: 'Wallpaper 131', description: 'Beautiful high-quality wallpaper' },
  { src: './shbs.jpg', title: 'Wallpaper 132', description: 'Beautiful high-quality wallpaper' },
  { src: './Space_62.webp.jpg', title: 'Space Nebula', description: 'A dramatic nebula with vibrant cosmic detail.' },
  { src: './Space_8.webp.jpg', title: 'Cosmic Flow', description: 'A cosmic wave drifting through deep space.' },
  { src: './str.jpg', title: 'Wallpaper 133', description: 'Beautiful high-quality wallpaper' },
  { src: './tlp.jpg', title: 'Wallpaper 134', description: 'Beautiful high-quality wallpaper' },
  { src: './tommyvideo_108.webp.jpg', title: 'Tommy Video 108', description: 'Beautiful high-quality wallpaper' },
  { src: './tommyvideo_111.webp.jpg', title: 'Tommy Video 111', description: 'Beautiful high-quality wallpaper' },
  { src: './tommyvideo_14.webp.jpg', title: 'Tommy Video 14', description: 'Beautiful high-quality wallpaper' },
  { src: './TR-wp1.jpg', title: 'Turkey 1', description: 'Beautiful high-quality wallpaper' },
  { src: './TR-wp2.jpg', title: 'Turkey 2', description: 'Beautiful high-quality wallpaper' },
  { src: './TR-wp3.jpg', title: 'Turkey 3', description: 'Beautiful high-quality wallpaper' },
  { src: './TR-wp4.jpg', title: 'Turkey 4', description: 'Beautiful high-quality wallpaper' },
  { src: './TR-wp5.jpg', title: 'Turkey 5', description: 'Beautiful high-quality wallpaper' },
  { src: './TR-wp6.jpg', title: 'Turkey 6', description: 'Beautiful high-quality wallpaper' },
  { src: './TW-wp1.jpg', title: 'Taiwan 1', description: 'Beautiful high-quality wallpaper' },
  { src: './TW-wp2.jpg', title: 'Taiwan 2', description: 'Beautiful high-quality wallpaper' },
  { src: './TW-wp3.jpg', title: 'Taiwan 3', description: 'Beautiful high-quality wallpaper' },
  { src: './TW-wp4.jpg', title: 'Taiwan 4', description: 'Beautiful high-quality wallpaper' },
  { src: './TW-wp5.jpg', title: 'Taiwan 5', description: 'Beautiful high-quality wallpaper' },
  { src: './TW-wp6.jpg', title: 'Taiwan 6', description: 'Beautiful high-quality wallpaper' },
  { src: './Universe.jpg', title: 'Galaxy Horizon', description: 'Mystic universe wallpaper with glowing stars.' },
  { src: './unnamed (1).jpg', title: 'Unnamed 1', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (10).jpg', title: 'Unnamed 10', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (11).jpg', title: 'Unnamed 11', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (12).jpg', title: 'Unnamed 12', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (13).jpg', title: 'Unnamed 13', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (2).jpg', title: 'Unnamed 2', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (24).jpg', title: 'Unnamed 24', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (25).jpg', title: 'Unnamed 25', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (3).jpg', title: 'Unnamed 3', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (4).jpg', title: 'Unnamed 4', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (5).jpg', title: 'Unnamed 5', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (6).jpg', title: 'Unnamed 6', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (7).jpg', title: 'Unnamed 7', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (8).jpg', title: 'Unnamed 8', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed (9).jpg', title: 'Unnamed 9', description: 'Beautiful high-quality wallpaper' },
  { src: './unnamed.jpg', title: 'Unnamed', description: 'Beautiful high-quality wallpaper' },
  { src: './untitled(Wall2mob.com)_31479-cprw.jpg', title: 'Wallpaper 135', description: 'Beautiful high-quality wallpaper' },
  { src: './untitled(Wall2mob.com)_32197-cprw.jpg', title: 'Wallpaper 136', description: 'Beautiful high-quality wallpaper' },
  { src: './untitled(Wall2mob.com)_32559-cprw.jpg', title: 'Wallpaper 137', description: 'Beautiful high-quality wallpaper' },
  { src: './ZA-wp1.jpg', title: 'South Africa 1', description: 'Beautiful high-quality wallpaper' },
  { src: './ZA-wp2.jpg', title: 'South Africa 2', description: 'Beautiful high-quality wallpaper' },
  { src: './ZA-wp3.jpg', title: 'South Africa 3', description: 'Beautiful high-quality wallpaper' },
  { src: './ZA-wp4.jpg', title: 'South Africa 4', description: 'Beautiful high-quality wallpaper' },
  { src: './ZA-wp5.jpg', title: 'South Africa 5', description: 'Beautiful high-quality wallpaper' },
  { src: './ZA-wp6.jpg', title: 'South Africa 6', description: 'Beautiful high-quality wallpaper' },
];

const gallery = document.getElementById('gallery');
const countLabel = document.getElementById('countLabel');
const searchInput = document.getElementById('searchInput');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const downloadLink = document.getElementById('downloadLink');
const closeLightbox = document.getElementById('closeLightbox');
const ownerLogo = document.getElementById('ownerLogo');
let lastFocusedElement = null;

function createCard(item) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card';
  card.innerHTML = `
    <img src="${item.src}" alt="${item.title}" loading="lazy" />
    <div class="card-body">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `;

  card.addEventListener('click', () => {
    openLightbox(item);
  });

  return card;
}

function openLightbox(item) {
  lastFocusedElement = document.activeElement;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.title;
  lightboxCaption.textContent = item.title;
  downloadLink.href = item.src;
  lightbox.classList.remove('hidden');
  lightbox.setAttribute('aria-hidden', 'false');
  lightbox.inert = false;
  closeLightbox.focus();
}

function close() {
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
  lightbox.classList.add('hidden');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.inert = true;
}

function renderGallery(items) {
  gallery.innerHTML = '';
  items.forEach((item) => gallery.appendChild(createCard(item)));
  countLabel.textContent = items.length;
}

function filterGallery(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    renderGallery(data);
    return;
  }

  const filtered = data.filter((item) => {
    return item.title.toLowerCase().includes(normalized) || item.description.toLowerCase().includes(normalized);
  });

  renderGallery(filtered);
}

searchInput.addEventListener('input', (event) => {
  filterGallery(event.target.value);
});

closeLightbox.addEventListener('click', close);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    close();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
    close();
  }
});

if (ownerLogo) {
  ownerLogo.addEventListener('click', () => {
    openLightbox({
      src: './Ameer Hassan Shah.jpeg',
      title: 'Ameer Hassan Shah',
      description: 'Owner photo',
    });
  });
}

renderGallery(data);
