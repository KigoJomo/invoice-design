import { InvoiceDetails } from '../types/invoice';

export const invoiceData: InvoiceDetails = {
  invoiceNumber: '00321',
  date: '03 March 2025',
  client: {
    name: 'GuardCore Technologies',
    email: 'info@guardcore.co.ke',
    location: 'Nairobi, Kenya',
  },
  items: [
    {
      name: 'Landing Page Design',
      quantity: 1,
      unitPrice: 3000,
      total: 3000,
    },
    {
      name: 'Copywriting',
      quantity: 1,
      unitPrice: 2000,
      total: 2000,
    },
    {
      name: 'Programming & Deployment',
      quantity: 1,
      unitPrice: 10000,
      total: 10000,
    },
  ],
  subtotal: 15000,
  tax: {
    percentage: 0,
    amount: 0,
  },
  total: 15000,
  paymentInfo: {
    method: 'Mpesa',
    accountName: 'Francis Kigo',
    accountNumber: '0114900087',
    dueDate: '31 March 2025',
  },
  sender: {
    name: 'Jomo Kigo',
    location: 'Nyeri, Kenya',
    email: 'jomokigo@example.com',
    website: 'jomokigo.vercel.app',
  },
};