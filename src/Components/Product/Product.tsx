import css from './produkt.module.css';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product(props: ProductProps) {
  return (
    <div>
      <h1 className={css.sectionName}>Best selling</h1>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.name} />
        <p>Price: {props.price} credits</p>
    </div>
  );
}