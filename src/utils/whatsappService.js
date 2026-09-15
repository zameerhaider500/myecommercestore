// PUT YOUR WHATSAPP NUMBER HERE (with country code, no + or spaces)
const WHATSAPP_NUMBER = "1234567890"; 

export const sendToWhatsApp = (order) => {
  const itemsList = order.items.map(i => 
    `• ${i.name} (Qty: ${i.quantity}) - $${(i.price * i.quantity).toFixed(2)}`
  ).join('\n');

  const message = `
*NEW ORDER RECEIVED*
━━━━━━━━━━━━━━━━━
*Order ID:* #${order.orderNumber}
*Payment:* Cash on Delivery (COD)

*ITEMS:*
 ${itemsList}

*TOTAL:* $${order.total.toFixed(2)}
*SHIPPING:* $${order.shipping.toFixed(2)}

*CUSTOMER INFO:*
*Name:* ${order.customer.name}
*Phone:* ${order.customer.phone}
*Email:* ${order.customer.email || 'Not provided'}
*Address:* ${order.customer.address}, ${order.customer.city}, ${order.customer.province} ${order.customer.postalCode}

*NOTES:* ${order.customer.notes || 'None'}
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${923142932266}?text=${encodedMessage}`;
};