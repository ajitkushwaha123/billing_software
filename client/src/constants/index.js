import { happyBag, sadBag } from "../assets";

export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: "LayoutGrid",
    subitems: [],
    url: "/",
  },
  {
    title: "Orders",
    icon: "Box",
    subitems: [
      { title: "All Orders", icon: "all_orders_icon", url: "/orders" }, // Replace with actual icon
      { title: "Prepared Orders", icon: "prepared_orders_icon" }, // Replace with actual icon
      { title: "KOT", icon: "ReceiptText", url: "/kot" }, // Replace with actual icon
    ],
  },
  {
    title: "Settings",
    icon: "Settings",
    subitems: [],
  },
  {
    title: "Reports",
    icon: "ChartSpline",
    subitems: [
      { title: "Sales Report", icon: "sales_report_icon" }, // Replace with actual icon
      { title: "Inventory Report", icon: "inventory_report_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Customers",
    icon: "Contact",
    subitems: [
      { title: "All Customers", icon: "all_customers_icon" }, // Replace with actual icon
      { title: "Loyalty Program", icon: "loyalty_program_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Menu",
    icon: "Boxes",
    subitems: [
      { title: "All Items", icon: "all_items_icon" }, // Replace with actual icon
      { title: "Add New Item", icon: "add_new_item_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Inventory",
    icon: "Building",
    subitems: [
      { title: "Stock Levels", icon: "stock_levels_icon" }, // Replace with actual icon
      { title: "Order Supplies", icon: "order_supplies_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Staff",
    icon: "IdCard",
    subitems: [
      { title: "All Staff", icon: "all_staff_icon" , url : "/staff" }, // Replace with actual icon
      { title: "Shift Schedule", icon: "shift_schedule_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Reservations",
    icon: "HandPlatter",
    subitems: [
      { title: "All Reservations", icon: "all_reservations_icon" }, // Replace with actual icon
      { title: "Add Reservation", icon: "add_reservation_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Promotions",
    icon: "Puzzle",
    subitems: [
      { title: "All Promotions", icon: "all_promotions_icon", url: "hi" }, // Replace with actual icon
      { title: "Create Promotion", icon: "create_promotion_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Feedback",
    icon: "MessageCircleQuestion",
    subitems: [
      { title: "Customer Feedback", icon: "customer_feedback_icon" }, // Replace with actual icon
      { title: "Staff Feedback", icon: "staff_feedback_icon" }, // Replace with actual icon
    ],
  },
  {
    title: "Terms & Condition",
    icon: "ReceiptText",
    subitems: [],
    url: "/terms-and-condition",
  },
  {
    title: "Privacy Policy",
    icon: "GlobeLock",
    subitems: [],
    url: "/privacy-policy",
  },
];

export const restaurantOutlets = [
  {
    name: "Sedep Resto & Cafe",
    location: "New Delhi, India",
  },
  {
    name: "Tasty Bites",
    location: "Mumbai, India",
  },
  {
    name: "Foodie's Paradise",
    location: "Bangalore, India",
  },
  {
    name: "Gourmet Delight",
    location: "Chennai, India",
  },
  {
    name: "Urban Eatery",
    location: "Hyderabad, India",
  },
  {
    name: "Spice Route",
    location: "Kolkata, India",
  },
  {
    name: "The Culinary Hub",
    location: "Pune, India",
  },
  {
    name: "Flavors of India",
    location: "Ahmedabad, India",
  },
  {
    name: "Taste Buds",
    location: "Jaipur, India",
  },
];

export const notificationData = [
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: happyBag,
    unread: true,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: sadBag,
    unread: true,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: happyBag,
    unread: false,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: happyBag,
    unread: false,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
];

export const statsData = [
  {
    title: "Total Sales",
    amount: 477080,
    orders: 28,
    percentage: 28,
    icon: "BadgeDollarSign",
    bgColor: "purple",
    detailedData: {
      key: "totalSales",
      uid: "totalSales",
      cols: [
        { key: "totalSales", uid: "totalSales" },
        { key: "price", uid: "price" },
      ],
      orderData: [
        { totalSales: "No. of order", key: "number", price: 400 },
        { totalSales: "Minimum", price: 400 },
        { totalSales: "Average", price: 1500 },
        { totalSales: "Maximum", price: 4000 },
        { totalSales: "Discount", price: 650 },
        { totalSales: "Taxes", price: 590 },
        { totalSales: "Total", price: 530000 },
      ],
    },
  },
  {
    title: "Dine In",
    amount: 6028,
    orders: 10,
    percentage: -28,
    icon: "HandPlatter",
    bgColor: "yellow",
    detailedData: {
      key: "dineIn",
      uid: "dineIn",
      cols: [
        { key: "dineIn", uid: "dineIn" },
        { key: "price", uid: "price" },
      ],
      orderData: [
        { dineIn: "No. of order", key: "number", key: "number", price: 120 },
        { dineIn: "Minimum", price: 500 },
        { dineIn: "Average", price: 1500 },
        { dineIn: "Maximum", price: 3000 },
        { dineIn: "Discount", price: 200 },
        { dineIn: "Taxes", price: 180 },
        { dineIn: "Total", key: "total", price: 140000 },
      ],
    },
  },
  {
    title: "Take Away",
    amount: 28006,
    orders: 14,
    percentage: 56,
    icon: "Bike",
    bgColor: "red",
    detailedData: {
      key: "takeAway",
      uid: "takeAway",
      cols: [
        { key: "takeAway", uid: "takeAway" },
        { key: "price", uid: "price" },
      ],
      orderData: [
        { takeAway: "No. of order", key: "number", key: "number", price: 80 },
        { takeAway: "Minimum", price: 400 },
        { takeAway: "Average", price: 1200 },
        { takeAway: "Maximum", price: 2500 },
        { takeAway: "Discount", price: 150 },
        { takeAway: "Taxes", price: 160 },
        { takeAway: "Total", price: 90000 },
      ],
    },
  },
  {
    title: "Delivery",
    amount: 9917,
    orders: 16,
    percentage: -10,
    icon: "Truck",
    bgColor: "green",
    detailedData: {
      key: "delivery",
      uid: "delivery",
      cols: [
        { key: "delivery", uid: "delivery" },
        { key: "price", uid: "price" },
      ],
      orderData: [
        { delivery: "No. of order", key: "number", price: 200 },
        { delivery: "Minimum", price: 700 },
        { delivery: "Average", price: 2000 },
        { delivery: "Maximum", price: 4000 },
        { delivery: "Discount", price: 300 },
        { delivery: "Taxes", price: 250 },
        { delivery: "Total", price: 300000 },
      ],
    },
  },
];

export const OrderStatus = [
  {
    title: "Order Received",
    color: "blue",
    icon: "Box",
    statusTitle: "Order has been received",
    status: "orderReceived",
  },
  {
    title: "Preparing",
    color: "pink",
    icon: "TimerReset",
    statusTitle: "Preparing ingredients",
    status: "preparing",
  },
  {
    title: "Cooking",
    color: "red",
    icon: "Flame",
    statusTitle: "Cooking in progress",
    status: "cooking",
  },
  {
    title: "Ready for Pickup",
    color: "purple",
    icon: "PackageCheck",
    statusTitle: "Ready for pickup",
    status: "readyForPickup",
  },
  {
    title: "Out for Delivery",
    color: "teal",
    icon: "Truck",
    statusTitle: "Out for delivery",
    status: "outForDelivery",
  },
  {
    title: "Delivered",
    color: "green",
    icon: "CircleCheckBig",
    statusTitle: "Delivered to customer",
    status: "delivered",
  },
  {
    title: "Serving",
    color: "pink",
    icon: "HandPlatter",
    statusTitle: "Serving to customer",
    status: "serving",
  },
  {
    title: "Ready",
    color: "green",
    icon: "CircleCheckBig",
    statusTitle: "Ready to serve",
    status: "ready",
  },
  {
    title: "In Progress",
    color: "yellow",
    icon: "Clock",
    statusTitle: "Cooking Now",
    status: "inProgress",
  },
  {
    title: "Cancelled",
    color: "red",
    icon: "CircleX",
    statusTitle: "Order Cancelled",
    status: "cancelled",
  },
  {
    title: "Refunded",
    color: "gray",
    icon: "Undo2",
    statusTitle: "Order Refunded",
    status: "refunded",
  },
  {
    title: "Completed",
    color: "green",
    icon: "AlarmClockCheck",
    statusTitle: "Order Completed",
    status: "completed",
  },
  {
    title: "Pending",
    color: "indigo",
    icon: "ClockArrowDown",
    statusTitle: "Order Pending",
    status: "pending",
  },
  {
    title: "Waiting for Payment",
    color: "yellow",
    icon: "ClockArrowDown",
    statusTitle: "Waiting for Payment",
    status: "waitingForPayment",
  },
];

export const processingStatus = [
  "preparing",
  "cooking",
  "ready",
  "pending",
  "inProgress",
  "orderReceived",
];

export const paymentPendingStatus = ["waitingForPayment"];
export const completedStatus = ["completed"];

export const Orders = [
  // Order Received
  {
    name: "John Doe",
    items: [
      { foodName: "Margherita Pizza", quantity: 1, price: 500 },
      { foodName: "Caesar Salad", quantity: 2, price: 300 },
    ],
    status: "orderReceived",
  },
  {
    name: "Anna Bell",
    items: [
      { foodName: "Veggie Burger", quantity: 1, price: 450 },
      { foodName: "Coleslaw", quantity: 1, price: 150 },
    ],
    status: "inProgress",
  },
  {
    name: "Mark Lewis",
    items: [
      { foodName: "Chicken Alfredo Pasta", quantity: 1, price: 550 },
      { foodName: "Garlic Bread", quantity: 2, price: 150 },
    ],
    status: "waitingForPayment",
  },

  // Preparing
  {
    name: "Jane Smith",
    items: [
      { foodName: "Spaghetti Carbonara", quantity: 1, price: 450 },
      { foodName: "Garlic Bread", quantity: 3, price: 150 },
    ],
    status: "preparing",
  },
  {
    name: "Tom Hardy",
    items: [
      { foodName: "Beef Stroganoff", quantity: 1, price: 520 },
      { foodName: "Mashed Potatoes", quantity: 2, price: 180 },
    ],
    status: "waitingForPayment",
  },
  {
    name: "Emily Clark",
    items: [
      { foodName: "Chicken Caesar Wrap", quantity: 1, price: 380 },
      { foodName: "Potato Wedges", quantity: 1, price: 220 },
    ],
    status: "pending",
  },

  // Cooking
  {
    name: "Michael Johnson",
    items: [
      { foodName: "Grilled Chicken Sandwich", quantity: 2, price: 350 },
      { foodName: "French Fries", quantity: 1, price: 200 },
    ],
    status: "cooking",
  },
  {
    name: "Laura Evans",
    items: [
      { foodName: "BBQ Ribs", quantity: 1, price: 700 },
      { foodName: "Corn on the Cob", quantity: 1, price: 150 },
    ],
    status: "ready",
  },
  {
    name: "Chris Green",
    items: [
      { foodName: "Tandoori Chicken", quantity: 1, price: 650 },
      { foodName: "Naan Bread", quantity: 2, price: 100 },
    ],
    status: "cooking",
  },

  // Ready for Pickup
  {
    name: "Emily Davis",
    items: [
      { foodName: "Beef Burger", quantity: 1, price: 400 },
      { foodName: "Onion Rings", quantity: 1, price: 180 },
    ],
    status: "readyForPickup",
  },
  {
    name: "Sarah Lopez",
    items: [
      { foodName: "Club Sandwich", quantity: 1, price: 350 },
      { foodName: "Sweet Potato Fries", quantity: 1, price: 250 },
    ],
    status: "readyForPickup",
  },
  {
    name: "Daniel Wright",
    items: [
      { foodName: "Fish Tacos", quantity: 3, price: 450 },
      { foodName: "Churros", quantity: 2, price: 120 },
    ],
    status: "readyForPickup",
  },

  // Out for Delivery
  {
    name: "David Wilson",
    items: [
      { foodName: "Vegetable Stir Fry", quantity: 1, price: 320 },
      { foodName: "Spring Rolls", quantity: 2, price: 250 },
    ],
    status: "outForDelivery",
  },
  {
    name: "Nina Patel",
    items: [
      { foodName: "Pad Thai", quantity: 1, price: 400 },
      { foodName: "Thai Iced Tea", quantity: 1, price: 150 },
    ],
    status: "outForDelivery",
  },
  {
    name: "Oliver King",
    items: [
      { foodName: "Cheeseburger", quantity: 1, price: 450 },
      { foodName: "Fries", quantity: 1, price: 200 },
    ],
    status: "outForDelivery",
  },

  // Delivered
  {
    name: "Sophia Brown",
    items: [
      { foodName: "Chicken Tikka Masala", quantity: 1, price: 550 },
      { foodName: "Naan Bread", quantity: 4, price: 100 },
    ],
    status: "delivered",
  },
  {
    name: "Lucas Harris",
    items: [
      { foodName: "Steak", quantity: 1, price: 800 },
      { foodName: "Caesar Salad", quantity: 1, price: 250 },
    ],
    status: "delivered",
  },
  {
    name: "Isabella Foster",
    items: [
      { foodName: "Shrimp Alfredo", quantity: 1, price: 600 },
      { foodName: "Garlic Knots", quantity: 2, price: 120 },
    ],
    status: "delivered",
  },

  // Serving
  {
    name: "James Taylor",
    items: [
      { foodName: "Fish and Chips", quantity: 1, price: 480 },
      { foodName: "Coleslaw", quantity: 1, price: 150 },
    ],
    status: "serving",
  },
  {
    name: "Emma White",
    items: [
      { foodName: "Chicken Soup", quantity: 1, price: 300 },
      { foodName: "Breadsticks", quantity: 2, price: 100 },
    ],
    status: "serving",
  },
  {
    name: "William Scott",
    items: [
      { foodName: "Beef Wellington", quantity: 1, price: 750 },
      { foodName: "Green Beans", quantity: 1, price: 150 },
    ],
    status: "serving",
  },

  // Completed
  {
    name: "Olivia Martinez",
    items: [
      { foodName: "Pancakes with Maple Syrup", quantity: 3, price: 250 },
      { foodName: "Orange Juice", quantity: 2, price: 120 },
    ],
    status: "completed",
  },
  {
    name: "Benjamin Lee",
    items: [
      { foodName: "Lobster Bisque", quantity: 1, price: 600 },
      { foodName: "Garlic Bread", quantity: 2, price: 150 },
    ],
    status: "completed",
  },
  {
    name: "Sophia Green",
    items: [
      { foodName: "Turkey Sandwich", quantity: 1, price: 320 },
      { foodName: "French Fries", quantity: 1, price: 200 },
    ],
    status: "completed",
  },

  // Cancelled
  {
    name: "Liam Anderson",
    items: [
      { foodName: "Mushroom Risotto", quantity: 1, price: 370 },
      { foodName: "Garlic Bread", quantity: 2, price: 150 },
    ],
    status: "cancelled",
  },
  {
    name: "Ella Roberts",
    items: [
      { foodName: "Veggie Lasagna", quantity: 1, price: 450 },
      { foodName: "Side Salad", quantity: 1, price: 200 },
    ],
    status: "cancelled",
  },
  {
    name: "Noah Wright",
    items: [
      { foodName: "BBQ Chicken Pizza", quantity: 1, price: 500 },
      { foodName: "Garlic Knots", quantity: 1, price: 120 },
    ],
    status: "cancelled",
  },

  // Refunded
  {
    name: "Emma Thomas",
    items: [
      { foodName: "Cheeseburger", quantity: 2, price: 400 },
      { foodName: "Milkshake", quantity: 1, price: 200 },
    ],
    status: "refunded",
  },
  {
    name: "Jack Brown",
    items: [
      { foodName: "Fettuccine Alfredo", quantity: 1, price: 550 },
      { foodName: "Caesar Salad", quantity: 1, price: 250 },
    ],
    status: "refunded",
  },
  {
    name: "Mia Hill",
    items: [
      { foodName: "Greek Salad", quantity: 1, price: 300 },
      { foodName: "Pita Bread", quantity: 2, price: 100 },
    ],
    status: "refunded",
  },
];

export const cols = [
  {
    title: "Image",
    key: "image",
    uid: "image",
  },
  { title: "Name", key: "name", uid: "name" },
  { title: "Items", key: "items", uid: "items" },
  {
    title: "Amount",
    key: "amount",
    uid: "amount",
  },
  { title: "Status", key: "status", uid: "status" },
  // { title: "Actions", key: "actions", uid: "actions" },
];

export const mostAndLeastSellingCols = [
  {
    title: "Image",
    key: "image",
    uid: "image",
  },
  { title: "Name", key: "name", uid: "name" },
  {
    title: "Orders",
    key: "orders",
    uid: "orders",
  },
];

export const restaurantItems = [
  {
    image:
      "https://tse1.mm.bing.net/th?id=OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7&pid=Api&P=0&h=180",
    name: "Margherita Pizza",
    orders: 150,
  },
  {
    image:
      "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/master/pass/ultimate-veggie-burger.jpg",
    name: "Veggie Burger",
    orders: 90,
  },
  {
    image:
      "https://tse4.mm.bing.net/th?id=OIP.lfU2Bf7E6zrEx7DjsIL50gHaGL&pid=Api&P=0&h=180",
    name: "Coleslaw",
    orders: 20,
  },
  {
    image:
      "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-4.jpg",
    name: "Spaghetti Carbonara",
    orders: 110,
  },
  {
    image:
      "https://tse4.mm.bing.net/th?id=OIP.MiAGrYafshORM2n_HLu4swHaHa&pid=Api&P=0&h=180",
    name: "Chicken Alfredo Pasta",
    orders: 120,
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.o6N8ySxJrG0EyLyuRlMTJQHaIX&pid=Api&P=0&h=180",
    name: "Garlic Bread",
    orders: 30,
  },
];

export const dailyOrdersData = [
  { hour: "12 AM", sales: 50 },
  { hour: "1 AM", sales: 30 },
  { hour: "2 AM", sales: 20 },
  { hour: "3 AM", sales: 40 },
  { hour: "4 AM", sales: 30 },
  { hour: "5 AM", sales: 20 },
  { hour: "6 AM", sales: 50 },
  { hour: "7 AM", sales: 100 },
  { hour: "8 AM", sales: 120 },
  { hour: "9 AM", sales: 150 },
  { hour: "10 AM", sales: 200 },
  { hour: "11 AM", sales: 180 },
  { hour: "12 PM", sales: 220 },
  { hour: "1 PM", sales: 250 },
  { hour: "2 PM", sales: 300 },
  { hour: "3 PM", sales: 280 },
  { hour: "4 PM", sales: 200 },
  { hour: "5 PM", sales: 150 },
  { hour: "6 PM", sales: 250 },
  { hour: "7 PM", sales: 300 },
  { hour: "8 PM", sales: 350 },
  { hour: "9 PM", sales: 400 },
  { hour: "10 PM", sales: 200 },
  { hour: "11 PM", sales: 150 },
];

export const weeklyOrdersData = [
  { day: "Mon", sales: 1200 },
  { day: "Tue", sales: 100 },
  { day: "Wed", sales: 1800 },
  { day: "Thu", sales: 500 },
  { day: "Fri", sales: 2500 },
  { day: "Sat", sales: 3000 },
  { day: "Sun", sales: 1000 },
];

export const dailySalesData = [
  { hour: "12 AM", sales: 50000 },
  { hour: "1 AM", sales: 30000 },
  { hour: "2 AM", sales: 20000 },
  { hour: "3 AM", sales: 40000 },
  { hour: "4 AM", sales: 30000 },
  { hour: "5 AM", sales: 20000 },
  { hour: "6 AM", sales: 50000 },
  { hour: "7 AM", sales: 100000 },
  { hour: "8 AM", sales: 120000 },
  { hour: "9 AM", sales: 150000 },
  { hour: "10 AM", sales: 200000 },
  { hour: "11 AM", sales: 180000 },
  { hour: "12 PM", sales: 220000 },
  { hour: "1 PM", sales: 250000 },
  { hour: "2 PM", sales: 300000 },
  { hour: "3 PM", sales: 280000 },
  { hour: "4 PM", sales: 200000 },
  { hour: "5 PM", sales: 150000 },
  { hour: "6 PM", sales: 250000 },
  { hour: "7 PM", sales: 300000 },
  { hour: "8 PM", sales: 350000 },
  { hour: "9 PM", sales: 400000 },
  { hour: "10 PM", sales: 200000 },
  { hour: "11 PM", sales: 150000 },
];

export const weeklySalesData = [
  { day: "Monday", sales: 1200000 },
  { day: "Tuesday", sales: 100000 },
  { day: "Wednesday", sales: 1800000 },
  { day: "Thursday", sales: 20000 },
  { day: "Friday", sales: 2500000 },
  { day: "Saturday", sales: 3000000 },
  { day: "Sunday", sales: 600000 },
];

export const taxes = [
  { name: "Income Tax", price: 500000 },
  { name: "Sales Tax", price: 350000 },
  { name: "Property Tax", price: 200000 },
  { name: "Corporate Tax", price: 800000 },
  { name: "Excise Tax", price: 150000 },
  { name: "Customs Duty", price: 100000 },
];

export const taxCol = [
  {
    title: "Taxes Name",
    uid: "name",
    key: "name",
  },
  {
    title: "Amount",
    uid: "price",
    key: "price",
  },
];

export const orderDetails = {
  order_number: "#123458",
  billing_user: "Alex Johnson",
  customer_name: "Amitabh Bachchan",
  customer_phone: "9876543212",
  customer_address: "Jalsa, Mumbai - 110040",
  number_of_person: "5",
  order_type: "Dine In (Table No. : A3)",
  assign_to: "Waiter 2",
  total_tax: "50",
  total_discount: "100",
  price: 1500,
  settlement_amount: "1400",
  status: "ready",
  printed: "Yes",
  tip: "100",
  sub_order_type: "VIP ROOM",
  sequence_number: "3",
  setlement_counter: "2",
  settled_by: "Alex Johnson",
  settled_at: "2:30 PM",
  created_at: "1:30 PM",
  updated_at: "2:15 PM",
  kot_id: "KOT002",
  number_of_items: 4,
  bill_print_date: "2023-09-25",
  order_items: [
    {
      name: "Chicken Biryani",
      quantity: 2,
      price: 400,
      special_note: "Extra Raita",
    },
    {
      name: "Butter Chicken",
      quantity: 1,
      price: 500,
      special_note: "No Bones",
    },
    {
      name: "Naan Basket",
      quantity: 1,
      price: 200,
      special_note: "Assorted",
    },
  ],
  additionalInfo: [
    {
      title: "Service Charges",
      value: 100,
      key: "service_charges",
      type: "price",
    },
    { title: "Discount", value: 100, key: "discount", type: "price" },
    { title: "Tax", value: 50, key: "tax", type: "price" },
    { title: "Grand Total", value: 1500, key: "total", type: "price" },
  ],
  payment_mode: "Card",
  payment_type_reason: "Credit Card",
};

export const ordersData = [
  {
    order_number: "#123457",
    billing_user: "Jane Doe",
    customer_name: "Shahrukh Khan",
    customer_phone: "9876543211",
    customer_address: "Mannat, Mumbai - 110039",
    number_of_person: "3",
    order_type: "Takeaway",
    assign_to: "Cashier 1",
    total_tax: "20",
    total_discount: "30",
    price: 300,
    settlement_amount: "270",
    status: "outForDelivery",
    printed: "No",
    tip: "0",
    sub_order_type: "Normal",
    sequence_number: "2",
    setlement_counter: "1",
    settled_by: "Jane Doe",
    settled_at: "1:00 PM",
    created_at: "12:30 PM",
    updated_at: "12:45 PM",
    kot_id: "KOT001",
    number_of_items: 3,
    bill_print_date: "2023-09-25",
    order_items: [
      {
        name: "Paneer Butter Masala",
        quantity: 1,
        price: 250,
        special_note: "Less Spicy",
      },
      {
        name: "Garlic Naan",
        quantity: 2,
        price: 100,
        special_note: "Extra Butter",
      },
    ],
    additionalInfo: [
      {
        title: "Delivery Charges",
        value: 20,
        key: "delivery_charges",
        type: "price",
      },
      { title: "Discount", value: 30, key: "discount", type: "price" },
      { title: "Tax", value: 20, key: "tax", type: "price" },
      { title: "Grand Total", value: 300, key: "total", type: "price" },
    ],
    payment_mode: "Online",
    payment_type_reason: "Credit Card",
  },
  {
    order_number: "#123458",
    billing_user: "Alex Johnson",
    customer_name: "Amitabh Bachchan",
    customer_phone: "9876543212",
    customer_address: "Jalsa, Mumbai - 110040",
    number_of_person: "5",
    order_type: "Dine In (Table No. : A3)",
    assign_to: "Waiter 2",
    total_tax: "50",
    total_discount: "100",
    price: 1500,
    settlement_amount: "1400",
    status: "ready",
    printed: "Yes",
    tip: "100",
    sub_order_type: "VIP ROOM",
    sequence_number: "3",
    setlement_counter: "2",
    settled_by: "Alex Johnson",
    settled_at: "2:30 PM",
    created_at: "1:30 PM",
    updated_at: "2:15 PM",
    kot_id: "KOT002",
    number_of_items: 4,
    bill_print_date: "2023-09-25",
    order_items: [
      {
        name: "Chicken Biryani",
        quantity: 2,
        price: 400,
        special_note: "Extra Raita",
      },
      {
        name: "Butter Chicken",
        quantity: 1,
        price: 500,
        special_note: "No Bones",
      },
      {
        name: "Naan Basket",
        quantity: 1,
        price: 200,
        special_note: "Assorted",
      },
    ],
    additionalInfo: [
      {
        title: "Service Charges",
        value: 100,
        key: "service_charges",
        type: "price",
      },
      { title: "Discount", value: 100, key: "discount", type: "price" },
      { title: "Tax", value: 50, key: "tax", type: "price" },
      { title: "Grand Total", value: 1500, key: "total", type: "price" },
    ],
    payment_mode: "Card",
    payment_type_reason: "Credit Card",
  },
  {
    order_number: "#123460",
    billing_user: "Michael Brown",
    customer_name: "Deepika Padukone",
    customer_phone: "9876543214",
    customer_address: "Prabhadevi, Mumbai - 110042",
    number_of_person: "4",
    order_type: "Delivery",
    assign_to: "Delivery Person 2",
    total_tax: "25",
    total_discount: "50",
    price: 400,
    settlement_amount: "350",
    status: "cooking",
    printed: "No",
    tip: "20",
    sub_order_type: "Normal",
    sequence_number: "5",
    setlement_counter: "2",
    settled_by: "Michael Brown",
    settled_at: "4:00 PM",
    created_at: "3:30 PM",
    updated_at: "3:45 PM",
    kot_id: "KOT003",
    number_of_items: 2,
    bill_print_date: "2023-09-25",
    order_items: [
      {
        name: "Veg Pulao",
        quantity: 1,
        price: 300,
        special_note: "No Chillies",
      },
      {
        name: "Raita",
        quantity: 1,
        price: 50,
        special_note: "Extra Cucumber",
      },
    ],
    additionalInfo: [
      {
        title: "Delivery Charges",
        value: 25,
        key: "delivery_charges",
        type: "price",
      },
      { title: "Discount", value: 50, key: "discount", type: "price" },
      { title: "Tax", value: 25, key: "tax", type: "price" },
      { title: "Grand Total", value: 400, key: "total", type: "price" },
    ],
    payment_mode: "UPI",
    payment_type_reason: "PhonePe",
  },
  {
    order_number: "#123461",
    billing_user: "Laura Wilson",
    customer_name: "Katrina Kaif",
    customer_phone: "9876543215",
    customer_address: "Bandra West, Mumbai - 110043",
    number_of_person: "1",
    order_type: "Dine In (Table No. : B2)",
    assign_to: "Waiter 3",
    total_tax: "10",
    total_discount: "0",
    price: 250,
    settlement_amount: "250",
    status: "completed",
    printed: "Yes",
    tip: "50",
    sub_order_type: "Normal",
    sequence_number: "6",
    setlement_counter: "1",
    settled_by: "Laura Wilson",
    settled_at: "5:00 PM",
    created_at: "4:00 PM",
    updated_at: "4:45 PM",
    kot_id: "KOT004",
    number_of_items: 1,
    bill_print_date: "2023-09-25",
    order_items: [
      {
        name: "Pasta Alfredo",
        quantity: 1,
        price: 250,
        special_note: "Extra Cheese",
      },
    ],
    additionalInfo: [
      { title: "Tax", value: 10, key: "tax", type: "price" },
      { title: "Grand Total", value: 250, key: "total", type: "price" },
    ],
    payment_mode: "Cash",
    payment_type_reason: "Cash",
  },
  {
    order_number: "#123462",
    billing_user: "Robert King",
    customer_name: "Anushka Sharma",
    customer_phone: "9876543216",
    customer_address: "Versova, Mumbai - 110044",
    number_of_person: "2",
    order_type: "Takeaway",
    assign_to: "Cashier 2",
    total_tax: "20",
    total_discount: "10",
    price: 300,
    settlement_amount: "290",
    status: "inProgress",
    printed: "No",
    tip: "0",
    sub_order_type: "Normal",
    sequence_number: "7",
    setlement_counter: "1",
    settled_by: "Robert King",
    settled_at: "5:30 PM",
    created_at: "5:00 PM",
    updated_at: "5:15 PM",
    kot_id: "KOT005",
    number_of_items: 2,
    bill_print_date: "2023-09-25",
    order_items: [
      {
        name: "Paneer Tikka",
        quantity: 1,
        price: 150,
        special_note: "Well Cooked",
      },
      {
        name: "Tandoori Roti",
        quantity: 2,
        price: 150,
        special_note: "Extra Butter",
      },
    ],
    additionalInfo: [
      { title: "Discount", value: 10, key: "discount", type: "price" },
      { title: "Tax", value: 20, key: "tax", type: "price" },
      { title: "Grand Total", value: 300, key: "total", type: "price" },
    ],
    payment_mode: "Online",
    payment_type_reason: "Google Pay",
  },
];

export const orderCols = [
  { title: "Order Number", key: "order_number", uid: "order_number" },
  { title: "Customer Name", key: "customer_name", uid: "customer_name" },
  { title: "Customer Phone", key: "customer_phone", uid: "customer_phone" },

  {
    title: "Person",
    key: "number_of_person",
    uid: "number_of_person",
  },
  { title: "Order Type", key: "order_type", uid: "order_type" },
  { title: "Total Tax", key: "total_tax", uid: "total_tax" },
  { title: "Total Discount", key: "total_discount", uid: "total_discount" },
  { title: "Total Amount", key: "price", uid: "price" },

  { title: "Order Status", key: "status", uid: "status" },
  { title: "Printed", key: "printed", uid: "printed" },

  { title: "Payment Mode", key: "payment_mode", uid: "payment_mode" },
  { title: "Actions", key: "actions", uid: "actions" },
];

export const kotCols = [
  { title: "KOT ID", key: "kot_id", uid: "kot_id" },
  { title: "Order Type", key: "order_type", uid: "order_type" },
  { title: "Customer Name", key: "customer_name", uid: "customer_name" },
  { title: "Customer Phone", key: "customer_phone", uid: "customer_phone" },
  { title: " No. Of items", key: "number_of_items", uid: "number_of_items" },

  { title: "Order Status", key: "status", uid: "status" },
  { title: "Bill Print Date", key: "bill_print_date", uid: "bill_print_date" },

  { title: "Payment Mode", key: "payment_mode", uid: "payment_mode" },
  { title: "Actions", key: "actions", uid: "actions" },
];
