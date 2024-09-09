import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CartModal({isOpen, closeModal}){
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const dialogRef = useRef(null);
    useEffect(()=>{
        if(isOpen){
            dialogRef.current.showModal();
        }
        else{
            dialogRef.current.close()
        }
    },[isOpen])
    return <>
        {createPortal(
            <dialog ref={dialogRef} onClose={closeModal} onCancel={closeModal}>
                <p>Total: {cart.total}</p>
                <ul>
                {cart.items.map(book=>(
                    <li key={book.id}>{book.title}: {book.quantity} - {book.totalPrice}</li>
                ))}
                </ul>
            </dialog>, document.getElementById('dialog')
        )}
    </>
}