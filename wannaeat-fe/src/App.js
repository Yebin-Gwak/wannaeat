import React from 'react';
import { theme } from './style/common/theme';
import { Global, css } from '@emotion/react';
import WEButton from './component/WEButton.jsx';

const globalStyles = css`
  @font-face {
    font-family: 'Paperlogy-8ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2')
      format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  body {
    font-family: 'Paperlogy-8ExtraBold', sans-serif;
  }
`;

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <p style={{ color: theme.colors.primary }}>안녕하세요</p>
      <WEButton size="short">Short</WEButton>
      <WEButton size="medium">Short</WEButton>
      <WEButton size="long">Short</WEButton>
      <WEButton disabled size="long">
        disabled
      </WEButton>
      <WEButton
        backgroundColor={'gray'}
        activeColor={'white'}
        color={'black'}
        size="long"
      >
        URCOLOR
      </WEButton>
    </div>
  );
}

export default App;
