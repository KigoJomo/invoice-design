import { invoiceData } from '../lib/data';
import Invoice from './components/Invoice';

export default function Home() {
  return (
    <main className="w-screen">
      <Invoice data={invoiceData} />
    </main>
  );
}