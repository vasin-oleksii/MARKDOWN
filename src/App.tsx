import ContainerFullScreen from "./components/container/ContainerFullScreen";
import Header from "./components/header/Header";
import Board from "./pages/home/board/Board";

function App() {
  return (
    <>
      <ContainerFullScreen>
        <Header />
        <Board />
      </ContainerFullScreen>
    </>
  );
}

export default App;
