export interface InvoiceItem {
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceDetails {
  invoiceNumber: string;
  date: string;
  client: {
    name: string;
    email: string;
    location: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  tax: {
    percentage: number;
    amount: number;
  };
  total: number;
  paymentInfo: {
    method: string;
    accountName: string;
    accountNumber: string;
    dueDate: string;
  };
  sender: {
    name: string;
    location: string;
    email: string;
    website: string;
  };
}