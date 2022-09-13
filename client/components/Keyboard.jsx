import React from 'react'
import Key from './Key'

const Keyboard = () => {
  return (
    <>
      <div>
        <Key keycode={27} id="1" />
        <Key keycode={49} id="2" />
        <Key keycode={50} id="3" />
        <Key keycode={51} id="4" />
        <Key keycode={52} id="5" />
        <Key keycode={53} id="6" />
        <Key keycode={54} id="7" />
        <Key keycode={55} id="8" />
        <Key keycode={56} id="9" />
        <Key keycode={57} id="10" />
        <Key keycode={48} id="11" />
        <Key keycode={109} id="12" />
        <Key keycode={107} id="13" />
        <Key keycode={8} id="14" />
      </div>
      <div>
        <Key keycode={9} id="15" />
        <Key keycode={81} id="16" />
        <Key keycode={87} id="17" />
        <Key keycode={69} id="18" />
        <Key keycode={82} id="19" />
        <Key keycode={84} id="20" />
        <Key keycode={89} id="21" />
        <Key keycode={85} id="22" />
        <Key keycode={73} id="23" />
        <Key keycode={79} id="24" />
        <Key keycode={80} id="25" />
        <Key keycode={219} id="26" />
        <Key keycode={221} id="27" />
        <Key keycode={220} id="28" />
      </div>
      <div>
        <Key keycode={20} id="29" />
        <Key keycode={65} id="30" />
        <Key keycode={83} id="31" />
        <Key keycode={68} id="32" />
        <Key keycode={70} id="33" />
        <Key keycode={71} id="34" />
        <Key keycode={72} id="35" />
        <Key keycode={74} id="36" />
        <Key keycode={75} id="37" />
        <Key keycode={76} id="38" />
        <Key keycode={186} id="39" />
        <Key keycode={222} id="40" />
        <Key keycode={13} id="41" />
      </div>
      <div>
        <Key keycode={16} id="42" />
        <Key keycode={90} id="43" />
        <Key keycode={88} id="44" />
        <Key keycode={67} id="45" />
        <Key keycode={86} id="46" />
        <Key keycode={66} id="47" />
        <Key keycode={78} id="48" />
        <Key keycode={77} id="49" />
        <Key keycode={188} id="50" />
        <Key keycode={190} id="51" />
        <Key keycode={191} id="52" />
        <Key keycode={16} id="53" />
      </div>
      <div>
        <Key keycode={480} id="54" />
        <Key keycode={17} id="55" />
        <Key keycode={18} id="56" />
        <Key keycode={91 || 93 || 224} id="57" />
        <Key keycode={32} id="58" />
        <Key keycode={481} id="59" />
        <Key keycode={482} id="60" />
      </div>
    </>
  )
}

export default Keyboard
