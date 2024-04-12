import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <PersonCard
        name="John Doe"
        age={30}
        image="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
      />
      <PersonCard
        name="Jane Smith"
        age={25}
        image="https://www.westernunion.com/staticassets/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png"
      />
      <PersonCard
        name="Micke John"
        age={40}
        image="https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
      />
    </div>
  );
}

export default App;
