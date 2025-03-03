import { InvoiceDetails } from '@/types/invoice';
import Image from 'next/image';
import Link from 'next/link';

interface InvoiceProps {
  data: InvoiceDetails;
}

export default function Invoice({ data }: InvoiceProps) {

  return (
    <div className="w-screen md:w-3/5 py-12 px-12 mx-auto shadow-md bg-amber-50">

      {/* Header with Logo */}
      <div className="w-full flex flex-col mb-8">
        <Image src="https://jomokigo.vercel.app/images/logo-dark.png" alt="Logo" width={75} height={75} />
        <div className="text-2xl abril">Jomo Kigo</div>
      </div>

      {/* Invoice Info */}
      <div className="w-full flex justify-between mb-8">
        <div>
          <p className="font-bold mb-1">BILLED TO:</p>
          <p>{data.client.name}</p>
          <p>{data.client.email}</p>
          <p>{data.client.location}</p>
        </div>

        <div className="text-right flex flex-col">
          <p className="font-bold">Invoice No. {data.invoiceNumber}</p>
          <p>{data.date}</p>
        </div>
      </div>

      <hr className="border-t border-gray-200 my-0" />

      {/* Invoice Table */}
      <div className="w-full">
        <table className="w-full">
          <thead className='w-full'>
            <tr className="w-full border-b border-gray-200">
              <th className="text-left py-3 px-2">Item</th>
              <th className="text-left py-3 px-2">Quantity</th>
              <th className="text-left py-3 px-2">Unit Price</th>
              <th className="text-right py-3 px-2">Total</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {data.items.map((item, index) => (
              <tr key={index} className="w-full border-b border-gray-100">
                <td className="py-3 px-2">{item.name}</td>
                <td className="py-3 px-2">{item.quantity}</td>
                <td className="py-3 px-2">
                  Ksh {item.unitPrice.toLocaleString()}
                </td>
                <td className="py-3 px-2 text-right">
                  Ksh {item.total.toLocaleString()}
                </td>
              </tr>
            ))}
            <tr className='w-full'>
              <td colSpan={3} className="text-right py-3 px-2 font-medium">
                Subtotal
              </td>
              <td className="py-3 px-2 text-right">
                Ksh {data.subtotal.toLocaleString()}
              </td>
            </tr>
            <tr className='w-full'>
              <td colSpan={3} className="text-right py-3 px-2 font-medium">
                Tax ({data.tax.percentage}%)
              </td>
              <td className="py-3 px-2 text-right">Ksh {data.tax.amount.toLocaleString()}</td>
            </tr>
            <tr className="w-full">
              <td colSpan={3} className="text-right py-3 px-2">
                Total
              </td>
              <td className="py-3 px-2 text-right">
                Ksh {data.total.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Thank You */}
      <div className="text-xl my-0 funnel">Thank you!</div>

      {/* Payment Info */}
      <div className="mt-8">
        <p className="font-bold mb-2">PAYMENT INFORMATION</p>
        <p>{data.paymentInfo.method}</p>
        <p>Account Name: {data.paymentInfo.accountName}</p>
        <p>Account No.: {data.paymentInfo.accountNumber}</p>
        <p>Pay by: {data.paymentInfo.dueDate}</p>
      </div>

      {/* Footer */}
      <div className="mt-12 text-right">
        <p className="abril">{data.sender.name}</p>
        <p className="text-gray-900">{data.sender.location}</p>
        <Link href={'https://jomokigo.vercel.app/'} className="border-b pb-1 funnel">{data.sender.website}</Link>
      </div>
    </div>
  );
}
