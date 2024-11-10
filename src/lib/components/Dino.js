import React from 'react';

import Resources from './Resources.js';
import DinoScript from './DinoScript.js';
import DinoStyle from './DinoStyle.js';

import './Dino.css';

class ChromeDinoComponent extends React.Component {
  appendDinoScript() {
    let dinoScriptContainer = document.createElement("script");
    dinoScriptContainer.appendChild(document.createTextNode(DinoScript)); 
    this.startDiv.appendChild(dinoScriptContainer);
  }

  appendRunnerScript() {
    let runnerScriptContainer = document.createElement("script");
    runnerScriptContainer.appendChild(document.createTextNode(`new Runner('.interstitial-wrapper');`)); 

    this.endDiv.appendChild(runnerScriptContainer);
  }

  componentDidMount() {
    console.log('>>>>')
    this.appendDinoScript();

    this.appendRunnerScript();
  }

    render() {
        return (
          <div ref={el => (this.startDiv = el)}>
            <style>{DinoStyle}</style>
            <div id="main-frame-error" className="interstitial-wrapper">
              <Resources />
              <div ref={el => (this.endDiv = el)}>
              </div>
              <h3>Obi Pnut Kenobi starting his journey</h3>
              <p>Place space to start game</p>
            </div>
            <div>
              <p style={{textAlign:"center"}}>Obi Pnut Kenobi is fun</p>
              <p  style={{textAlign:"center"}}><a href='https://x.com/Pnut_Kenobi' target="_blank">Join our community</a></p>
            </div>
          </div>
        );
    }
}

export default ChromeDinoComponent;
