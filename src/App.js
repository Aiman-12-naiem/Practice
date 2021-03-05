import './css/Style.css'
// import Navbar from './components/Navbar.js';
// import Home from './components/Home.js';
// import Sidebar from './components/Sidebar.js';
import Contact from './components/Contact.js';
function App() {
  const contacts = [
    {
      name: "Mr. Whiskerson", 
      imgUrl: "http://placekitten.com/300/200", 
      phone: "(212) 555-1234", 
      email: "mr.whiskaz@catnap.meow"
    },
    {
      name: "Mr. Whiskerson", 
      imgUrl: "http://placekitten.com/300/200", 
      phone: "(212) 555-1234", 
      email: "mr.whiskaz@catnap.meow"
    },
    {
      name: "Mr. Whiskerson", 
      imgUrl: "http://placekitten.com/300/200", 
      phone: "(212) 555-1234", 
      email: "mr.whiskaz@catnap.meow"
    }
  ];
  return (
    <div className="App">
      {/* Print Navbar */}
      {/* <Navbar /> */}
      {/* Print Home Section */}
      {/* <div className="container">
        <div className="row ">
          <div className="col-8">
            <Home />
            </div>
            <div className="col-4">
              <Sidebar />
            </div>
          </div>
        </div>   */}
     
     {/* Print Contact cards */}
     <Contact contacts={contacts} />
   

    </div>
  );
}
export default App;
