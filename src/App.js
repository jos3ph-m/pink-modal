import GlobalStyles from './components/GlobalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background-color: #946a6a;
  color: #fcfcfc;
  font-size: 2rem;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Button>Open the Pink Modal</Button>
      </Container>
    </div>
  );
}

export default App;
