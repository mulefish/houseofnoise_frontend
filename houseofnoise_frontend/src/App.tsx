import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import { domainToUnicode } from 'url';
import { findByPlaceholderText } from '@testing-library/dom';
import { env } from 'process';

function App() {

  interface penny {
    name: string;
  }

  interface finch {
    finch: string;
  }
  interface sentence {
    sentence: string;
  }

  const [sentence, setSentence] = useState<sentence>({ sentence: '' });
  const [zzz, setZzz] = useState<finch>({ finch: 'finch' });

  const xxx = (s: string): void => {
    setSentence({ sentence: s })
  }

  const vvv = (t: string): void => {
    setZzz({ finch: t })
  }

  const doLogic = (): void => {
    eval(zzz.finch)
  }

  return (

    <div>
      <input id='target' type="text" placeholder="Enter your name" onChange={(evt) => xxx(evt.target.value)} />
      {JSON.stringify(sentence)}
      <br />
      <textarea id='ta1' rows={3} cols={80} onChange={(evt) => vvv(evt.target.value)} />
      <br />
      <button onClick={() => doLogic()}>penny</button>
      {zzz.finch}

    </div>

  );
}

export default App;