// app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  try {
    const { cart } = await request.json();

    // Get the domain so Stripe knows where to send the user back to
    const origin = request.headers.get('origin') || 'http://localhost:3000';

    // Format your cart items for Stripe
    const lineItems = cart.map((item: any) => ({
      price_data: {
        currency: 'gbp', // British Pounds
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // Stripe calculates in pence
      },
      quantity: 1, 
    }));

    // Ask Stripe to create a secure checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/preview/success`,
      cancel_url: `${origin}/preview/checkout`,
    });

    // Send the secure Stripe URL back to the front-end
    return NextResponse.json({ url: session.url });
    
  } catch (error: any) {
    console.error("Stripe Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}