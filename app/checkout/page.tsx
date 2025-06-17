// app/checkout/page.tsx
export default function Checkout() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="mb-4">Review your items and complete your purchase below.</p>

        <div className="mb-6">
          <ul className="list-disc list-inside">
            <li>Custom Lure Set — £15.00</li>
            <li>Shipping — £5.00</li>
            <li className="font-semibold">Total — £20.00</li>
          </ul>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
          Pay with PayPal
        </button>
      </div>
    </main>
  );
}

