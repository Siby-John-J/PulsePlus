// import { IAdminPublisher } from "../../core";
import { Inject, Injectable } from "@nestjs/common";
import { IPayment, Payment } from "../../core";
import { object } from "joi";

@Injectable()
export class StripeFramework implements IPayment {
  
  async createPayment(data: object, id: string) {
      const stripe = require('stripe')(process.env.STRIPE_SECRET)

        const url = 
          `http://localhost:5173/patient/payment/success/?patientId=${id}&appointId=${data.appointId}&date=${data.date}&amount=${String(data.amount)}&diagnosys=${data.diagnosys}&source=stripe&type=appointment`
          
        const items = [
          data
        ]
    
        const session = await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ["card"],
          payment_intent_data: {
            setup_future_usage: 'on_session',
          },
          line_items: items.map(item => {
            return {
              price_data: {
                currency: "inr",
                product_data: {
                  name: 'appointment payment',
                },
                unit_amount: data.amount * 100,
              },
              quantity: 1,
            }
          }),
          success_url: url,
          cancel_url:  `http://localhost:5173/patient/payment/failed?id=${id}`,
        });
        
        // http://localhost:2000/patient-service/payment/success?id=${id}
        // http://localhost:5173/patient/payment/failed?id=${id}
        return { stripe_url : session.url, payment_id: session.id }
    }

    getPayment(): Promise<Payment> {
        return Promise.resolve({amount: 34, date: new Date(), for: '34', from: '34'})
    }
}