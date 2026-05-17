const data = [
  { src: './Wallpapers gallery/00043.jpg', title: 'Wallpaper 1', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/023a7d52-a98c-4c33-b20d-454397b0f26f.jpeg', title: 'Wallpaper 2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/1280px-Africa.ma.jpg', title: 'Flower Wallpaper', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/1280px-Img102_(Windows_8).png', title: 'Windows Design 102', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/1280px-Img12_(Windows_8).jpg', title: 'Windows Design 12', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/1280px-Img1_(Windows_8).jpg', title: 'Windows Contrast', description: 'Crisp and cool with elegant texture.' },
  { src: './Wallpapers gallery/1280px-Img3_(Windows_8).jpg', title: 'Windows Design 3', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/1280px-Img5_(Windows_7).jpg', title: 'Windows Design 5', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/1280px-Img7_(Windows_7).jpg', title: 'Windows Design 7', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/1280px-Img8_(Windows_8).jpg', title: 'Windows Design 8', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/14f46d88ab4894cdebc8c77ffa5d5266.jpg', title: 'Wallpaper 11', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/19347_32.jpg', title: 'Wallpaper 12', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/22166_35.jpg', title: 'Wallpaper 13', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/27207_81.jpg', title: 'Wallpaper 14', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/28183_88.jpg', title: 'Wallpaper 15', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/2c46338410e9ef0a4ad566ce18372ae1.jpg', title: 'Wallpaper 16', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/3b1b5197cb82113f95187e5cf4556054.jpg', title: 'Wallpaper 17', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/3d929241-820a-4d2f-bed0-7953e9c9e6e7.jpeg', title: 'Wallpaper 18', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/3D_90.webp.jpg', title: 'Digital Glow', description: 'Modern abstract wallpaper with neon geometry.' },
  { src: './Wallpapers gallery/3e0290d0ec271b07b73545756c8cbf70.jpg', title: 'Aurora Dream', description: 'A dreamlike aurora painting the horizon.' },
  { src: './Wallpapers gallery/3f148c0b615b53d75ac474f8a38710e3.jpg', title: 'Wallpaper 20', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/53394c41e77d1a66eeae6918131c0668.jpg', title: 'Wallpaper 21', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/537d7b08-7356-4525-8a49-ee7af0037704.jpeg', title: 'Wallpaper 22', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/55dabcc4-bf22-4650-a400-f6770ea964e3.jpeg', title: 'Wallpaper 23', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/5d3e3d246833f0c57c8960305928ecad.jpg', title: 'Wallpaper 24', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/5e64d0edb28247609c345d0d91ef503c.jpg', title: 'Wallpaper 25', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/5ecd1a706c4e510e398da99e5fd54ca9.jpg', title: 'Wallpaper 26', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/5eeac39cf6cc5fd255fe8aa811aefb95.jpg', title: 'Wallpaper 27', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/5f1149389619cef38b9832c65b35cf28.jpg', title: 'Wallpaper 28', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/62377f460ee928df7def17a7bd40510c.jpg', title: 'Wallpaper 29', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/624a02e494255925cf990538f9104e6a.jpg', title: 'Wallpaper 30', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/63ecb484aff94ff9ae3d1375564a1acc.jpg', title: 'Wallpaper 31', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/662d261e4393fdfe629403a41d05d88d.jpg', title: 'Wallpaper 32', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/6b1ae1cd1700d49f8d340bf92070d993.jpg', title: 'Wallpaper 33', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/6b1bd11794242801f9c56d1e08e39842.jpg', title: 'Wallpaper 34', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/752e7b7d32ea48ec2799f5d6d094dfcf.jpg', title: 'Wallpaper 35', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/7de81b6fa038a3f3c64ead50e4a91d93.jpg', title: 'Wallpaper 36', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/7e8482ceaa21c59835199afad74f1274.jpg', title: 'Wallpaper 37', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/7f43cfde5eef58f49d3a624f05fe73da.jpg', title: 'Wallpaper 38', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/811a608a9f55d223b88c50336c44c619.jpg', title: 'Wallpaper 39', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/8c72ce8d57087306871d855f3ef2f6f3.jpg', title: 'Wallpaper 40', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/8e73c8e31e1def2c3f9bd20a5d2100ad.jpg', title: 'Wallpaper 41', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/90aab9705a24d82738fc2735964f354f.jpg', title: 'Wallpaper 42', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/93f4a4788cc068abb1e94fece51c689d.jpg', title: 'Wallpaper 43', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/9f4986e21ce6ca58c04bf9eb2ead7fad.jpg', title: 'Wallpaper 44', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/AU-wp5.jpg', title: 'Eye-catching 01', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/AU-wp6.jpg', title: 'Eye-catching 02', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/BR-wp2.jpg', title: 'Eye-catching 03', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/BR-wp3.jpg', title: 'Eye-catching 04', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/BR-wp4.jpg', title: 'Eye-catching 05', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/BR-wp6.jpg', title: 'Eye-catching 06', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/c011c4304775cf3ddf828bc554798824.jpg', title: 'Wallpaper 45', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/c49df2ac61baeeabe0c4ead6310cd624.jpg', title: 'Wallpaper 46', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/c5824b17419fc587f9ac7b507027531b.jpg', title: 'Wallpaper 47', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/c858e7abaaf41a2a0032b3c76221e860.jpg', title: 'Wallpaper 48', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/c90ee533b1c307b90ed12a5e265ed2b6.jpg', title: 'Wallpaper 49', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CA-wp1.jpg', title: 'Eye-catching 07', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CA-wp3.jpg', title: 'Eye-catching 08', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CA-wp4.jpg', title: 'Eye-catching 09', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CA-wp5.jpg', title: 'Eye-catching 10', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CA-wp6.jpg', title: 'Eye-catching 11', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CN-wp1.jpg', title: 'Eye-catching 12', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CN-wp2.jpg', title: 'Eye-catching 13', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CN-wp3.jpg', title: 'Eye-catching 14', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CN-wp5.jpg', title: 'Eye-catching 15', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/CN-wp6.jpg', title: 'Eye-catching 16', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/d0720d14af5463a31d04262fd54511c1.jpg', title: 'Wallpaper 50', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/d3606b032f47cc0d0d0151d27d24425f.jpg', title: 'Wallpaper 51', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/db81536899c0a16463cec9b4307f00c2.jpg', title: 'Wallpaper 52', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/dc889a28d273cffc87fb281eaf3f40e2.jpg', title: 'Wallpaper 53', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/DE-wp1.jpg', title: 'Eye-catching 17', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/DE-wp2.jpg', title: 'Eye-catching 18', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/DE-wp3.jpg', title: 'Eye-catching 19', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/DE-wp4.jpg', title: 'Eye-catching 20', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/DE-wp5.jpg', title: 'Eye-catching 21', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/DE-wp6.jpg', title: 'Eye-catching 22', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/dfd4e7f8a021108cb950f02020b2a059.jpg', title: 'Wallpaper 54', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ES-wp2.jpg', title: 'Eye-catching 23', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ES-wp3.jpg', title: 'Eye-catching 24', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ES-wp4.jpg', title: 'Eye-catching 25', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ES-wp6.jpg', title: 'Eye-catching 26', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Eternity.jpeg', title: 'Eternity Mist', description: 'Soft light and mist create a peaceful mood.' },
  { src: './Wallpapers gallery/Exclusive_145.webp.jpg', title: 'Exclusive 145', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Exclusive_194.webp.jpg', title: 'Exclusive 194', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Exclusive_290.webp.jpg', title: 'Exclusive 290', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/f0168c75a8ec70dbda3ac0a4d93284a8.jpg', title: 'Wallpaper 55', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/f0a95a6d0d31aed20962b2e276eddf2d.jpg', title: 'Wallpaper 56', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/f4757920e4a768a29d107de005a259e6.jpg', title: 'Wallpaper 57', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FB_IMG_1484911795804.jpg', title: 'Wallpaper 58', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FB_IMG_1485424153016.jpg', title: 'Wallpaper 59', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FB_IMG_1486189992133.jpg', title: 'Wallpaper 60', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FB_IMG_1489397109257.jpg', title: 'Wallpaper 61', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FB_IMG_1494228871060.jpg', title: 'Wallpaper 62', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Fireworks_over_the_Sydney_Opera_House_and_Harbor_Bridge.jpg', title: 'City Celebration', description: 'Night fireworks over a shimmering harbor skyline.' },
  { src: './Wallpapers gallery/fjjfr.jpg', title: 'Wallpaper 63', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FR-wp2.jpg', title: 'Eye-catching 27', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FR-wp3.jpg', title: 'Eye-catching 28', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FR-wp4.jpg', title: 'Eye-catching 29', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FR-wp5.jpg', title: 'Eye-catching 30', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/FR-wp6.jpg', title: 'Eye-catching 31', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/GB-wp2.jpg', title: 'Eye-catching 32', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/GB-wp3.jpg', title: 'Eye-catching 33', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/GB-wp4.jpg', title: 'Eye-catching 34', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/GB-wp5.jpg', title: 'Eye-catching 35', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/GB-wp6.jpg', title: 'Eye-catching 36', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/glx.jpg', title: 'Wallpaper 64', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/god.jpg', title: 'Wallpaper 65', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/GreenMountainsNatureMobileWallpaper(Wall2mob.com)_40292-cprw.jpg', title: 'Emerald Peaks', description: 'Calm mountain range with lush green valleys.' },
  { src: './Wallpapers gallery/gx.jpg', title: 'Wallpaper 66', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/H6.jpg', title: 'Wallpaper 67', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/i(Wall2mob.com)_41277-cprw.jpg', title: 'Wallpaper 68', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Ikingchohan👑.jpg', title: 'Wallpaper 69', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/image15.jpg', title: 'Wallpaper 70', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/image16.jpg', title: 'Wallpaper 71', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/image23.jpg', title: 'Wallpaper 72', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/image46.jpg', title: 'Wallpaper 73', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/image8.jpg', title: 'Wallpaper 74', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20230715-WA0000.jpg', title: 'Silent Dawn', description: 'A soft sunrise over a peaceful moment.' },
  { src: './Wallpapers gallery/IMG-20230721-WA0000.jpg', title: 'Wallpaper 75', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20230721-WA0002.jpg', title: 'Wallpaper 76', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20230721-WA0003.jpg', title: 'Wallpaper 77', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20230721-WA0006.jpg', title: 'Wallpaper 78', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0003.jpg', title: 'Evening Glow', description: 'Warm tones and gentle shadows create rich contrast.' },
  { src: './Wallpapers gallery/IMG-20250826-WA0004.jpg', title: 'Wallpaper 79', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0005.jpg', title: 'Wallpaper 80', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0006.jpg', title: 'Wallpaper 81', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0007.jpg', title: 'Wallpaper 82', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0014.jpg', title: 'Wallpaper 83', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0015.jpg', title: 'Wallpaper 84', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0017.jpg', title: 'Wallpaper 85', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0018.jpg', title: 'Wallpaper 86', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0019.jpg', title: 'Wallpaper 87', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0020.jpg', title: 'Wallpaper 88', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0021.jpg', title: 'Wallpaper 89', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0022.jpg', title: 'Wallpaper 90', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0023.jpg', title: 'Wallpaper 91', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0024.jpg', title: 'Wallpaper 92', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0026.jpg', title: 'Wallpaper 93', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0027.jpg', title: 'Wallpaper 94', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0028.jpg', title: 'Wallpaper 95', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0030.jpg', title: 'Wallpaper 96', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0031.jpg', title: 'Wallpaper 97', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0032.jpg', title: 'Wallpaper 98', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0033.jpg', title: 'Wallpaper 99', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0034.jpg', title: 'Wallpaper 100', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0035.jpg', title: 'Wallpaper 101', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0037.jpg', title: 'Wallpaper 102', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0038.jpg', title: 'Wallpaper 103', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0039.jpg', title: 'Wallpaper 104', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0040.jpg', title: 'Wallpaper 105', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0041.jpg', title: 'Wallpaper 106', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0042.jpg', title: 'Wallpaper 107', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0043.jpg', title: 'Wallpaper 108', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0044.jpg', title: 'Wallpaper 109', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0045.jpg', title: 'Wallpaper 110', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0046.jpg', title: 'Wallpaper 111', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250826-WA0047.jpg', title: 'Wallpaper 112', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250827-WA0002.jpg', title: 'Wallpaper 113', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250827-WA0003.jpg', title: 'Wallpaper 114', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG-20250827-WA0004.jpg', title: 'Wallpaper 115', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img0_(Windows_8).jpg', title: 'Windows Design 0', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img100_(Windows_8).png', title: 'Windows Design 100', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img101_(Windows_8).jpg', title: 'Windows Design 101', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img103_(Windows_8).jpg', title: 'Windows Design 103', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img104_(Windows_8).jpg', title: 'Windows Design 104', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img105_(Windows_8).jpg', title: 'Windows Design 105', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img10_(Windows_7).jpg', title: 'Windows Design 10', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img10_(Windows_8).jpg', title: 'Windows Design 10 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img11_(Windows_7).jpg', title: 'Windows Design 11', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IMG12345.PNG', title: 'Wallpaper 116', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img12_(Windows_7).jpg', title: 'Windows Design 12 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img1_(Windows_7).jpg', title: 'Windows Design 1 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img2_(Windows_7).jpg', title: 'Windows Design 2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img2_(Windows_8).jpg', title: 'Windows Design 2 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img3_(Windows_7).jpg', title: 'Windows Design 3 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img4_(Windows_7).jpg', title: 'Windows Design 4', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img4_(Windows_8).jpg', title: 'Windows Design 4 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img5_(Windows_8).jpg', title: 'Windows Design 5 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img6_(Windows_7).jpg', title: 'Windows Design 6', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img6_(Windows_8).jpg', title: 'Windows Design 6 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img7_(Windows_8).jpg', title: 'Windows Design 7 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img8_(Windows_7).jpg', title: 'Windows Design 8 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img9_(Windows_7).jpg', title: 'Windows Design 9', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Img9_(Windows_8).jpg', title: 'Windows Design 9 v2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IN-wp1.jpg', title: 'Beautiful Wallpaper 24', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IN-wp3.jpg', title: 'Beautiful Wallpaper 23', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IN-wp4.jpg', title: 'Beautiful Wallpaper 25', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IN-wp5.jpg', title: 'Beautiful Wallpaper 26', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IN-wp6.jpg', title: 'Beautiful Wallpaper 27', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IT-wp1.jpg', title: 'Beautiful Wallpaper 28', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IT-wp2.jpg', title: 'Beautiful Wallpaper 29', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IT-wp3.jpg', title: 'Beautiful Wallpaper 30', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IT-wp4.jpg', title: 'Beautiful Wallpaper 31', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IT-wp5.jpg', title: 'Beautiful Wallpaper 32', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/IT-wp6.jpg', title: 'Beautiful Wallpaper 33', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/JP-wp1_(Windows_7).jpg', title: 'Beautiful Wallpaper 34', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/JP-wp2_(Windows_7).jpg', title: 'Beautiful Wallpaper 35', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/JP-wp3_(Windows_7).jpg', title: 'Beautiful Wallpaper 36', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/JP-wp5_(Windows_7).jpg', title: 'Beautiful Wallpaper 37', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/JP-wp6_(Windows_7).jpg', title: 'Beautiful Wallpaper 38', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/kba.jpg', title: 'Beautiful Wallpaper 39', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/kbla.jpg', title: 'Beautiful Wallpaper 40', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/khb.jpg', title: 'Beautiful Wallpaper 41', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/kn fkn.jpg', title: 'Beautiful Wallpaper 42', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/KR-wp1.jpg', title: 'Beautiful Wallpaper 43', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/KR-wp5.jpg', title: 'Beautiful Wallpaper 44', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/KR-wp6.jpg', title: 'Beautiful Wallpaper 45', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/meraj.jpg', title: 'Wallpaper 121', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/msq.jpg', title: 'Wallpaper 122', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/MultiColor_117.webp.jpg', title: 'MultiColor 117', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Multiverso.jpeg', title: 'Multiverso', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/MX-wp1.jpg', title: 'Beautiful Wallpaper 46', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/MX-wp2.jpg', title: 'Beautiful Wallpaper 47', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/MX-wp3.jpg', title: 'Beautiful Wallpaper 48', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/MX-wp4.jpg', title: 'Beautiful Wallpaper 49', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/MX-wp5.jpg', title: 'Beautiful Wallpaper 50', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/MX-wp6.jpg', title: 'Beautiful Wallpaper 51', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Nature_Wallpaper_11578.jpg', title: 'Nature Wallpaper', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/NL-wp1.jpg', title: 'Beautiful Wallpaper 17', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/NL-wp2.jpg', title: 'Beautiful Wallpaper 18', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/NL-wp3.jpg', title: 'Beautiful Wallpaper 19', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/NL-wp4.jpg', title: 'Beautiful Wallpaper 20', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/NL-wp5.jpg', title: 'Beautiful Wallpaper 21', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/NL-wp6.jpg', title: 'Beautiful Wallpaper 22', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/peakpx.jpg', title: 'Wallpaper 123', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/PL-wp1.jpg', title: 'Beautiful Wallpaper 12', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/PL-wp2.jpg', title: 'Beautiful Wallpaper 13', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/PL-wp3.jpg', title: 'Beautiful Wallpaper 14', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/PL-wp4.jpg', title: 'Beautiful Wallpaper 15', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/PL-wp6.jpg', title: 'Beautiful Wallpaper 16', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/plnt.jpg', title: 'Wallpaper 124', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/pntng.jpg', title: 'Wallpaper 125', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/quran-translations-the-holy-qur-an-text-translation-and-noble-quran-png-512_.jpg', title: 'Wallpaper 126', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/r.jpg', title: 'Wallpaper 127', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/rmzn.jpg', title: 'Wallpaper 128', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/RU-wp1.jpg', title: 'Beautiful Wallpaper 7', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/RU-wp2.jpg', title: 'Beautiful Wallpaper 8', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/RU-wp3.jpg', title: 'Beautiful Wallpaper 9', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/RU-wp5.jpg', title: 'Beautiful Wallpaper 10', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/RU-wp6.jpg', title: 'Beautiful Wallpaper 11', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/s.jpg', title: 'Wallpaper 129', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Screenshot_20230419_082102_YouTube.jpg', title: 'Wallpaper 130', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Screenshot_20230428_082042_One UI Home.jpg', title: 'Wallpaper 131', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/shbs.jpg', title: 'Wallpaper 132', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Space_62.webp.jpg', title: 'Space Nebula', description: 'A dramatic nebula with vibrant cosmic detail.' },
  { src: './Wallpapers gallery/Space_8.webp.jpg', title: 'Cosmic Flow', description: 'A cosmic wave drifting through deep space.' },
  { src: './Wallpapers gallery/str.jpg', title: 'Wallpaper 133', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/tlp.jpg', title: 'Wallpaper 134', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/tommyvideo_108.webp.jpg', title: 'Wallpaper 135', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/tommyvideo_111.webp.jpg', title: 'Wallpaper 136', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/tommyvideo_14.webp.jpg', title: 'Wallpaper 137', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TR-wp1.jpg', title: 'Beautiful Wallpaper 1', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TR-wp2.jpg', title: 'Beautiful Wallpaper 2', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TR-wp3.jpg', title: 'Beautiful Wallpaper 3', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TR-wp4.jpg', title: 'Beautiful Wallpaper 4', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TR-wp5.jpg', title: 'Beautiful Wallpaper 5', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TR-wp6.jpg', title: 'Beautiful Wallpaper 6', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TW-wp1.jpg', title: 'Beautiful Wallpaper 52', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TW-wp2.jpg', title: 'Beautiful Wallpaper 53', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TW-wp3.jpg', title: 'Beautiful Wallpaper 54', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TW-wp4.jpg', title: 'Beautiful Wallpaper 55', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TW-wp5.jpg', title: 'Beautiful Wallpaper 56', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/TW-wp6.jpg', title: 'Beautifull Wallpaper 57', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/Universe.jpg', title: 'Galaxy Horizon', description: 'Mystic universe wallpaper with glowing stars.' },
  { src: './Wallpapers gallery/unnamed (1).jpg', title: 'Beautiful Wallpaper 58', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (10).jpg', title: 'Beautiful Wallpaper 59', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (11).jpg', title: 'Beautiful Wallpaper 60', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (12).jpg', title: 'Beautiful Wallpaper 61', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (13).jpg', title: 'Beautiful Wallpaper 62', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (2).jpg', title: 'Beautiful Wallpaper 63', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (24).jpg', title: 'Beautiful Wallpaper 64', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (25).jpg', title: 'Beautiful Wallpaper 65', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (3).jpg', title: 'Beautiful Wallpaper 66', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (4).jpg', title: 'Beautiful Wallpaper 67', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (5).jpg', title: 'Beautiful Wallpaper 68', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (6).jpg', title: 'Beautiful Wallpaper 69', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (7).jpg', title: 'Beautiful Wallpaper 70', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (8).jpg', title: 'Beautiful Wallpaper 71', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed (9).jpg', title: 'Beautiful Wallpaper 72', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/unnamed.jpg', title: 'Beautiful Wallpaper 73', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/untitled(Wall2mob.com)_31479-cprw.jpg', title: 'Wallpaper 135', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/untitled(Wall2mob.com)_32197-cprw.jpg', title: 'Wallpaper 136', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/untitled(Wall2mob.com)_32559-cprw.jpg', title: 'Wallpaper 137', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ZA-wp1.jpg', title: 'Beautiful Wallpaper 74', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ZA-wp2.jpg', title: 'Beautiful Wallpaper 75', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ZA-wp3.jpg', title: 'Beautiful Wallpaper 76', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ZA-wp4.jpg', title: 'Beautiful Wallpaper 77', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ZA-wp5.jpg', title: 'Beautiful Wallpaper 78', description: 'Beautiful high-quality wallpaper' },
  { src: './Wallpapers gallery/ZA-wp6.jpg', title: 'Beautifull Wallpaper 79', description: 'Beautiful high-quality wallpaper' },
];

// DOM Elements
const gallery = document.getElementById('gallery');
const countLabel = document.getElementById('countLabel');
const searchInput = document.getElementById('searchInput');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const downloadLink = document.getElementById('downloadLink');
const closeLightbox = document.getElementById('closeLightbox');
const ownerLogo = document.getElementById('ownerLogo');

// Rating & Comment Elements
const starRating = document.getElementById('starRating');
const starButtons = document.querySelectorAll('.star');
const ratingCount = document.getElementById('ratingCount');
const averageRating = document.getElementById('averageRating');
const removeRatingBtn = document.getElementById('removeRatingBtn');
const commentText = document.getElementById('commentText');
const charCount = document.getElementById('charCount');
const submitComment = document.getElementById('submitComment');
const commentsList = document.getElementById('commentsList');

let lastFocusedElement = null;
let currentWallpaper = null;

// Storage Helper Functions
function getWallpaperFeedback(wallpaperSrc) {
  const feedback = localStorage.getItem(`feedback_${wallpaperSrc}`);
  return feedback ? JSON.parse(feedback) : { ratings: [], comments: [], userRating: null };
}

function saveWallpaperFeedback(wallpaperSrc, feedback) {
  localStorage.setItem(`feedback_${wallpaperSrc}`, JSON.stringify(feedback));
}

// Rating Functions
function updateRatingDisplay() {
  if (!currentWallpaper) return;
  const feedback = getWallpaperFeedback(currentWallpaper.src);
  const ratings = feedback.ratings || [];
  
  if (ratings.length === 0) {
    ratingCount.textContent = '0 ratings';
    averageRating.textContent = 'Average: 0.0★';
  } else {
    const avg = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
    ratingCount.textContent = `${ratings.length} rating${ratings.length !== 1 ? 's' : ''}`;
    averageRating.textContent = `Average: ${avg}★`;
  }
  
  // Update star display
  starButtons.forEach((btn) => {
    btn.classList.remove('active');
  });
  
  if (feedback.userRating) {
    starButtons.forEach((btn) => {
      if (parseInt(btn.dataset.value) <= feedback.userRating) {
        btn.classList.add('active');
      }
    });
    removeRatingBtn.classList.remove('hidden');
  } else {
    removeRatingBtn.classList.add('hidden');
  }
}

starButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!currentWallpaper) return;
    const rating = parseInt(btn.dataset.value);
    const feedback = getWallpaperFeedback(currentWallpaper.src);
    
    // Remove old rating if exists
    if (feedback.userRating) {
      const idx = feedback.ratings.indexOf(feedback.userRating);
      if (idx > -1) {
        feedback.ratings.splice(idx, 1);
      }
    }
    
    // Add new rating
    feedback.ratings.push(rating);
    feedback.userRating = rating;
    
    saveWallpaperFeedback(currentWallpaper.src, feedback);
    updateRatingDisplay();
  });
});

removeRatingBtn.addEventListener('click', () => {
  if (!currentWallpaper) return;
  const feedback = getWallpaperFeedback(currentWallpaper.src);
  
  if (feedback.userRating) {
    const idx = feedback.ratings.indexOf(feedback.userRating);
    if (idx > -1) {
      feedback.ratings.splice(idx, 1);
    }
    feedback.userRating = null;
  }
  
  saveWallpaperFeedback(currentWallpaper.src, feedback);
  updateRatingDisplay();
});

// Comment Functions
commentText.addEventListener('input', () => {
  charCount.textContent = `${commentText.value.length}/500`;
});

submitComment.addEventListener('click', () => {
  if (!currentWallpaper || !commentText.value.trim()) return;
  
  const feedback = getWallpaperFeedback(currentWallpaper.src);
  const comment = {
    id: Date.now(),
    text: commentText.value.trim(),
    timestamp: new Date().toLocaleString(),
  };
  
  feedback.comments = feedback.comments || [];
  feedback.comments.push(comment);
  
  saveWallpaperFeedback(currentWallpaper.src, feedback);
  commentText.value = '';
  charCount.textContent = '0/500';
  renderComments();
});

function renderComments() {
  if (!currentWallpaper) return;
  const feedback = getWallpaperFeedback(currentWallpaper.src);
  const comments = feedback.comments || [];
  
  commentsList.innerHTML = '';
  
  if (comments.length === 0) {
    commentsList.innerHTML = '<div class="empty-comments">No comments yet. Be the first to comment!</div>';
    return;
  }
  
  comments.forEach((comment) => {
    const commentEl = document.createElement('div');
    commentEl.className = 'comment-item';
    commentEl.innerHTML = `
      <div class="comment-header">
        <span class="comment-author">Anonymous</span>
        <span class="comment-time">${comment.timestamp}</span>
      </div>
      <div class="comment-text">${comment.text}</div>
      <div class="comment-actions">
        <button class="delete-btn" data-comment-id="${comment.id}">Delete</button>
      </div>
    `;
    
    const deleteBtn = commentEl.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      const feedback = getWallpaperFeedback(currentWallpaper.src);
      feedback.comments = feedback.comments.filter((c) => c.id !== comment.id);
      saveWallpaperFeedback(currentWallpaper.src, feedback);
      renderComments();
    });
    
    commentsList.appendChild(commentEl);
  });
}

// Gallery Functions
function createCard(item) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card';
  card.setAttribute('aria-label', `Preview ${item.title} wallpaper: ${item.description}`);
  card.innerHTML = `
    <img src="${item.src}" alt="${item.title} wallpaper preview" loading="lazy" />
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
  currentWallpaper = item;
  
  lightboxImage.src = item.src;
  lightboxImage.alt = `${item.title} wallpaper in full preview`;
  lightboxCaption.textContent = item.title;
  downloadLink.href = item.src;
  downloadLink.setAttribute('aria-label', `Download ${item.title} wallpaper`);
  
  lightbox.classList.remove('hidden');
  lightbox.setAttribute('aria-hidden', 'false');
  lightbox.inert = false;
  
  updateRatingDisplay();
  renderComments();
  
  closeLightbox.focus();
}

function close() {
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
  lightbox.classList.add('hidden');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.inert = true;
  currentWallpaper = null;
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

// Event Listeners
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
      src: './Wallpapers gallery/Ameer Hassan Shah.jpeg',
      title: 'Ameer Hassan Shah',
      description: 'Owner photo',
    });
  });
}

renderGallery(data);
