exports.postcust = "INSERT INTO Customer (firstname,lastname,contact,email,pwd,user_id,address,city) VALUES (?,?,?,?,?,?,?,?)";
exports.postrest = "INSERT INTO Restaurant (name,email,pwd,open_time,close_time,VegNonVeg,user_id,gst_no,rest_type,address,city) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
exports.postdboy = "INSERT INTO DeliveryBoy (firstname,lastname,contact,email,pwd,vehicle_no,licence_no,user_id) VALUES (?,?,?,?,?,?,?,?)";
exports.postlogincust ="SELECT * FROM Customer WHERE user_id = ? AND pwd = ?";
exports.postlogindboy ="SELECT * FROM DeliveryBoy WHERE user_id = ? AND pwd = ?";
exports.postloginrest ="SELECT * FROM Restaurant WHERE user_id = ? AND pwd = ?";
exports.getMenu = "Select * from Menu where res_id = ?";
exports.getRest = "Select * from Restaurant";
exports.getRestname ="select * from Restaurant where user_id=?";
exports.getUser= "Select firstname,user_id from Customer where user_id=?";
exports.uploadMenu = "INSERT INTO menu (res_id, item_id, itemname, itemprice, itemcategory) VALUES ?";
exports.getDBoy ="select * from DeliveryBoy where user_id=?";
exports.getOrderRes="select name, address from Restaurant where user_id= (select res_id from Order_Details where dboy_id=? AND order_status='Confirmed' OR order_status='On Way')";
exports.getOrderCust="select firstname, address from Customer where user_id= (select cust_id from Order_Details where dboy_id=? AND order_status='Confirmed' OR order_status='On Way')";
exports.updateDBoyStatus="update DeliveryBoy set status='Available' where user_id=?";
exports.updateOrderStatus="update Order_Details set order_status='Delivered' where dboy_id=?";
exports.postreview = "INSERT INTO Feedback (order_id,res_review,dboy_review,res_rating,dboy_rating) VALUES (?,?,?,?,?)";
exports.getOrderDetails='Select * from Order_Details where order_id=?';
exports.checkDBoyAvailability='Select * from DeliveryBoy where status="Available"';
exports.setOrderOnway='update Order_Details set dboy_id=?, order_status="On Way" where order_id=?';
exports.setDBoyBusy='update DeliveryBoy set status="Busy" where user_id=?';
exports.getOrdersPerCust="select * from Order_Details where cust_id=?";
exports.setOrderDenied='update Order_Details set order_status="Denied" where order_id=?';
exports.uploadMenu = "INSERT INTO menu (res_id, item_id, itemname, itemcategory, itemprice) VALUES ?";
exports.getMaxItemID = "SELECT MAX(item_id) AS item_count from ( SELECT * FROM menu where res_id = ?) AS ITEMS";
exports.updateMenuItem = "UPDATE menu SET itemname = ?, itemprice= ?, itemcategory=? WHERE item_id = ?"; 
exports.deleteItem = "DELETE FROM menu WHERE item_id=?";
exports.getRestName = "Select * from restaurant where user_id = ?";
exports.getPastOrders = "Select * from Order_Details where res_id = ? AND order_status = 'Delivered'"; 
exports.getDeliveryBoy = "Select firstname, lastname from deliveryboy where user_id = ?";
exports.getCurrentOrders = "Select * from Order_Details where res_id = ? AND order_status = 'Processing'";
exports.denyOrder = "UPDATE Order_Details SET order_status = 'Denied' WHERE order_id = ?"; 
exports.acceptOrder = "UPDATE Order_Details SET order_status = 'Confirmed' WHERE order_id = ?"; 
