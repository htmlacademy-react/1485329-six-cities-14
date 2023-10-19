

function NoMatch (): JSX.Element {
  return (
    <div style={{backgroundImage: 'url(\'https://i.ibb.co/mNVG1gv/error.png\')', backgroundPosition: 'center',
      backgroundSize: 'cover', width: '100vw', height: '100vh', backgroundRepeat: 'no-repeat', textAlign: 'center' }}
    >
      <h1 style={{padding: '0', margin: '0', fontSize: '54px'}}>404</h1>
      <span style={{padding: '0', margin: '0', fontSize: '32px'}}>Not Found</span>
    </div>
  );
}

export default NoMatch;
