import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <SideBar />
        <main
          style={{
            backgroundColor: "lime",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="main-content"
        >
          <h1>Main Content Area</h1>
          <p>This is where your main content will go.</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
