import { Box } from "./components/box";
import AddButton from "./components/addButton";
import Header from "./components/layout/header";
import Training from "./page/Training";
import "./styles/global.css";

function App() {
  const headerLeftContent = (
    <>
      <AddButton />
      <span className="header-title">Danh sách khóa đào tạo</span>
    </>
  );
  return (
    <Box>
      <Header headerLeftContent={headerLeftContent} />
      <Training />
    </Box>
  );
}

export default App;
