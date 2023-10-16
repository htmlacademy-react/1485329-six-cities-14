import Main from './Main';

type AppMainProps = {
  placesCount: number;
}

function App ({placesCount}: AppMainProps): JSX.Element {
  return (
    <Main placesCount={placesCount}/>
  );
}

export default App;
