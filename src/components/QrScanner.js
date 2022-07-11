import React from 'react';
import './QrScanner.css';
import { Container } from '@material-ui/core';
import Nav from '../components/Nav';
import Html5QrcodePlugin from './Qr/Html5QrcodePlugin.jsx'
import ResultContainerPlugin from './Qr/ResultContainerPlugin.jsx'



class QRscanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: []
    }

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    
    return (
      <Container className="App">
        <div id="qrscanner">
          <Html5QrcodePlugin 
            fps={10}
            qrbox={200}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}/>
          <ResultContainerPlugin results={this.state.decodedResults} />
        </div>
        <Nav/>
      </Container>
    );
  }


  onNewScanResult(decodedText, decodedResult) {
    console.log(
      "App [result]", decodedResult);

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default QRscanner;