import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  query,
  where,
  writeBatch,
  documentId,
} from "@firebase/firestore/lite";

export const generateOrder = ({ order }) => {


    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");

    const productsRef = collection(db, "products");

    //QUERY:
    const q = query(
        productsRef,
        where(
            documentId(),
            "in",
            carrito.map((elemento) => elemento.id)
        )
    );

    //PRODUCTOS SIN STOCK:
    const outOfStock = [];

    setLoading(true);

    //BUSQUEDA
    getDocs(q).then((res) => {
        res.docs.forEach((doc) => {
            const itemInCart = carrito.find((prod) => prod.id === doc.id);

            if (doc.data().stock >= itemInCart.quantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.quantity,
                }); //RESTA AL STOCK LA CANTIDAD DEL CARRITO
            } else {
                outOfStock.push(itemInCart); //SI NO HAY STOCK DEL PRODUCTO
            }
        });

        //COMMIT ACTUALIZACION DE STOCK SI EL ARRAY DE NO STOCK ESTA VACIO Y EL CARRITO CONTIENE PRODUCTOS
        if (outOfStock.length === 0 && carrito.length > 0) {
        
            addDoc(ordersRef, order).then((res) => {
                batch.commit();
                setOrderId(res.id); //CODIGO DE COMPRA!
                emptyCart();
                setLoading(false);
                setUserOK(false);
            });
        } else {
            <CheckoutNoStock noStock={outOfStock} />;
            // alert("Hay productos sin stock " + outOfStock.map((elem) => elem.name).join(", "));
            setLoading(false);
        }
        
    })
}