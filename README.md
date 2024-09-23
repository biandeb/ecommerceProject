# Galaxy Store 🪐 - E-Commerce App

Galaxy Store is an e-commerce application developed with React Native, designed to offer a seamless and sophisticated shopping experience, specializing in technology products such as smartphones, laptops, tablets, and accessories. The app allows users to explore a wide range of tech categories, make purchases, view their order history, and manage their profiles with ease and security. Galaxy Store provides detailed product descriptions, high-quality images, and real-time stock availability to ensure that users have a smooth and informed shopping journey.

## Main Features

### 1. Landing Page

- **Galaxy Store Log:** MThe initial screen prominently displays the Galaxy Store logo, offering a professional and attractive first impression.
- **Welcome Message:** Accompanied by a welcoming message that invites users to explore a wide range of technology products.
- **Intuitive Navigation:** A large, clearly visible button allows users to easily navigate to the login screen, facilitating access to the app's main features.
- **Smooth Visual Experience:** The minimalist design and clear layout provide easy navigation from the first use.

<img src="https://i.postimg.cc/Vs73fjmX/landing.png" width="300">

### 2. **Home Screen (Products)**

- **Product Exploration:** Displays a list of technology products such as smartphones, laptops, and accessories, categorized clearly and accessibly.
- **Product Search:** An advanced search bar allows users to filter products by name for easier navigation.
- **Product Display:** Each product is shown on a card with its name, image, price, and rating.
- **User Interaction:** Users can tap on a product to view more details.

<img src="https://i.postimg.cc/W4PyW8wc/home.png" width="300">

### 3. **Shopping Cart**

- **Cart Summary:** Displays a list of products that the user has added to their cart.
- **Interaction:** Users can adjust product quantities or remove items directly from the cart.
- **Checkout Button:** A button allows users to proceed to payment.

<img src="https://i.postimg.cc/50sktVdf/cartt.png" width="300">

### 4. **Orders**

- **Order History:** Users can view a complete history of their previous orders.
- **Order Details:** Each order can be selected to view the full details of the purchased products and the total amount paid.
- **Order Tracking:** Information on the processing status of each order.
- **Empty State:** When the Orders page is empty, a message is displayed to notify the user.

<img src="https://i.postimg.cc/gcQ5fGYW/ordersempty.png" width="300">
<img src="https://i.postimg.cc/zDPcZ8Fj/orderss.png" width="300">

### 5. **User Profile**

- **Profile Management:** Users can view and edit their personal information.
- **Profile Picture Upload:** Users can upload or change their profile picture through camera or gallery integration.
- **Location Management:** Users can update their delivery address.
- **Logout Functionality:** In the MyProfile screen header, there is a logout icon. When clicked, a popup asks the user to confirm or cancel logout.
  
<img src="https://i.postimg.cc/rwLHwg0Z/myprofile.png" width="300">
<img src="https://i.postimg.cc/cLmF4WN6/logout.png" width="300">

### 6. **User Location**

- **Location Management:** Users can add their location to the app using a Google Maps API, which is integrated into the project and later displayed on the MyProfile screen.

<img src="https://i.postimg.cc/Yqtg2W2f/location.png" width="300">

### 7. **Firebase Authentication**

- **Login and Registration:** Full Firebase authentication implementation, allowing users to create an account, log in, and log out securely.
- **Secure Access Management:** Only authenticated users can make purchases and access the profile screen.

<img src="https://i.postimg.cc/x1CzMVzX/login.png" width="300">
<img src="https://i.postimg.cc/XvBB1Kx3/register.png" width="300">

## Bottom Navigation

```javascript
   const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} text="Shop" icon="shopping-bag" />
            );
          },
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Orders" icon="list" />;
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} text="Cart" icon="shopping-cart" />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} text="Profile" icon="user-circle" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
```

- **Tab 1 - Shop:** Categories and products (main stack).
- **Tab 2 - Orders:** History of past orders.
- **Tab 3 - Cart:** Shopping cart details with a summary and checkout button.
- **Tab 4 - Profile:** User information, location, and profile picture upload.

## Technologies Used

- **Firebase Authentication:** Implements Firebase authentication to manage app security.
- **React Native Navigation Stack:** Manages screen navigation.
- **React Native Bottom Tab Navigation:** Manages bottom tab navigation.
- **Expo-Location:** Allows access and management of user location.
- **Expo-Picker-Image:** Facilitates profile picture uploads.
- **Redux:** Centralizes and manages the app’s state.
- **RTK Query y Firebase:** Performs read/write operations in the database.

## Installation

1. Clone the repository: `git clone https://github.com/biandeb/ecommerceProject.git`
2. Install dependencies: `npm install`
3. Set up API keys for external services (Expo-Location, Firebase, etc.).
4. Configure Firebase credentials in your project.
5. Run the application: `npm start`

## Author

Bianca Dafne Deblinger
