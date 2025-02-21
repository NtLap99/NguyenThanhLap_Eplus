import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box } from "./components/box";
import AddButton from "./components/addButton";
import Header from "./components/layout/header";
import Course from "./page/Course";
import NewCourse from "./page/NewCourse";
import "./styles/global.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const MainContent = () => {
  const location = useLocation();

  let headerLeftContent;
  if (location.pathname === "/newCourse") {
    headerLeftContent = (
      <Box>
        {" "}
        <Button
          type="primary"
          danger
          ghost
          icon={<PlusOutlined />}
          size="small"
        />
        <span className="header-title">Tạo mới khóa đào tạo</span>
      </Box>
    );
  } else {
    headerLeftContent = (
      <>
        <AddButton />
        <span className="header-title">Danh sách khóa đào tạo</span>
      </>
    );
  }

  return (
    <Box>
      <Header headerLeftContent={headerLeftContent}/>
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/criteria" element={<Course />} />
        <Route path="/newCourse" element={<NewCourse />} />
      </Routes>
    </Box>
  );
};

export default App;
