// import { IAdminPublisher } from "../../core";
import { Inject, Injectable } from "@nestjs/common";
import { IPayment, Payment } from "../../core";
const stripe = require('stripe')(process.env.STRIPE_SECRET)

@Injectable()
export class StripeFramework implements IPayment {

    async createPayment(item: object[], id: string) {
      console.log(id)
      
        const storeItems = new Map([
            [1, { priceInCents: 10000, name: "Learn React Today" }],
            [2, { priceInCents: 20000, name: "Learn CSS Today" }],
          ])

        const patientId = 'lwal'
          
        const items = [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ]
    
        const session = await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ["card"],
          payment_intent_data: {
            setup_future_usage: 'on_session',
          },
          line_items: items.map(item => {
            const storeItem = storeItems.get(item.id)
            return {
              price_data: {
                currency: "inr",
                product_data: {
                  name: storeItem.name,
                },
                unit_amount: storeItem.priceInCents,
              },
              quantity: item.quantity,
            }
          }),
          success_url: `http://localhost:5173/patient/payment/success?id=${id}`,
          cancel_url:  `http://localhost:5173/patient/payment/failed?id=${id}`,
        });
        
        return session.url
    }

    getPayment(): Promise<Payment> {
        return Promise.resolve({amount: 34, date: new Date(), for: '34', from: '34'})
    }
}