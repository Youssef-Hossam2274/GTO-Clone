const TERMS = [
    {
        id: 1,
        terms: "1. Discounts are applied on any globally recognised travel booking and comparison websites (except flights) such as booking.com, expedia.com, hotels.com, agoda.com, trivago.com, and kayak.com. Prices on the app will not be considered."
    },
    {
        id: 2,
        terms: "2. Flight discounts are calculated against the pricing stated on the official website of each airline."
    },
    {
        id: 3,
        terms: "3. Discounts can also be applied on official hotel websites etc. except on specially discounted products, membership discount or membership discount code and special products that are not available elsewhere."
    },
    {
        id: 4,
        terms: "4. Discounts will be given only when we are able to find the product requested by the customer. We can only apply discounts to products we can see / find."
    },
    {
        id: 5,
        terms: "5. Discounts are applied on basic prices EXCLUDING taxes, the customer must pay taxes where applicable, these are not discounted."
    },
    {
        id: 6,
        terms: "6. Instant discount apply on refundable hotel room bookings only. Credit apply on non-refundable hotel room bookings, flights, attractions, activities & experiences, theme parks, musicals car rental and transfers, trains, ferries and coaches, cruises, sport, shows and concerts and airport lounges access."
    },
    {
        id: 7,
        terms: "7. Discounts offered on attractions can only be applied to the purchase of standard tickets. Discounts are not applicable to other upgrades or add-ons such as Fast Track Entry."
    },
    {
        id: 8,
        terms: "8. Credit earned will be added to members’ GTO wallet and can be used against any future refundable hotel bookings immediately after the events have taken place."
    },
    {
        id: 9,
        terms: "9. Credit earned from bookings can only be used to book refundable hotel bookings. The check-in date needs to be at least two weeks from the booking date."
    },
    {
        id: 10,
        terms: "10. Credit earned from bookings cannot be used in conjunction with any other special offers or promotions."
    },
    {
        id: 11,
        terms: "11. Topups paid into member’s GTO wallet can be used to book anything with GTO, however, topups cannot be used in conjunction with any other special offers or promotions. At least 30 days notice is required for bookings made using your topups."
    },
    {
        id: 12,
        terms: "12. Vouchers issued by GTO can be used for refundable hotel bookings, the check-in date needs to be at least 2 weeks from the booking date. Only 1 voucher can be used per booking, the vouchers cannot be used in conjunction with credit from the GTO wallet, or for special promotions."
    },
    {
        id: 13,
        terms: "13. Travel Pounds can only be redeemed against refundable hotel bookings."
    },
    {
        id: 14,
        terms: "14. Regardless of face value only 1 Travel Pound may be redeemed per booking."
    },
    {
        id: 15,
        terms: "15. Travel Pounds cannot be used in conjunction with any other special offers or promotions."
    },
    {
        id: 16,
        terms: "16. For hotels that are paid at the property only, members are required to book themselves via a booking link provided by us. After checking out, a copy of the invoice is required to be sent to us and a 5% credit will be added to members’ GTO Wallet within 60 days."
    },
    {
        id: 17,
        terms: "17. Unfortunately we are not able to assist Clients with same-day bookings. All enquiries for bookings must be made at least 24 hours prior to check-in and ideally much earlier."
    },
    {
        id: 18,
        terms: "18. In some countries hotels may charge an additional tax (eg. resort / city / local tax) and other fees (eg. cleaning fees). These are payable by you directly at the hotel, are not included within the cost of any bookings and are not included within the cost of any bookings."
    },
    {
        id: 19,
        terms: "19. Discounts will not be given on certain websites such as Airbnb, offline and online travel agency quotations or real estate agencies etc."
    },
    {
        id: 20,
        terms: "20. Customers’ pricing screenshots sent to the Personal Travel Assistant Team must be obtained within an hour of the communication being sent."
    },
    {
        id: 21,
        terms: "21. Prices before discount given by customers should be the final price that appears on the payment part of the booking or comparison website after applying any taxes, administration, booking or other fees."
    },
    {
        id: 22,
        terms: "22. Quoted prices are valid for 2 hours, after this time the quotation may change."
    },
    {
        id: 23,
        terms: "23. Bookings will be finalised and confirmed upon receipt of payment in full and confirmation will be sent via email or WhatsApp promptly."
    },
    {
        id: 24,
        terms: "24. Customers can pay using an online payment link provided by the Personal Travel Assistant Team (on the bottom of the quotation). Payment can be made by credit / debit card (including American Express, bank transfer or PayPal and will be the equivalent amount in GBP."
    },
    {
        id: 25,
        terms: "25. Members will only receive their full discount when making bookings for their own travel (card holder only). When booking for others, a lower discount will apply as detailed on the rate card at https://gtomembers.com/membership-types/."
    },
    {
        id: 26,
        terms: "26. A maximum of 5% discount applies to Genius, Basic, Getaway, Mobile A-pp and any other membership privileges or special offers. The level of discount given is dependent on card membership level."
    },
    {
        id: 27,
        terms: "27. We reserve the right to decline any orders and to cancel any bookings made at any time if our terms and conditions are deemed to be violated."
    },
    {
        id: 28,
        terms: "28. Refunds will only be given on refundable bookings provided the cancellation policy for the product has been adhered to correctly."
    },
    {
        id: 29,
        terms: "29. Refunds will be made using the original method of payment and will take up to 10 working days to be refunded."
    },
    {
        id: 30,
        terms: "30. Should you request that we change a booking for you we will do our best to make these changes, but it may not always be possible. The following charges will apply: up to £75.00 administration fee, any fees charged by the service provider and any further costs (eg. an increase in rate charged by the service provider)."
    },
    {
        id: 31,
        terms: "31. Accommodation cancellations / amendments made by you: please check the details of your booking before confirming it. Once payment made and booking confirmation sent to you, it cannot always be rectified. If you wish to cancel the accommodation booking for any reason, your eligibility for a refund will be subject to our cancellation policy as per your confirmation."
    },
    {
        id: 32,
        terms: "32. Accommodation cancellations / amendments made by the service provider or us: in the unlikely event that we, or the service provider, for any reason, cancels or amends your booking, then we will contact you as soon as possible using the contact details provided by you during the booking process."
    },
    {
        id: 33,
        terms: "33. Flight Tickets cancellations / amendments made by the airlines or us: in the unlikely event that we, or the airlines, for any reason, cancels or amends your booking, then we will contact you as soon as possible using the contact details provided by you during the booking process. Charges may apply depending on airline / supplier policy."
    },
    {
        id: 34,
        terms: "34. Flight tickets cancellations /amendments made by you: please ensure you have provided the correct details before confirming your booking. If you wish to cancel or amend your ticket then your request will be subject to the airline / supplier fare rules. The airline / supplier may charge an administrative fee for any change you make after confirming your booking. Please remember that any booking fees and credit card charges that may have been made are usually non-refundable depending on the airline /supplier."
    },
    {
        id: 35,
        terms: "35. Theatre, events, attractions, activities, concerts, cinema, sport tickets, etc are generally non-refundable. Please ensure you have provided the correct details before confirming your booking. If there is a mistake, it might not be able to rectify it after the booking has been confirmed. If the booking is cancelled you will be offered a refund of the sale price of your ticket, including the relevant service charge but excluding the order handling fee. If the booking takes place over the course of several days and one or more days are cancelled but not all the days, then a partial refund may be payable according to the number of days that are cancelled. Rescheduling made by the event providers: unless stated otherwise, if an event is rescheduled then you will be offered tickets at another rescheduled event (subject to availability) which will be of the same value to your original tickets. If you are unable to attend this event then you will be offered a refund of the sale price of your ticket, including the relevant service charge but excluding the order handling fee. You must inform us beforehand whether you will be able to come to the rescheduled event or not, otherwise you may not be entitled to claim a refund."
    },
    {
        id: 36,
        terms: "36. Train tickets are non-refundable. Please ensure you have provided the correct details before confirming your booking. If there is a mistake, then it may not be able to rectify it after the booking has been confirmed. If a journey is cancelled, you will be offered a refund of the sale price of your ticket but excluding the booking fee."
    },
    {
        id: 37,
        terms: "37. Cruises, private jets, helicopters and yachts cancellations / amendments made by the supplier or us: in the unlikely event that we or the supplier, for any reason, cancels or amends your booking, then we will contact you as soon as possible using the contact details provided by you during the booking process. If the supplier is unable to fulfil your booking or provide you with an alternative, then your booking will be cancelled with a full refund."
    },
    {
        id: 38,
        terms: "37. Cruises, private jets, helicopters and yachts cancellations / amendments made by the supplier or us: in the unlikely event that we or the supplier, for any reason, cancels or amends your booking, then we will contact you as soon as possible using the contact details provided by you during the booking process. If the supplier is unable to fulfil your booking or provide you with an alternative, then your booking will be cancelled with a full refund."
    },
    {
        id: 39,
        terms: "39. Airport transfer and taxi service can be cancelled as per your booking confirmation."
    },
    {
        id: 40,
        terms: "40. For self-drive vehicle rental, customers must book on KOHANO.com using their own credit card and driving license. The terms and conditions of the supplier will apply, please ensure you read these at the time of booking."
    },
    {
        id: 41,
        terms: "41. Products and services purchased using the GTO Members cannot be resold to third parties."
    },
    {
        id: 42,
        terms: "42. Benefits, offers and discounts are only valid up to the expiry date of the card."
    },
    {
        id: 43,
        terms: "43. Membership renewal is subject to approval and an annual membership fee will be applied."
    },
    {
        id: 44,
        terms: "44. Membership may be cancelled by the issuer at any time if our terms and conditions are deemed to be violated."
    },
    {
        id: 45,
        terms: "45. We reserve the right to change or add to these terms and conditions without prior notice."
    },
    {
        id: 46,
        terms: "46. Please be advised that members total discount per year is capped at a maximum of 10 times the annual membership fee. For example, a Gold Member can receive a total discount of £5,000 based on their annual membership fee of £500."
    },
    {
        id: 47,
        terms: "47. Membership can be cancelled free of charge within 14 days of joining, provided that the membership benefits or discounts have not been used. After this period the membership is non-refundable."
    },
    {
        id: 48,
        terms: "48. All membership runs to the end of the membership term and cannot be cancelled before the end date."
    },
    {
        id: 49,
        terms: "49. Membership is non-transferrable."
    },
    {
        id: 50,
        terms: "50. Membership can be upgraded within your membership term, please contact your Personal Travel Assistant Team."
    },
    {
        id: 51,
        terms: "51. We reserve the right to make changes to the benefits offered by the GTO Members."
    },
    {
        id: 52,
        terms: "52. Any cancellations or changes made directly with the hotel/airline/service provider by the member after the cancellation date written on the booking confirmation has passed must be dealt with the hotel/airline/service provider directly. GTO cannot process any cancellations or changes after the cancellation date. This also applies to non-refundable bookings."
    },
    {
        id: 53,
        terms: "53. Any compensation agreed on directly between the hotel/airline/service provider and the member due to service issues must be dealt with the hotel/airline/service provider directly. GTO cannot guarantee that any compensation promised will be agreed to by our suppliers, thus they may be unable to make any refund."
    },

]

export default TERMS;