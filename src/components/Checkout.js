"use client"

import getStripePromise from "@/lib/stripe";
// import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
    const handleCheckout = async () => {
        const stripe = await getStripePromise();
        // const stripePromise = await loadStripe(
        //     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        // );
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
        if (result.session) {
            stripe?.redirectToCheckout({ sessionId: result.session.id })
        }
        console.log(response)
    }
    return (
        <div className="mt-2">
            <button onClick={handleCheckout} className="bg-sky-400 py-2 px-3 rounded-md">Checkout</button>
        </div>
    );
};

export default Checkout;