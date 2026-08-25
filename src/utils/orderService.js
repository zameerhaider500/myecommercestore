import { supabase } from '../lib/supabase';

export const submitOrder = async (orderData) => {
  const { customer, items, subtotal, shipping, total } = orderData;

  // Generate a human-friendly order number
  const orderNumber = `ORD-${Date.now()}`;

  // Current project uses a single dummy product
  const firstItem = items[0];

  const order = {
    order_number: orderNumber,

    customer_name: customer.name,
    phone: customer.phone,
    email: customer.email || null,

    address: customer.address,
    city: customer.city,
    province: customer.province || null,
    postal_code: customer.postalCode || null,
    notes: customer.notes || null,

    product_name: firstItem.name,
    quantity: firstItem.quantity,

    subtotal,
    shipping,
    total,

    payment_method: 'COD',
    order_status: 'pending',
  };

  const { error } = await supabase
    .from('orders')
    .insert([order]);

  if (error) {
    console.error('Supabase order error:', error);
    throw new Error(error.message);
  }

  return {
    success: true,
    orderNumber,
  };
};