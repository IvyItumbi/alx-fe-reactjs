Styling, States, Rendering, Routes and Hooks
 Weight: 1
 Ongoing second chance project - started Jan 12, 2026 12:00 AM, must end by Jan 25, 2026 11:59 PM
 An auto review will be launched at the deadline
In a nutshell…
0.0/22 mandatory
Final score:  0.0%



In the “Styling, States, Rendering, Routes, and Hooks” project, you will enhance your React application by applying inline CSS styling, managing state with hooks, implementing routing, and refactoring to use the Context API. This project is designed for novice learners who aim to build robust and well-structured React applications. By the end of this project, you will have a comprehensive understanding of React’s core concepts and best practices for creating interactive and maintainable web applications.

Learning Objectives
By the end of this project, you will be able to:

Apply Inline CSS Styling to React Components:

Enhance the visual appearance of your React components using inline CSS.
Create a Simple Counter Application Using State and Hooks:

Build a counter application using the useState hook to manage component state.
Build a Simple Company Website with React:

Create a multi-page React application using React Router for routing.
Refactor Prop Drilling to Use Context API:

Simplify data flow in your React application by refactoring to use the Context API.
Tasks
0. Apply Inline CSS Styling to React Components
mandatory
Score: 0.0% (Checks completed: 0.0%)
Building up from the prev project named alx-react-app.Go ahead and duplicate the previous directory with your react app and name it alx-react-app-new

Objective: Enhance the existing React components (UserProfile, Header, MainContent, and Footer) with inline CSS styling.

Instructions:

Style the Header Component:

Open the Header.jsx file.
Add inline CSS to the <header> tag to change the background color, text color, and text alignment. For example:
 <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
   <h1>My Favorite Cities</h1>
 </header>
Style the UserProfile Component:

Open the UserProfile.jsx file.
Apply inline styling to enhance the appearance of the user’s name, age, and bio. Consider changing font sizes, colors, and margins.
Example:
 <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
 </div>
Style the MainContent and Footer Components:

Apply similar inline styling to MainContent.jsx and Footer.jsx. Experiment with different CSS properties to make these components visually appealing.
Run the Application:

Start your application to see the styled components.
Ensure that the inline styling is correctly applied and the components are visually enhanced.
Repo:

GitHub repository: alx-fe-reactjs
Directory: alx-react-app-new
  
1. Create a Simple Counter Application Using State and Hooks
mandatory
Score: 0.0% (Checks completed: 0.0%)
Objective: Build a counter application that increments, decrements, and resets a number using the useState hook in React.

Instructions:

Set Up the Counter Component:

Create a new file named Counter.jsx in the src/components folder.
In Counter.jsx, import the useState hook: import { useState } from 'react';.
Define a functional component named Counter.
Implement State Using useState:

Inside Counter, initialize state using useState to keep track of the count. Start the count at 0. const [count, setCount] = useState(0);
Create Buttons for Counter Actions:

Add three buttons to your component: one for incrementing the count, one for decrementing, and one for resetting the count to 0.
Implement onClick handlers for each button that update the state appropriately using setCount.
Display the Current Count:

Add a display element (like a <p> tag) to show the current count.
Final JSX Structure Example:

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
       </div>
     );
   }
Use the Counter in App.jsx:

Import and include the Counter component in your App.jsx.
Run the Application:

Start your application and test the functionality of the counter.
Repo:

GitHub repository: alx-fe-reactjs
Directory: alx-react-app-new
  
2. Refactor Prop Drilling to Use Context API
mandatory
Score: 0.0% (Checks completed: 0.0%)
Objective: Refactor an existing React application that uses prop drilling to manage user data across multiple components. Implement the Context API to streamline data flow within the application.

For this project use the project you created with the directory alx-react-app. Duplicate that directory and rename the duplicate as alx-react-app-props. Use this new directory for this task.

Initial Code with Prop Drilling
Suppose you have the following components set up with prop drilling:

App.jsx:

import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;
ProfilePage.jsx:

import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
UserInfo.jsx:

import UserDetails from './UserDetails';

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

export default UserInfo;
UserDetails.jsx:

function UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
Refactoring Task
Instructions:

Create a UserContext:

Create a new file UserContext.js.
Initialize a Context using React.createContext() and export it.
Provide Context in App:

In App.jsx, import UserContext and wrap the ProfilePage component inside UserContext.Provider. Pass userData as the value to the provider.
Consume Context in UserDetails:

Modify UserDetails.jsx to consume UserContext using the useContext hook instead of receiving userData as a prop.
Remove Unused Props:

Remove the userData props passed through ProfilePage and UserInfo, as these will no longer be necessary.
Repo:

GitHub repository: alx-fe-reactjs
Directory: alx-react-app-props
  
3. Build a Simple Company Website with React
mandatory
Score: 0.0% (Checks completed: 0.0%)
Objective: Create a four-page company website using React. The website should have a homepage, an about page, a services page, and a contact page.

Requirements:

Set Up the Project:

Use vite to set up a new project called my-company
Install React Router for routing: npm install react-router-dom.
Create Basic Page Components:

Create four components: Home.jsx, About.jsx, Services.jsx, and Contact.jsx. Each component should return a simple JSX layout representing the respective page.
Implement Routing:

In your App.jsx, set up routing using BrowserRouter, Routes, and Route from react-router-dom.
Define routes for each of the four pages.
Navigation Bar:

Create a Navbar.jsx component with links (Link from react-router-dom) to each of the four pages.
Include the Navbar component in App.jsx so it appears on all pages.
Apply Inline CSS Styling:

Style each page and the navigation bar using inline CSS to make the website visually appealing.
Add Simple Interactivity:

On the Contact page, implement a simple contact form with state hooks. It doesn’t need to submit anywhere but should demonstrate the use of state.
Website Content:

Home: A welcome message.
About: Information about the company.
Services: A list of services offered.
Contact: A contact form (name, email, message).
Extra Features (Optional):

Implement a footer component that appears on all pages.
Add images or additional styling to enhance the website’s appearance.
Content and Component Structure for Each Page
Home Page (Home.jsx):
   function Home() {
     return (
       <div style={{ padding: '20px' }}>
         <h1>Welcome to Our Company</h1>
         <p>We are dedicated to delivering excellence in all our services.</p>
       </div>
     );
   }

   export default Home;
About Page (About.jsx):
   function About() {
     return (
       <div style={{ padding: '20px' }}>
         <h1>About Us</h1>
         <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
       </div>
     );
   }

   export default About;
Services Page (Services.jsx):
   function Services() {
     return (
       <div style={{ padding: '20px' }}>
         <h1>Our Services</h1>
         <ul>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
     );
   }

   export default Services;
Contact Page (Contact.jsx):
   import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ padding: '20px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <button type="submit">Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;
Repo:

GitHub repository: alx-fe-reactjs
Directory: my-company
File: Home.jsx, About.jsx, Services.jsx, Contact.jsx