import images from './images';

const beverages = [
  {
    title: 'Iced Tea',
    price: '$26',
    Ingredients: 'Offer classic iced tea with options for flavors like lemon, peach, or mint.',
  },
  {
    title: 'Mint Lemonade',
    price: '$15',
    Ingredients: 'A twist on traditional lemonade with the addition of fresh mint leaves.'
    
  },
  {
    title: 'Mango Lassi',
    price: '$24',
    Ingredients: 'Mango pulp, yogurt, milk, and a touch of cardamom.',
  },
  {
    title: 'Ginger Ale',
    price: '$31',
    Ingredients: 'A zesty blend of ginger syrup, lemon juice, and soda water.',
  },
  {
    title: 'Pomegranate Sparkler',
    price: '$26',
    Ingredients:' Pomegranate juice mixed with soda water, a dash of lemon juice, and a hint of mint.',
  },
];

const soup = [
  {
    title: 'Chicken Corn Soup',
    price: '$20',
    Ingredients: 'Shredded chicken and sweet corn in a flavorful broth.',
  },
  {
    title: "Lentil Soup",
    price: '$16',
    Ingredients: 'Red lentils with aromatic spices.',
  },
  {
    title: 'Mixed Vegetable Soup',
    price: '$10',
    Ingredients: 'Medley of vegetables in a flavorful broth.',
  },
  {
    title: 'Mutton Stew',
    price: '$31',
    Ingredients: 'Spiced mutton stew with potatoes.',
  },
  {
    title: 'Hot and Sour Soup',
    price: '$26',
    Ingredients: 'vegetables, mushrooms, and a balance of chili and vinegar. ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Local Food Champion',
    subtitle: 'Supporting Locals',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Acknowledged for outstanding talent.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Honored for exemplary hospitality.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Celebrated as a remarkable chef.',
  },
];

export default { beverages, soup, awards };
