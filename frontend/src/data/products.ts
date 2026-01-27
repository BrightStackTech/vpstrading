export interface Product {
  id: number;
  name: string;
  brand: string;
  details: string;
  category: string;
  images: string[];
  price?: string;
  rating?: number;
}

export const categories = [
  'All Categories',
  'Confectionery',
  'Beverages',
  'Health-care',
  'Personal-care',
  'Toiletries'
];

export const products: Product[] = [
  // Confectionery
  {
    "id": 1,
    "name": "listerine mouth freshner",
    "brand": "listerine",
    "details": "Listerine Original Mouthwash 500ml - Kills 99.9% of germs that cause bad breath, plaque and gingivitis. Provides 24-hour protection with twice daily use. Fresh mint flavor.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1759666727/pm9nlzbfpzztdnczvwwr.webp"]
  },
  {
    "id": 2,
    "name": "Colgate Triple Action",
    "brand": "Colgate",
    "details": "Colgate Triple Action Toothpaste 100ml - Fights cavities, removes surface stains, and freshens breath. Clinically proven formula with fluoride protection for strong teeth and healthy gums.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1759666873/m8pownx6pxyvt7i7jvwx.webp"]
  },
  {
    "id": 3,
    "name": "Colgate Advance white",
    "brand": "Colgate",
    "details": "Colgate Advanced White Toothpaste 100ml - Whitening formula that removes up to 80% of surface stains. Contains micro-cleaning crystals for a brighter, whiter smile in 14 days.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1759667252/ntynmwxeuinvowepwjzo.jpg"]
  },
  {
    "id": 4,
    "name": "Colgate Max Fresh",
    "brand": "Colgate",
    "details": "Colgate Max Fresh Toothpaste 100ml - Cooling crystals for intense freshness. Long-lasting cool mint flavor that provides hours of fresh breath confidence. Cavity protection formula.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1759667101/aef1s2bekuuhdbou0tdu.jpg"]
  },
  {
    "id": 5,
    "name": "monster energy Drink",
    "brand": "Monster",
    "details": "Monster Energy Drink Green Original 350ml - Premium energy blend with taurine, caffeine, and B-vitamins. Smooth, easy drinking flavor that delivers powerful energy boost. Perfect for active lifestyles.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764934171/zlr6mfz5kovsadurtzty.png"]
  },
  {
    "id": 6,
    "name": "Duplo White",
    "brand": "Ferrero",
    "details": "Ferrero Duplo White Chocolate - Crispy wafer filled with smooth white chocolate cream and crunchy hazelnut pieces. Premium quality confectionery perfect for chocolate lovers and retail displays.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764152241/anvysjh0dyuz4y5errpy.jpg"]
  },
  {
    "id": 7,
    "name": "Duplo Chocnut",
    "brand": "Ferrero",
    "details": "Ferrero Duplo Chocnut - Delicious wafer layers with chocolate and hazelnut cream filling. Rich, crunchy texture combined with smooth chocolate taste. Popular impulse purchase item.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764152359/okgjfc9y5izz1msgcqxv.png"]
  },
  {
    "id": 8,
    "name": "Giotto",
    "brand": "Ferrero",
    "details": "Ferrero Giotto - Premium chocolate hazelnut pralines with a crispy wafer shell. Individually wrapped pieces perfect for sharing. Elegant packaging ideal for gifts and special occasions.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764152427/lt8g3vlr6l1q6gqbv4gj.jpg"]
  },
  {
    "id": 9,
    "name": "Hanuta Riegel",
    "brand": "Hanuta",
    "details": "Hanuta Wafer Chocolate Bar - Crispy wafers with creamy hazelnut filling covered in milk chocolate. German quality snack bar perfect for on-the-go consumption. High profit margin confectionery item.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764152535/losrxepzvqr8drwtdcb2.jpg"]
  },
  {
    "id": 10,
    "name": "nivea deodrants",
    "brand": "Nivea",
    "details": "Nivea Deodorant Spray 200ml - Long-lasting freshness with 48-hour protection. Anti-perspirant formula with gentle skin care. Multiple variants available including Fresh, Black & White, and Sensitive.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1759666457/oiwpd7gonrn5yfy8z4x6.webp"]
  },
  {
    "id": 11,
    "name": "ariel",
    "brand": "arieal",
    "details": "Ariel All-in-One Pods - Advanced cleaning technology in convenient pre-measured pods. Removes tough stains even in cold water. Contains stain removers, brighteners and freshness boosters for outstanding results.",
    "category": "Toiletries",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762599442/cbw7nu4pp6lsnckt9axr.jpg"]
  },
  {
    "id": 12,
    "name": "head & shoulder",
    "brand": "head & shoulder",
    "details": "Head & Shoulders Anti-Dandruff Shampoo - Available in 300ml, 600ml, and 1000ml sizes. Clinically proven to remove up to 100% of flakes. Leaves hair soft, clean and flake-free with regular use.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762599590/tnf7obhjey5turv9qn0d.jpg"]
  },
  {
    "id": 13,
    "name": "axe",
    "brand": "axe",
    "details": "Axe Body Spray 150ml - Men's deodorant body spray with long-lasting fragrance. Provides 48-hour odor protection. Multiple scent variants including Dark Temptation, Africa, and Phoenix.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764935565/ajnxz9xnjugct1xm6gmw.jpg"]
  },
  {
    "id": 14,
    "name": "dove",
    "brand": "dove",
    "details": "Dove Beauty Bar Soap 90g - Contains 1/4 moisturizing cream for soft, smooth skin. Gentle cleansing formula suitable for all skin types. Dermatologist recommended beauty bar.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762599767/h4jlwc5jbm5qxcpx65qu.webp"]
  },
  {
    "id": 15,
    "name": "dove roll on",
    "brand": "dove",
    "details": "Dove Roll-On Deodorant 50ml - Anti-perspirant with moisturizing cream for underarm care. Provides 48-hour protection against odor and wetness. Gentle formula for sensitive skin.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762599866/te116ond6uocjfkp2nic.jpg"]
  },
  {
    "id": 16,
    "name": "nivea roll ons",
    "brand": "Nivea",
    "details": "Nivea Roll-On Deodorant 50ml - Gentle anti-perspirant with skin-friendly formula. Provides 48-hour protection with added skin care benefits. Quick-drying, non-sticky application.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764935948/hq0aoje4jsejonfqqsgb.jpg"]
  },
  {
    "id": 17,
    "name": "Milka Chocolate",
    "brand": "Mondelez",
    "details": "Milka Alpine Milk Chocolate - Premium milk chocolate made from 100% Alpine milk. Smooth, creamy texture with rich cocoa flavor. Multiple sizes and flavor variants available for retail distribution.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764403774/lezvgixflwhecvt9d7zj.jpg"]
  },
  {
    "id": 18,
    "name": "Oreo",
    "brand": "Cadbury",
    "details": "Oreo Original Sandwich Biscuits - Iconic chocolate cookies with sweet vanilla creme filling. Perfect for twisting, licking, and dunking. Family-sized roll pack for sharing occasions.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764764770/qpnn0euyrojprqu2woi4.jpg"]
  },
  {
    "id": 19,
    "name": "Oreo",
    "brand": "Cadbury",
    "details": "Oreo Chocolate Sandwich Cookies - World's favorite cookie with rich chocolate wafers. Convenient multi-pack format ideal for retail shelves. High turnover impulse purchase product.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764764738/tyfgoadz01i2fk1ase9u.jpg"]
  },
  {
    "id": 20,
    "name": "Toblerone",
    "brand": "Mondelez",
    "details": "Toblerone Swiss Milk Chocolate - Distinctive triangular chocolate with honey and almond nougat. Premium Swiss chocolate perfect for gifts and special occasions. Iconic packaging recognized worldwide.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764764890/ogo159ao2v0kluehi4tq.jpg"]
  },
  {
    "id": 21,
    "name": "Quality Street",
    "brand": "Nestle",
    "details": "Nestle Quality Street Assorted Chocolates - Premium selection of individually wrapped chocolates and toffees. Perfect for sharing during celebrations and holidays. Colorful tin packaging makes it ideal for gifting.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764764989/ppym6cqjp3uckolhyuet.jpg"]
  },
  {
    "id": 22,
    "name": "Cheetos",
    "brand": "Pepsico",
    "details": "Cheetos Cheese Flavored Confectionery - Crunchy corn puffs with bold cheese flavor. Popular snack for all ages with high demand in retail outlets. Multiple size options available for different market segments.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764765263/usbllpydhjzgkiif9w3y.jpg"]
  },
  {
    "id": 23,
    "name": "Pringles",
    "brand": "Kelloyys",
    "details": "Pringles Stackable Potato Crisps - Perfectly uniform chips in iconic tube packaging. Available in multiple flavors including Original, Sour Cream & Onion, and BBQ. Convenient resealable container keeps chips fresh.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764765373/lnbkk8mvklu1apgsqcih.png"]
  },
  {
    "id": 24,
    "name": "Lays",
    "brand": "Pepsico",
    "details": "Lay's Classic Potato Chips - Made from farm-grown potatoes with simple, quality ingredients. Light, crispy texture that's perfectly salted. Best-selling potato chip brand worldwide with consistent demand.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764765614/ayoniharez0hqbngol3z.jpg"]
  },
  {
    "id": 25,
    "name": "Mentos",
    "brand": "Perfetti",
    "details": "Mentos Chewy Mints - Fresh mint candy with long-lasting flavor. Convenient roll format perfect for impulse purchases at checkout counters. Multiple fruit and mint flavors available.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764765938/oqlmgfnwg8f80flm06rq.jpg"]
  },
  {
    "id": 26,
    "name": "Redbull",
    "brand": "Redbull",
    "details": "Red Bull Energy Drink Flavored 250ml X 24 cans per carton. Origin: Egypt, Arabic text labels. Bulk quantity: 4112 cartons per 40ft container. Premium energy drink with caffeine, taurine, B-vitamins for enhanced performance and alertness.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762602422/ra5bhwmv0zemgykcupid.jpg"]
  },
  {
    "id": 27,
    "name": "lipton yellow tea",
    "brand": "Lipton",
    "details": "Lipton Yellow Label Black Tea - World's most popular tea brand with rich, full-bodied flavor. Made from selected tea leaves for consistent quality. Available in various pack sizes for retail and food service.",
    "category": "Health-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762602577/g1qhb95mfds2uswcz1aj.jpg"]
  },
  {
    "id": 28,
    "name": "pepsi",
    "brand": "pepsi",
    "details": "Pepsi Cola 500ml Plastic Bottles - Classic cola beverage with bold, refreshing taste. Convenient size for on-the-go consumption. High demand product with excellent shelf rotation in retail environments.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762602693/pr1qqnkbmzev4lfuq5qb.jpg"]
  },
  {
    "id": 29,
    "name": "Twix",
    "brand": "Mars",
    "details": "Twix Cookie Bars by Mars - Crunchy biscuit topped with caramel and covered in milk chocolate. Twin bar format perfect for sharing or two separate treats. Popular impulse purchase chocolate bar.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764325851/mhimnveqthfhhqn7gwnr.jpg"]
  },
  {
    "id": 30,
    "name": "Bounty",
    "brand": "Mars",
    "details": "Bounty Coconut Chocolate Bar - Moist coconut filling covered in milk or dark chocolate. Taste of paradise in every bite. Distinctive product with loyal customer base and consistent sales performance.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764325881/s7559a9ja8dfen4ptuk5.jpg"]
  },
  {
    "id": 31,
    "name": "Snickers",
    "brand": "Mars",
    "details": "Snickers Chocolate Bar - Packed with roasted peanuts, caramel, and nougat covered in milk chocolate. Satisfies hunger with protein and energy. World's best-selling chocolate bar with universal appeal.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764325906/tiwvm7sqfru0mbotoy1k.png"]
  },
  {
    "id": 32,
    "name": "Tic Tac",
    "brand": "Tic Tac",
    "details": "Tic Tac Fresh Breath Mints - Tiny mints in iconic flip-top pack for instant freshness. Less than 2 calories per mint. Perfect checkout counter item with high impulse purchase rate and excellent margins.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764326021/laauw02meqsyoib573yy.jpg"]
  },
  {
    "id": 33,
    "name": "M&M",
    "brand": "Mars",
    "details": "M&M's Milk Chocolate Candies - Colorful candy shell with smooth chocolate center. Fun, shareable candy perfect for all occasions. Multiple flavor variants and sizes available for different retail formats.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764326212/non6dw7so9erhui9gopu.png"]
  },
  {
    "id": 34,
    "name": "m&m",
    "brand": "Mars",
    "details": "M&M's Peanut Chocolate Candies - Crunchy roasted peanuts covered in milk chocolate and colorful candy coating. Premium snacking experience with protein from real peanuts. Family favorite for sharing and entertaining.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764326318/um9smfuuyyy8x4tfy0zm.jpg"]
  },
  {
    "id": 35,
    "name": "Skittles",
    "brand": "Mars",
    "details": "Skittles Fruit Flavored Candies - Taste the rainbow with chewy fruit candies in assorted flavors. No artificial colors or flavors. Popular among young consumers with high repeat purchase rate.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764402633/ughqq8icojsmcs18ygkg.png"]
  },
  {
    "id": 36,
    "name": "Orbits",
    "brand": "Mars",
    "details": "Orbit Sugar-Free Chewing Gum - Helps clean and freshen mouth when you can't brush. Sugar-free formula with long-lasting flavor. Dentist recommended gum for maintaining oral hygiene throughout the day.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764402712/hmhiyokh99yknqeo3dll.jpg"]
  },
  {
    "id": 37,
    "name": "Airwaves",
    "brand": "Mars",
    "details": "Airwaves Extreme Chewing Gum - Intense cooling sensation with menthol and eucalyptus. Clears airways and provides extra fresh breath. Popular among active lifestyle consumers seeking refreshment.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764402784/sccawyds0ddbi4paijit.jpg"]
  },
  {
    "id": 38,
    "name": "Mars Cream Spread",
    "brand": "Mars",
    "details": "Mars Chocolate Cream Spread - Smooth, spreadable chocolate cream perfect for breakfast or Confectionery. Contains real Mars bar flavor. Great on toast, pancakes, or straight from the jar.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764403252/ylorrjytawnpnanpg5ar.jpg"]
  },
  {
    "id": 39,
    "name": "Mars Drink",
    "brand": "Mars",
    "details": "Mars Chocolate Milk Drink - Rich, creamy chocolate beverage with Mars bar flavor. Ready-to-drink format convenient for on-the-go consumption. Appeals to both children and adults seeking indulgent refreshment.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764403331/tzxa2nazcpsu6ipaf9dg.jpg"]
  },
  {
    "id": 40,
    "name": "Mars Cookies",
    "brand": "Mars",
    "details": "Mars Chocolate Chip Cookies - Crunchy cookies with Mars chocolate chunks. Perfect for snacking or lunch boxes. Premium cookie offering that extends the Mars brand into biscuit category.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764403424/jadninti8wuujfosphug.png"]
  },
  {
    "id": 41,
    "name": "Nescafe 3 in 1 Indonesia",
    "brand": "Nescafe",
    "details": "Nescafe 3-in-1 Instant Coffee from Indonesia - 12 boxes X 30 sachets X 17.50gm per sachet. Pre-mixed coffee with creamer and sugar for perfect taste every time. Convenient single-serve format ideal for offices and quick service.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933302/vmbog8bc5z7ikrkvxoh9.jpg"]
  },
  {
    "id": 42,
    "name": "Kinder Surprise",
    "brand": "Ferrero",
    "details": "Kinder Surprise Chocolate Egg - Delicious milk chocolate shell with surprise toy inside. Appeals to children and collectors alike. Unique product combining confectionery with entertainment value.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764228897/eywonixhvz133dfha2kq.png"]
  },
  {
    "id": 43,
    "name": "Ferrero Rocher",
    "brand": "Ferrero",
    "details": "Ferrero Rocher Premium Chocolate - Whole hazelnut surrounded by creamy filling in crispy wafer shell, covered in milk chocolate and chopped hazelnuts. Elegant gold foil wrapping perfect for gifting and special occasions.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764229115/j5bhhlkupgyy6w5zmhs1.jpg"]
  },
  {
    "id": 44,
    "name": "Ferrero Rocher",
    "brand": "Ferrero",
    "details": "Ferrero Rocher Gift Box Collection - Luxurious presentation box filled with premium Ferrero Rocher chocolates. Perfect for celebrations, holidays, and corporate gifting. Premium positioning with high perceived value.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764229160/b8nqftxaye85lbiyo4pn.jpg"]
  },
  {
    "id": 45,
    "name": "Ferrero Collection",
    "brand": "Ferrero",
    "details": "Ferrero Collection Assorted Chocolates - Variety box featuring Ferrero Rocher, Raffaello, and Ferrero Rondnoir. Three distinct taste experiences in one elegant package. Ideal for sharing and entertaining guests.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764229007/dvyjphl4d8cuda4bznrr.jpg"]
  },
  {
    "id": 46,
    "name": "Raffaello",
    "brand": "Ferrero",
    "details": "Raffaello Coconut Almond Confection - Whole almond surrounded by creamy coconut filling, wrapped in crispy wafer and white coconut flakes. Light, elegant treat perfect for special moments. Premium gift option.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764229257/kfoq7n1i2lfy9zkg99eu.jpg"]
  },
  {
    "id": 47,
    "name": "Raffaello Coconut and Almond",
    "brand": "Ferrero",
    "details": "Raffaello Bar Format - Convenient bar version of classic Raffaello pralines. Creamy coconut and almond taste in portable format. Perfect for on-the-go indulgence and impulse purchases.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764230062/zq2v2mpahkxe2y1qiarz.jpg"]
  },
  {
    "id": 48,
    "name": "Nutella",
    "brand": "Nutella",
    "details": "Nutella Hazelnut Spread with Cocoa - World's favorite chocolate hazelnut spread made with quality ingredients. Contains 50+ hazelnuts per jar. Perfect for breakfast, Confectionery, and baking. Family staple product.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764325317/jbepjfmhrz5pldf0mx7q.jpg"]
  },
  {
    "id": 49,
    "name": "Nutella 3KG",
    "brand": "Nutella",
    "details": "Nutella 3kg Catering Size - Large format ideal for food service, bakeries, and heavy household users. Economic value pack with same great taste. Professional size for commercial applications and large families.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764325343/foamr5jq1pdlnxa2chlo.jpg"]
  },
  {
    "id": 50,
    "name": "Coffee Mate 400gm",
    "brand": "Nestle",
    "details": "Coffee Mate Non-Dairy Creamer 400gm - 15 units per carton. Origin: Thailand. Bulk quantity: 3280 cartons per 40ft container. Smooth, rich creamer that perfectly complements coffee. Long shelf life ideal for wholesale distribution.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764159203/lzzmgnqitq6n4l8n7wrs.jpg"]
  },
  {
    "id": 51,
    "name": "Coffee Mate 1kg",
    "brand": "Nestle",
    "details": "Coffee Mate Non-Dairy Creamer 1kg - 12 units per carton. Origin: Thailand. Bulk quantity: 1800 cartons per 40ft container. Premium quality coffee companion for smooth, creamy taste. Cost-effective large format for frequent users.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1762599244/gjpcbxm8nbcfcex15xl3.jpg"]
  },
  {
    "id": 52,
    "name": "Mars",
    "brand": "Mars",
    "details": "Mars Classic Chocolate Bar - Original Mars bar with nougat and caramel covered in milk chocolate. Iconic taste that's been loved for generations. Consistent best-seller with strong brand recognition and consumer loyalty.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764325645/sgq4oalrelyzcgq0bnxl.jpg"]
  },
  {
    "id": 53,
    "name": "Nescafe matinal",
    "brand": "Nescafe",
    "details": "Nescafe Matinal Coffee - Specially blended instant coffee for morning enjoyment. Smooth, balanced flavor that's perfect to start your day. Popular choice in European markets with growing demand.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264375/ehwqu9d74sngepsllw2k.jpg"]
  },
  {
    "id": 54,
    "name": "Nescafe 190g",
    "brand": "Nescafe",
    "details": "Nescafe Classic Instant Coffee 190g - Family size jar of premium instant coffee. Rich aroma and full-bodied taste from selected coffee beans. Convenient size for regular coffee drinkers.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264467/gtpvanorf5ychjatolia.jpg"]
  },
  {
    "id": 55,
    "name": "Nescafe 95g",
    "brand": "Nescafe",
    "details": "Nescafe Classic Instant Coffee 95g - Medium size format perfect for households. Pure coffee with distinctive taste and aroma. Economic option with excellent quality-to-price ratio for budget-conscious consumers.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264520/kbl4eubdnuwyybakqfgo.png"]
  },
  {
    "id": 56,
    "name": "Nescafe 47.5g",
    "brand": "Nescafe",
    "details": "Nescafe Classic Instant Coffee 47.5g - Compact size ideal for singles or trial purchase. Same premium coffee quality in smaller, affordable format. Perfect for retail checkout displays and first-time customers.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264654/nzoa7are4toi0p3dse2d.png"]
  },
  {
    "id": 57,
    "name": "Lipton 100g",
    "brand": "Lipton",
    "details": "Lipton Yellow Label Tea 100g - Premium black tea blend for authentic tea experience. Small format perfect for trying or light tea drinkers. Convenient size for retail impulse purchases and sampling.",
    "category": "Health-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264742/kintjuvlbhcffj1lrslz.png"]
  },
  {
    "id": 58,
    "name": "Heineken Beer Cane",
    "brand": "Heineken",
    "details": "Heineken Lager Beer Cans - Premium quality lager with distinctive taste. Convenient canned format for easy portability. International beer brand with strong consumer recognition and premium positioning.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264904/or1zjh58xgyhnnpj5gmp.png"]
  },
  {
    "id": 59,
    "name": "Heineken beer Glass",
    "brand": "Heineken",
    "details": "Heineken Lager Beer Glass Bottles - Classic green bottle packaging for premium presentation. Authentic beer experience preferred by enthusiasts. Perfect for bars, restaurants, and retail sales.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264943/z4hosbcnxhws1slz98tt.png"]
  },
  {
    "id": 60,
    "name": "Corona Cero",
    "brand": "Corona Cero",
    "details": "Corona Cero Non-Alcoholic Beer - 0.0% alcohol with authentic Corona taste. Perfect for those seeking beer flavor without alcohol content. Growing market segment for health-conscious consumers and designated drivers.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765265093/it6jlfg80jpjcgocxqzr.jpg"]
  },
  {
    "id": 61,
    "name": "Nivea Roll on",
    "brand": "Nivea",
    "details": "Nivea Roll-On Deodorant Set - Multi-pack featuring various Nivea roll-on variants. Excellent value offering for retailers. Popular Personal-care essentials with consistent consumer demand and competitive pricing.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765265164/islofixmfbnyjvbnbjn4.png"]
  },
  {
    "id": 62,
    "name": "Mars Minis",
    "brand": "Mars",
    "details": "Mars Miniatures Mix Bag - Assorted mini Mars chocolate bars perfect for sharing. Contains classic favorites in bite-size format. Ideal for parties, offices, and family gatherings. High-volume seasonal item.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765265286/w2dp4n6qo1yfqwsmsss5.png"]
  },
  {
    "id": 63,
    "name": "Nescafe Malaysia",
    "brand": "Nescafe",
    "details": "Nescafe 3-in-1 from Malaysia - 24 boxes with 25 sachets per box, 18gm each sachet. Pre-mixed instant coffee with perfect blend of coffee, creamer, and sugar. Popular in Asian markets with authentic local taste profile.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765265413/vjk69uetpnzcxpljoly6.png"]
  },
  {
    "id": 64,
    "name": "Nescafe 3 in 1 UAE",
    "brand": "Nescafe",
    "details": "Nescafe 3-in-1 UAE Market - Specially formulated for Middle East market preferences. Instant coffee mix with Arabic text packaging. Premium quality meeting local taste requirements and regulatory standards.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765265493/y8bhnalnowek5znca2j5.png"]
  },
  {
    "id": 65,
    "name": "Nutella 200g",
    "brand": "Nutella",
    "details": "Nutella Hazelnut Spread 200g - Small format ideal for singles or trial size. Same delicious taste in compact, affordable jar. Perfect entry point for new customers and travel-friendly size.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018608/kpbujcu2fbx5oseh8zms.png"]
  },
  {
    "id": 66,
    "name": "Nutella Go",
    "brand": "Nutella",
    "details": "Nutella & Go Snack Pack - Portable snack with Nutella spread and breadsticks for dipping. Perfect on-the-go treat combining taste and convenience. Popular lunch box item and impulse purchase at convenience stores.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018654/mmaalvylmg461bthfkjx.png"]
  },
  {
    "id": 67,
    "name": "Nutella Biscuits",
    "brand": "Nutella",
    "details": "Nutella Biscuits - Crunchy biscuits with creamy Nutella filling. Brand extension combining iconic spread with cookie format. Innovative product appealing to Nutella fans seeking new consumption occasions.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018790/cjwtu26ykhiuw8xmy3zz.png"]
  },
  {
    "id": 68,
    "name": "Nutella B Ready",
    "brand": "Nutella",
    "details": "Nutella B-Ready Crispy Wafer - Crunchy wafer shell filled with Nutella hazelnut spread. Individually wrapped for freshness and convenience. Perfect breakfast on-the-go or anytime snack with familiar taste.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018825/vcq65mhk1tqkauwwya0l.png"]
  },
  {
    "id": 69,
    "name": "Orbit Extra Gum",
    "brand": "Mars",
    "details": "Extra Sugar-Free Chewing Gum - Long-lasting flavor in various refreshing tastes. Sugar-free formula helps protect teeth between brushing. Professional packaging suitable for office environments and meetings.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765263019/ulcbr56rwzailezrtfwb.jpg"]
  },
  {
    "id": 70,
    "name": "Kitkat Chunky",
    "brand": "Nestle",
    "details": "KitKat Chunky Chocolate Bar - Extra thick version of classic KitKat with more chocolate and wafer. Perfect treat for serious chocolate lovers. Premium positioning with larger serving size for better value perception.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765263173/std1i3bvireyqb0e8rzx.png"]
  },
  {
    "id": 71,
    "name": "Kitkat 2 finger",
    "brand": "Nestle",
    "details": "KitKat 2-Finger Chocolate Bar - Classic crispy wafer covered in smooth milk chocolate. Perfect portion size for light snacking. Iconic 'Have a Break' chocolate with global recognition and steady demand.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765263241/gqfnqnlk74jlvmgspckb.jpg"]
  },
  {
    "id": 72,
    "name": "Celebration Pack",
    "brand": "Cadbury",
    "details": "Cadbury Celebrations Assorted Chocolates - Premium gift box with variety of Cadbury miniature chocolates. Perfect for festivities, celebrations, and gifting occasions. Attractive packaging creates strong shelf presence and gift appeal.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765263534/rbcoeuz5c02pddcprran.jpg"]
  },
  {
    "id": 73,
    "name": "Lindt Chocolate",
    "brand": "Lindt",
    "details": "Lindt Swiss Premium Chocolate - Finest Swiss chocolate with smooth, velvety texture. Premium positioning for discerning chocolate lovers. Luxury confectionery perfect for gifts and special occasions with high perceived value.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765263706/fhc0vwytcmmh0ceadgal.jpg"]
  },
  {
    "id": 74,
    "name": "Biscof Spread",
    "brand": "Lotus",
    "details": "Lotus Biscoff Cookie Butter Spread - Available in Crunchy and Smooth varieties. Unique caramelized biscuit flavor in spreadable form. Cult favorite product with growing fan base and social media popularity.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765263831/bjqwyh9fs3dtgctalfe1.jpg"]
  },
  {
    "id": 75,
    "name": "Pringles 40g",
    "brand": "Kelloyys",
    "details": "Pringles Potato Crisps 40g - Single-serve mini tube format perfect for individual consumption. Convenient size for lunch boxes and grab-and-go purchases. Popular impulse item with attractive margins for retailers.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264002/lubx7oaounxtlu5gphlf.png"]
  },
  {
    "id": 76,
    "name": "Nescafe 2g",
    "brand": "Nescafe",
    "details": "Nescafe Instant Coffee 2g Sachets - Ultra-convenient single-serve portion for one perfect cup. Ideal for travel, offices, and hotels. Excellent sampling format and vending machine compatible product.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765264152/juvoa8jvo8jlbh3sozbu.jpg"]
  },
  {
    "id": 77,
    "name": "Nivea Deodorant",
    "brand": "Nivea",
    "details": "Nivea Deodorant Spray Collection - Range of deodorant sprays for men and women. Long-lasting protection with gentle skin care formula. Trusted Personal-care brand with strong market presence and consumer loyalty.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764935890/mxsclysh0fvwygyzmmg0.jpg"]
  },
  {
    "id": 78,
    "name": "Nivea Roll on",
    "brand": "Nivea",
    "details": "Nivea Roll-On Anti-Perspirant - Reliable 48-hour protection with caring formula. Non-sticky, quick-drying application for all-day freshness. Value pack format offering excellent price point for consumers.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1759666303/flpxei2rldxsbjsubsfg.jpg"]
  },
  {
    "id": 79,
    "name": "Kinder Bueno",
    "brand": "Ferrero",
    "details": "Kinder Bueno Chocolate Bar - Crispy wafer with smooth hazelnut cream filling covered in milk chocolate. Premium snacking experience combining multiple textures. Growing popularity among adult consumers seeking indulgent treats.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765010557/i72cu2xmqh29drc3nxpn.jpg"]
  },
  {
    "id": 80,
    "name": "Kinder Cards",
    "brand": "Ferrero",
    "details": "Kinder Cards Chocolate Biscuits - Wafer biscuits with milky filling between layers of Kinder chocolate. Perfect for sharing with family or enjoying as personal treat. Unique format in growing biscuit-chocolate category.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765010592/qejhkhvdusmrxwvcqwfm.png"]
  },
  {
    "id": 81,
    "name": "Kinder chocolate",
    "brand": "Ferrero",
    "details": "Kinder Chocolate Bars - Individually wrapped milk chocolate bars with milky filling. Specially designed for children with extra portion of milk. Trusted brand for parents seeking quality chocolate treats for kids.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765010627/tppjwhfwqodhzlwtw4ha.jpg"]
  },
  {
    "id": 82,
    "name": "Kinder Country",
    "brand": "Ferrero",
    "details": "Kinder Country Cereal Bar - Chocolate bar with puffed cereals for crunchy texture. Combines Kinder taste with wholesome ingredients. Perfect breakfast companion or energizing snack for active lifestyles.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765010682/yn3zlzfawkbks1zbfq1t.png"]
  },
  {
    "id": 83,
    "name": "Kinder Schoko Bons Crispy",
    "brand": "Ferrero",
    "details": "Kinder Schoko-Bons Crispy - Bite-sized chocolate treats with hazelnut filling and crispy shell. Fun format perfect for sharing occasions. Popular party and celebration confectionery with strong appeal to all ages.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765010803/itrhkfvwiuz8bgjnruw4.jpg"]
  },
  {
    "id": 84,
    "name": "Roucher 200g",
    "brand": "Ferrero",
    "details": "Ferrero Rocher 200g Gift Box - Premium chocolate pralines in elegant presentation. Mid-size format perfect for personal gifting and entertaining. Excellent balance between affordability and luxury positioning.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765010874/lewnxlffqmzhxbf9dq2y.jpg"]
  },
  {
    "id": 85,
    "name": "Raffaello 20g",
    "brand": "Ferrero",
    "details": "Raffaello Mini Pack 20g - Travel-size portion of coconut almond confection. Perfect impulse purchase at checkout counters. Convenient format for sampling and trial without commitment to larger pack.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018370/buqgflzowtqobakcvcz3.jpg"]
  },
  {
    "id": 86,
    "name": "Raffaello 230g",
    "brand": "Ferrero",
    "details": "Raffaello Gift Box 230g - Family size presentation of coconut almond pralines. Premium packaging suitable for gifting occasions and entertaining guests. Elegant option for hosts and gift givers seeking refined treats.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018422/jq37vcuyoonwnom8nb5h.png"]
  },
  {
    "id": 87,
    "name": "Nutella 750g",
    "brand": "Nutella",
    "details": "Nutella Hazelnut Spread 750g - Large family jar perfect for frequent users. Economic value size for households loving Nutella. Popular size offering better value per gram for loyal consumers.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018544/wlngfa9reglogxyydouc.png"]
  },
  {
    "id": 88,
    "name": "Nutella 825g",
    "brand": "Nutella",
    "details": "Nutella Hazelnut Spread 825g - Extra-large format for ultimate value. Market-leading size in many regions with best price per gram. Essential stock item for retailers serving Nutella enthusiasts and large families.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1765018574/lvkyv4t1ifqetsba7wfh.png"]
  },
  {
    "id": 89,
    "name": "Lipton Pyramid Tea",
    "brand": "Lipton",
    "details": "Lipton Pyramid Tea Bags - Premium whole leaf tea in pyramid sachets for better infusion. Enhanced flavor release with distinctive packaging. Luxury tea experience at accessible price point targeting quality-conscious consumers.",
    "category": "Health-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933818/rldwonrt4hygbnuoqh8v.png"]
  },
  {
    "id": 90,
    "name": "Cococola Cans",
    "brand": "Cococola",
    "details": "Coca-Cola Classic Cans - World's most recognized soft drink in convenient can format. 330ml standard serving perfect for individual consumption. Essential product for any beverage retail operation with guaranteed turnover.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933935/bh2kch77z4bwbesugxxe.jpg"]
  },
  {
    "id": 91,
    "name": "Fanta Cans",
    "brand": "Cococola",
    "details": "Fanta Orange Soft Drink Cans - Bright, bubbly orange flavored carbonated beverage. Popular choice for children and young adults. Vibrant packaging creates strong visual merchandising opportunities on retail shelves.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764934018/lmi4z750vasbmfnf26ft.jpg"]
  },
  {
    "id": 92,
    "name": "Monster Energy drinks",
    "brand": "Monster",
    "details": "Monster Energy Drink Cans - Variety pack featuring multiple Monster energy flavors. High caffeine content for maximum energy boost. Leading energy drink brand with strong following among young active consumers.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764934171/zlr6mfz5kovsadurtzty.png"]
  },
  {
    "id": 93,
    "name": "Redbull Assorted",
    "brand": "Redbull",
    "details": "Red Bull Assorted Flavors - Mixed pack with Original, Sugar-free, and various flavor editions. Vitalizes body and mind with functional ingredients. Premium energy drink commanding highest price point in category.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764934369/gmai13q5oybrqerovfht.jpg"]
  },
  {
    "id": 94,
    "name": "Redbull Energy Drink",
    "brand": "Redbull",
    "details": "Red Bull Energy Drink Original - Classic formula with caffeine, taurine, and B-vitamins. Improves performance, concentration and reaction speed. Market leader in energy drink category with unmatched brand equity.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764934412/eencsj3qkuygne0ziy8n.jpg"]
  },
  {
    "id": 95,
    "name": "Pepsi Cane",
    "brand": "Pepsico",
    "details": "Pepsi Cola Cans 330ml - Bold, refreshing cola taste in convenient can format. Strong brand recognition competing with Coca-Cola. Essential SKU for complete beverage offering in any retail environment.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764934454/irfhfbkwmpbo15tijgbp.png"]
  },
  {
    "id": 96,
    "name": "Dove Shampoo",
    "brand": "Hindustan Unilever",
    "details": "Dove Nourishing Shampoo - Gentle cleansing with nourishing formula for healthy-looking hair. Contains Pro-Moisture complex for soft, smooth results. Dermatologist recommended brand trusted by millions worldwide.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764934648/macxohznpt9h9trzlvpf.jpg"]
  },
  {
    "id": 97,
    "name": "Dove Soap",
    "brand": "Hindustan Unilever",
    "details": "Dove Beauty Bar Multi-Pack - Contains 1/4 moisturizing cream for gentle cleansing. Multiple bars in value pack for family use. Number one dermatologist recommended cleansing bar with proven mildness.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764935183/nhpkrvmod4jgyomoed9p.jpg"]
  },
  {
    "id": 98,
    "name": "Dove Deodorant",
    "brand": "Hindustan Unilever",
    "details": "Dove Anti-Perspirant Deodorant - Provides 48-hour protection with 1/4 moisturizing cream technology. Gentle formula caring for underarm skin. Available in multiple fragrances for different preferences and occasions.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764935488/tnvtxod2k8xhbv29wfe8.png"]
  },
  {
    "id": 99,
    "name": "Axe Deodorant",
    "brand": "Hindustan Unilever",
    "details": "Axe Body Spray for Men - Masculine fragrances with powerful, long-lasting scent. Wide range of variants appealing to different style preferences. Leading men's grooming brand with strong market presence.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764935565/ajnxz9xnjugct1xm6gmw.jpg"]
  },
  {
    "id": 100,
    "name": "Colgate Toothpaste",
    "brand": "Colgate",
    "details": "Colgate Total Toothpaste - Advanced formula with 12-hour germ protection. Fights plaque, gingivitis, and bad breath comprehensively. Number one toothpaste brand recommended by dentists globally for complete oral care.",
    "category": "Personal-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764935813/wcwzt3t81dytqvmte8wi.jpg"]
  },
  {
    "id": 101,
    "name": "Kinder Joy",
    "brand": "Ferrero",
    "details": "Kinder Joy Chocolate Egg - Two separate halves with chocolate treat and surprise toy. Interactive confectionery experience for children. Unique product format combining taste with play value for maximum appeal.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764152673/cdqp4fhskkr1ezfwt9uq.png"]
  },
  {
    "id": 102,
    "name": "Biscoff Spreads",
    "brand": "Lotus",
    "details": "Lotus Biscoff Cookie Butter Spread Collection - Available in smooth and crunchy variants. Unique caramelized biscuit flavor that's become a global sensation. Premium spread perfect for breakfast, desserts, and snacking.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764932808/rdm6cbaa4lexksscdb5v.jpg"]
  },
  {
    "id": 103,
    "name": "Biscoff Biscuit",
    "brand": "Lotus",
    "details": "Lotus Biscoff Original Caramelized Biscuits - Thin, crunchy cookies with distinctive caramel taste. Famous European biscuit served with coffee worldwide. Natural ingredients with no artificial colors or flavors.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764932836/cmqqvnhklwqjcxlblsyt.jpg"]
  },
  {
    "id": 104,
    "name": "Takis",
    "brand": "Takis",
    "details": "Takis Rolled Tortilla Chips - Intense flavor rolled corn Confectionery with spicy kick. Trending snack popular among younger demographics. Bold flavors and unique format create strong shelf presence and social media buzz.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764932898/wiic4ili4hdzjdvozhqs.jpg"]
  },
  {
    "id": 105,
    "name": "Fruittella",
    "brand": "Perfetti",
    "details": "Fruittella Chewy Fruit Candies - Soft, juicy candies bursting with real fruit flavor. Made with natural fruit juice for authentic taste. Popular children's candy with strong brand recognition and appeal.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764932996/xan2skcgnrl1qhrxpmm7.jpg"]
  },
  {
    "id": 106,
    "name": "Trolli Burger",
    "brand": "Trolli",
    "details": "Trolli Gummy Burger - Fun burger-shaped gummy candy with multiple layers. Novelty confectionery perfect for kids and social sharing. Eye-catching product creating conversation and strong impulse purchase appeal.",
    "category": "Confectionery",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933075/z0gijjspsgfpzhlewo3j.jpg"]
  },
  {
    "id": 107,
    "name": "Davidoff Coffee",
    "brand": "Davidoff",
    "details": "Davidoff Premium Instant Coffee - Luxury coffee brand offering refined taste experience. Premium positioning with sophisticated packaging. Appeals to discerning coffee lovers seeking exceptional quality and flavor.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933176/ob4xzz4tku43rfvh2zgp.jpg"]
  },
  {
    "id": 108,
    "name": "Nescafe 3 in 1",
    "brand": "Nescafe",
    "details": "Nescafe 3-in-1 Classic Instant Coffee Mix - Perfectly balanced blend of coffee, creamer, and sugar in convenient sachets. Just add hot water for instant delicious coffee. Most popular instant coffee format worldwide.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933302/vmbog8bc5z7ikrkvxoh9.jpg"]
  },
  {
    "id": 109,
    "name": "Nescafe Gold",
    "brand": "Nescafe",
    "details": "Nescafe Gold Premium Instant Coffee - Carefully selected Arabica beans for smooth, aromatic coffee. Premium range offering barista-style coffee at home. Sophisticated taste for special moments and discerning consumers.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933402/qmfznozfn9712gxm6rgp.jpg"]
  },
  {
    "id": 110,
    "name": "Nescafe Classic",
    "brand": "Nescafe",
    "details": "Nescafe Classic Pure Instant Coffee - Rich and full-bodied pure coffee with no additives. World's favorite coffee for over 80 years. Reliable quality and taste consumers trust for their daily coffee ritual.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933438/gj25osznivr0ydw7m3qu.jpg"]
  },
  {
    "id": 111,
    "name": "Starbucks Nespresso Capsules",
    "brand": "Starbucks",
    "details": "Starbucks Nespresso Compatible Capsules - Premium coffee shop experience at home with Nespresso machines. Authentic Starbucks roasts in convenient capsule format. Brings café quality to home brewing enthusiasts.",
    "category": "Beverages",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933560/w9bdvjfjrzzcy2crymng.png"]
  },
  {
    "id": 112,
    "name": "Lipton Black Tea",
    "brand": "Lipton",
    "details": "Lipton Pure Black Tea - Classic black tea with rich, full-bodied flavor from selected tea gardens. Perfect hot or iced for refreshing beverage any time. Trusted tea brand delivering consistent quality for generations.",
    "category": "Health-care",
    "images": ["https://res.cloudinary.com/domckasfk/image/upload/v1764933676/aabm12cbrfjfe2e9me7y.jpg"]
  }
];

