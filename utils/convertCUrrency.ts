// src/utils/convertCurrency.ts
export default function convertCurrency(value: number, currency: "IDR" | "USD") {
   const format = {
      IDR: "id-ID",
      USD: "en-US"
   }

   return new Intl.NumberFormat(format[currency], {
      style:"currency", 
      currency: currency,
      maximumFractionDigits: 0
   }).format(value)
}