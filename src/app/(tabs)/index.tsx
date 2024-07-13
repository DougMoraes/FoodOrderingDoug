import { ScrollView } from 'react-native';
import ProductListItem from '../../components/ProductListItem';
import products from 'assets/data/products';

export default function MenuScreen() {
  return (
    <ScrollView>
      {products.map(product => <ProductListItem product={product} key={product.id}/>)}
    </ScrollView>
  );
}
