// Sample order data
let orders = [
    { id: 1, customer: 'John Doe', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', status: 'Processing' },
    { id: 3, customer: 'Mike Johnson', status: 'Out for Delivery' }
  ];
  
  // Display orders on page load
  function displayOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear existing rows
  
    orders.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>
          <select onchange="updateOrderStatus(${order.id}, this.value)">
            <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Processing" ${order.status === 'Processing' ? 'selected' : ''}>Processing</option>
            <option value="Order Verification" ${order.status === 'Order Verification' ? 'selected' : ''}>Order Verification</option>
            <option value="Out for Delivery" ${order.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
            <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
            <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
      `;
      orderList.appendChild(row);
    });
  }
  
  // Update order status
  function updateOrderStatus(orderId, status) {
    const order = orders.find(order => order.id === orderId);
    if (order) {
      order.status = status;
      alert(`Order ${orderId} status updated to ${status}`);
    }
  }
  
  // Handle section display
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
  
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }
  }
  
  // Add event listeners for forms (Products, Categories, Promotions)
  document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Product added successfully');
  });
  
  document.getElementById('category-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Category added successfully');
  });
  
  document.getElementById('promotion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Promotion added successfully');
  });
  
  // Initialize orders on page load
  document.addEventListener('DOMContentLoaded', () => {
    displayOrders();
    showSection('orders'); // Default section
  });
  