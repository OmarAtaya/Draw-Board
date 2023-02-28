import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/Logo.png';
import {VscSymbolColor} from 'react-icons/vsc';
import {BiColorFill} from 'react-icons/bi';
import {SketchPicker } from 'react-color';
import { AnimatePresence } from 'framer-motion';

function Header({setBlockPickerColor, blockPickerColor, setCanvasColor, canvasColor}) {
  const [IsExpanded, setIsExpanded] = useState(false);
  const [IsExpanded2, setIsExpanded2] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt='' className='header__image'/> 
      <div className='header__container'>
        <div className='color__container'>
          <VscSymbolColor size={30} onClick={() => setIsExpanded(!IsExpanded)}/>
          <AnimatePresence>
            {
              IsExpanded
              ?
              <div className='dropdown__container'>
                <SketchPicker
                  color={blockPickerColor}
                  onChange={(color) => {
                    setBlockPickerColor(color.hex);
                  }}
                />
              </div>
              : ''
            }
          </AnimatePresence>
        </div>
        <div className='color__container'>
          <BiColorFill size={30} onClick={() => setIsExpanded2(!IsExpanded2)}/>
          <AnimatePresence>
            {
              IsExpanded2
              ?
              <div className='dropdown__container'>
                <SketchPicker
                  color={canvasColor}
                  onChange={(color) => {
                    setCanvasColor(color.hex);
                  }}
                />
              </div>
              : ''
            }
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Header