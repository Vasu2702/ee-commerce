import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Product.css';

function Product({ img, name, description, price }) {
  const originalPrice = price; // Assuming the original price is provided
  const discountPrice = price + (price * 0.41); // Assuming a 20% discount

  return (
    <div className='product'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={img}
          title="saree"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <div className="price-container">
            <Typography variant="body2" component="span" className="original-price">
              ₹{originalPrice.toFixed(2)}
            </Typography>
            <Typography variant="body1" component="span" className="discount-price">
              ₹{discountPrice.toFixed(2)}
            </Typography>
            <Typography variant="body2" component="div" className="discount-badge">
              41% OFF
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Product;
