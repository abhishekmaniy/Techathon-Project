
import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface PaymentButtonProps {
  price: number
}

export default function PaymentButton({ price }: PaymentButtonProps) {
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'razorpay' | null>(null)

  const handlePayment = () => {
    // In a real application, you would integrate with the selected payment gateway here
    console.log(`Processing payment of ₹${price} via ${paymentMethod}`)
    alert(`Payment of ₹${price} processed successfully via ${paymentMethod}!`)
  }

  return (
    <div>
      <div className="space-x-4 mb-4">
        <Button onClick={() => setPaymentMethod('paypal')} variant='default' className={`${paymentMethod === 'paypal' ?'bg-gray-500' :''}`}>
          PayPal
        </Button>
        <Button onClick={() => setPaymentMethod('razorpay')}  variant='default' className={`${paymentMethod === 'razorpay' ?'bg-gray-500' :''}`} >
          Razorpay
        </Button>
      </div>
      <Button onClick={handlePayment} disabled={!paymentMethod}>
        Pay ₹{price}
      </Button>
    </div>
  )
}

