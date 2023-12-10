"use client"

import getStripePromise from "@/lib/stripe";

const Checkout = () => {
    const handleCheckout = async () => {
        const stripe = await getStripePromise();
        const product = [{
            id: 1,
            name: 'car',
            price: 200,
            quantity: 2,
        }]

        const response = await fetch('api/stripe-session', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            cache: 'no-cache',
            body: JSON.stringify(product)
        })
        const result = await response.json();
        console.log(result)
        if (result) {
            stripe?.redirectToCheckout({ sessionId: result.id })
        }

    }
    return (
        <div className="mt-2">
            <button onClick={handleCheckout} className="bg-sky-400 py-2 px-3 rounded-md">Checkout</button>
        </div>
    );
};

export default Checkout;