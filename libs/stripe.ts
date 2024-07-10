import Stripe from 'stripe';

export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ?? '',
    {
        apiVersion: '2022-11-15',
        appInfo: {
            name: 'Spotify Clone',
            version: '1.0.0',
            // url: 'https://github.com/khhly/spotify-clone',
            // description: 'A clone of Spotify built using Next.js and Supabase',
        },
    }
);
