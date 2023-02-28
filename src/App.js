import { useState } from 'react';
import './App.css';
import Canvas from './Components/Canvas/Canvas';
import Header from './Components/Header/Header';

function App() {
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "0",
    g: "0",
    b: "0",
    a: "1",
  });
  const [canvasColor, setCanvasColor] = useState({
    r: "255",
    g: "255",
    b: "255",
    a: "1",
  });
  return (
    <div className="App">
      <Header setBlockPickerColor={setSketchPickerColor} blockPickerColor={sketchPickerColor} setCanvasColor={setCanvasColor} canvasColor={canvasColor}/>
      <Canvas blockPickerColor={sketchPickerColor} canvasColor={canvasColor}/>
    </div>
  );
}

export default App;
