import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
// Add useState import to top of file

import { useState } from 'react';

const Home = () => {
// Create state property

  const [input, setInput] = useState('');
  // Add this function

  const onChange = (event) => {

    setInput(event.target.value);

  };
  const generateAction = async () => {

  console.log('Generating...');

  // Add the fetch request

  const response = await fetch('/api/generate', {

    method: 'POST',

    headers: {

      'Content-Type': 'image/jpeg',

    },

    body: JSON.stringify({ input }),

  });

  const data = await response.json();

};
  return (

    <div className="root">

      <Head>

        {/* Add one-liner here */}

        <title>Silly picture generator | buildspace</title>

      </Head>

      <div className="container">

        <div className="header">

          <div className="header-title">

            {/* Add one-liner here */}

            <h1>Silly picture generator</h1>

          </div>

          <div className="header-subtitle">

            {/* Add description here */}

            <h2>

              Turn me into anyone you want! Make sure you refer to me as "abraza" in the prompt

            </h2>

          </div>
           <div className="prompt-container">

  <input className="prompt-box" value={input} onChange={onChange} />

  {/* Add your prompt button in the prompt container */}

  <div className="prompt-buttons">

    <a className="generate-button" onClick={generateAction}>

      <div className="generate">

        <p>Generate</p>

      </div>

    </a>

  </div>

</div>
        </div>

      </div>

      <div className="badge-container grow">

        <a

          href="https://buildspace.so/builds/ai-avatar"

          target="_blank"

          rel="noreferrer"

        >

          <div className="badge">

            <Image src={buildspaceLogo} alt="buildspace logo" />

            <p>build with buildspace</p>

          </div>

        </a>

      </div>

    </div>

  );

};
