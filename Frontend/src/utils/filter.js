export const fillter = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics', 'T-shirt', 'Office Ministry'],
    color: ['all', 'red', 'blue', 'green', 'black', 'white'],
    size: ['all', 'S', 'M', 'L', 'XL', 'XXL'],
    price: [
      {
        label: 'Under  $50',
        min: 0,
        max: 50
      },
      {
        label: '$50 - $100',
        min: 50,
        max: 100
      },
      {
        label: '$100 - $150',
        min: 100,
        max: 150
      },
      {
        label: '$150 - $200',
        min: 150,
        max: 200
      },
      {
        label: '$200 +',
        min: 200,
        max: Infinity
      }
    ],
  }