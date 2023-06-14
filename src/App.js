import { GlobalStyle } from "./components/styles/Globalstyle";
import styled from "styled-components";
import Routers from "./routes/Routers";
import DetailPost from "./pages/Post/DetailPost";

const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: #e4ebe5;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routers />
      {/* <DetailPost /> */}
    </Container>
  );
}
export default App;
