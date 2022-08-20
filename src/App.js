import './App.css';
import { Section } from './components/Section/Section';

function App() {
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Section />
      </div>
    </>
  );
}

export default App;