// Featured Products for Home Page (6 products)
export const featuredProducts: Product[] = [
  {
    id: 51,
    name: 'Coffee Mate 1kg',
    brand: 'Nestle',
    details: 'Coffee Mate Non-Dairy Creamer 1kg - 12 units per carton. Origin: Thailand. Bulk quantity: 1800 cartons per 40ft container. Premium quality coffee companion for smooth, creamy taste. Cost-effective large format for frequent users.',
    category: 'Confectionery',
    images: ['https://res.cloudinary.com/domckasfk/image/upload/v1762599244/gjpcbxm8nbcfcex15xl3.jpg'],
  },
  {
    id: 26,
    name: 'Redbull',
    brand: 'Redbull',
    details: 'Red Bull Energy Drink Flavored 250ml X 24 cans per carton. Origin: Egypt, Arabic text labels. Bulk quantity: 4112 cartons per 40ft container. Premium energy drink with caffeine, taurine, B-vitamins for enhanced performance and alertness.',
    category: 'Beverages',
    images: ['https://res.cloudinary.com/domckasfk/image/upload/v1762602422/ra5bhwmv0zemgykcupid.jpg'],
  },
  {
    id: 43,
    name: 'Ferrero Rocher',
    brand: 'Ferrero',
    details: 'Ferrero Rocher Premium Chocolate - Whole hazelnut surrounded by creamy filling in crispy wafer shell, covered in milk chocolate and chopped hazelnuts. Elegant gold foil wrapping perfect for gifting and special occasions.',
    category: 'Confectionery',
    images: ['https://res.cloudinary.com/domckasfk/image/upload/v1764229160/b8nqftxaye85lbiyo4pn.jpg'],
  },
  {
    id: 48,
    name: 'Nutella',
    brand: 'Nutella',
    details: 'Nutella Hazelnut Spread with Cocoa - World\'s favorite chocolate hazelnut spread made with quality ingredients. Contains 50+ hazelnants per jar. Perfect for breakfast, Confectionery, and baking. Family staple product.',
    category: 'Confectionery',
    images: ['https://res.cloudinary.com/domckasfk/image/upload/v1765018574/lvkyv4t1ifqetsba7wfh.png'],
  },
  {
    id: 23,
    name: 'Pringles',
    brand: 'Kelloyys',
    details: 'Pringles Stackable Potato Crisps - Perfectly uniform chips in iconic tube packaging. Available in multiple flavors including Original, Sour Cream & Onion, and BBQ. Convenient resealable container keeps chips fresh.',
    category: 'Confectionery',
    images: ['https://res.cloudinary.com/domckasfk/image/upload/v1764765373/lnbkk8mvklu1apgsqcih.png'],
  },
  {
    id: 96,
    name: 'Dove Shampoo',
    brand: 'HIndustan Uneliver',
    details: 'Dove Nourishing Shampoo - Gentle cleansing with nourishing formula for healthy-looking hair. Contains Pro-Moisture complex for soft, smooth results. Dermatologist recommended brand trusted by millions worldwide.',
    category: 'Personal-care',
    images: ['https://res.cloudinary.com/domckasfk/image/upload/v1764934648/macxohznpt9h9trzlvpf.jpg'],
  },
];


