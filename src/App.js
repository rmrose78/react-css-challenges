import "./App.scss";
import Box from "./components/Box";
import ColorChangerBox from "./components/ColorChangerBox";

const n = [1, 2, 3, 4, 5];

function App() {
  return (
    <>
      <section id="sec__1" className="sec1__div-ctr">
        {n.map((item, i) => (
          <Box key={i} value={item} />
        ))}
      </section>
      <section id="section__2">
        <ColorChangerBox />
      </section>
    </>
  );
}

export default App;
