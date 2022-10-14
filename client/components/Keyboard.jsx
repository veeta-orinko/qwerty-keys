import React from 'react'
import Key from './Key'
import AboutButton from './AboutButton'
import { Link } from 'react-router-dom'

/// contemplate = create random chords by -4 & -2 numbers by cycling through the
/// 'key' ID

/// adding note to keys
const Keyboard = () => {
  return (
    <>
      <div className="keyboard">
        <div>
          <Key keycode={27} id="1 " note="A2" />
          <Key keycode={49} id="2" note="F2" />
          <Key keycode={50} id="3" note="F3" />
          <Key keycode={51} id="4" note="F4" />
          <Key keycode={52} id="5" note="G2" />
          <Key keycode={53} id="6" note="G3" />
          <Key keycode={54} id="7" note="G4" />
          <Key keycode={55} id="8" note="B2" />
          <Key keycode={56} id="9" note="B3" />
          <Key keycode={57} id="10" note="D3" />
          <Key keycode={48} id="11" note="C2" />
          <Key keycode={109} id="12" note="C3" />
          <Key keycode={107} id="13" note="C4" />
          <Key keycode={8} id="14" note="C5" />
        </div>
        <div>
          <Key keycode={9} id="15" note="G2#" />
          <Key keycode={81} id="16" note="G3#" />
          <Key keycode={87} id="17" note="A2#" />
          <Key keycode={69} id="18" note="A3#" />
          <Key keycode={82} id="19" note="B2#" />
          <Key keycode={84} id="20" note="B3#" />
          <Key keycode={89} id="21" note="D2#" />
          <Key keycode={85} id="22" note="C4#" />
          <Key keycode={73} id="23" note="C2#" />
          <Key keycode={79} id="24" note="E2#" />
          <Key keycode={80} id="25" note="E3#" />
          <Key keycode={219} id="26" note="E4#" />
          <Key keycode={221} id="27" note="F3#" />
          <Key keycode={220} id="28" note="F2#" />
        </div>
        <div>
          <Key keycode={20} id="29" note="D1" />
          <Key keycode={65} id="30" note="D2" />
          <Key keycode={83} id="31" note="D3" />
          <Key keycode={68} id="32" note="D4" />
          <Key keycode={70} id="33" note="F4b" />
          <Key keycode={71} id="34" note="F5" />
          <Key keycode={72} id="35" note="E4" />
          <Key keycode={74} id="36" note="E3" />
          <Key keycode={75} id="37" note="D4b" />
          <Key keycode={76} id="38" note="G5#" />
          <Key keycode={186} id="39" note="D3b" />
          <Key keycode={222} id="40" note="D4b" />
          <Key keycode={13} id="41" note="A4b" />
        </div>
        <div>
          <Key keycode={16} id="42" note="A4b" />
          <Key keycode={90} id="43" note="B3b" />
          <Key keycode={88} id="44" note="C4b" />
          <Key keycode={67} id="45" note="D3b" />
          <Key keycode={86} id="46" note="D5b" />
          <Key keycode={66} id="47" note="F3b" />
          <Key keycode={78} id="48" note="E4b" />
          <Key keycode={77} id="49" note="E3b" />
          <Key keycode={188} id="50" note="C5b" />
          <Key keycode={190} id="51" note="C3b" />
          <Key keycode={191} id="52" note="E5b" />
          <Key keycode={16} id="53" note="D5" />
        </div>
        <div>
          <Link to="about">
            <AboutButton />
          </Link>

          <Key keycode={17} id="55" note="A4b" />
          <Key keycode={18} id="56" note="D4" />
          <Key keycode={91 || 93 || 224} id="57" note="F2" />
          <Key keycode={32} id="58" note="F3#" />
          <Key keycode={481} id="59" note="E4" />
          <Key keycode={482} id="60" />
        </div>
      </div>
    </>
  )
}

export default Keyboard
