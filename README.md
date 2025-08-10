# The Wild Oasis 🌿

This repository contains the **guest web application** for _The Wild Oasis_, a boutique hotel offering 8 luxury wooden cabins.  
Built with **Next.js**, it allows potential and current guests to explore the hotel, view cabin availability, make and manage reservations, and update their personal profiles.

This app shares the same API and database as the internal back-office system (_The Wild Oasis Admin_), ensuring synchronized data across all platforms.

> Web app for guests: explore, book, and manage stays  
> Connected to the same database and API as the back-office  
> Secure login and profile management  
> Reservation management without online payment

## 🚀 Features

- **Authentication**

  - Secure login and sign-up for new guests (Google authentification)
  - Automatic profile creation upon registration

- **Cabin Exploration**

  - Overview of all available cabins
  - Individual cabin detail pages with availability
  - Filter cabins by maximum guest capacity

- **Reservations**

  - Reserve a cabin for specific dates
  - Reservations marked as _unconfirmed_ until check-in at the property
  - View all past and upcoming bookings
  - Update or cancel reservations

- **Profile**

  - View and update guest information to streamline hotel check-in

- **About**
  - Dedicated page describing the hotel, concept, and philosophy

## 📄 Pages

- `/` : Homepage
- `/about` : About The Wild Oasis
- `/cabins` : List of available cabins
- `/cabins/:cabinId` : Cabin detail and availability
- `/login` : Login page
- `/account/reservations` : Guest reservation history and upcoming stays
- `/account/profile` : Guest profile page

## 🛠 Technologies

- **Next.js**
- **TailwindCSS**
- **Context API**
- **Supabase**

## 💻 Quick Start

To run **The Wild Oasis** website locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
