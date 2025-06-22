// // app/api/create-checkout-session/route.ts
// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: '2022-11-15', // Use a stable API version
// });

// export async function POST(req: Request) {
//   try {
//     const { items } = await req.json();

//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return NextResponse.json({ message: 'No items in cart' }, { status: 400 });
//     }

//     const lineItems = items.map((item: any) => ({
//       price_data: {
//         currency: 'kes', // Set your currency (Kenyan Shillings)
//         product_data: {
//           name: item.documentTitle,
//           images: [item.imageSrc], // Optional: Display image in Stripe Checkout
//         },
//         unit_amount: item.price * 100, // Stripe expects amount in cents/lowest currency unit
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'], // Add other payment methods if needed
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`, // Redirect after success
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?canceled=true`, // Redirect if canceled
//     });

//     return NextResponse.json({ url: session.url });

//   } catch (error: any) {
//     console.error('Stripe session creation error:', error);
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }