import { useEffect } from 'react';
import PurchaseFirstBlock from '../components/purchaseFirstBlock';
import PurchaseTrucks from '../components/purchaseTrucks';


function Purchase() {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div>
      <PurchaseFirstBlock />
      <PurchaseTrucks />
    </div>
  );
}

export default Purchase;