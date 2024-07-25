Order Schema:

ID
Customer ID
Order Date
Shipping Address
Billing Address
Products (List of product IDs and quantities)
Total Amount
Order Status (e.g., Pending, Shipped, Delivered, Cancelled)
Payment Method
Shipping Method
Tracking Number
Notes
Category Schema:

ID
Name
Description
Parent Category ID (for nested categories)
Image
Review Schema:

ID
Product ID
Customer ID
Rating
Comment
Date
Helpful Count
Payment Schema:

ID
Order ID
Payment Method
Payment Status (e.g., Pending, Completed, Failed)
Payment Date
Amount
Transaction ID
Shipping Schema:

ID
Order ID
Shipping Method
Shipping Cost
Estimated Delivery Date
Tracking Number
Shipping Status
Supplier Schema:

ID
Name
Contact Information
Address
Products Supplied (List of product IDs)
Inventory Schema:

ID
Product ID
Quantity in Stock
Reorder Level
Supplier ID
Last Restocked Date
Coupon/Discount Schema:

ID
Code
Description
Discount Percentage or Amount
Expiration Date
Usage Limit
Products Applicable (List of product IDs)
Customers Applicable (List of customer IDs)
Wishlist Schema:

ID
Customer ID
Product IDs (List of product IDs)
Cart Schema (more detailed):

ID
Customer ID
Products (List of product IDs, quantities, and prices)
Total Amount
Last Updated Date
Address Schema:

ID
Customer ID
Address Type (e.g., Shipping, Billing)
Street
City
State
ZipCode
Country
Notification Schema:

ID
Customer ID
Type (e.g., Order Status, Promotion, Reminder)
Message
Date Sent
Read Status

---

Admin/User Schema (for platform administrators and users):

ID
Email
Password
Name
Role (e.g., Admin, Customer Service, Warehouse Staff)
Permissions
Last Login Date

---

Analytics Schema:

ID
Metric Name
Value
Date
Related Product IDs
Related Customer IDs
