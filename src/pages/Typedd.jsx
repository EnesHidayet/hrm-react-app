import React from 'react';
import Typed from 'typed.js';

export default function Typedd() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hello', 'Hello<br>Welcome to', 'Hello<br>Welcome to<br>HRM App'],
      typeSpeed: 50,
      loop: false,
      cursorChar: "|",
      autoInsertCss: true,

      

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App ">
      {/* <h1 className="roboto-mono-sidebar-text" id="element">
        <span ref={el} />
      </h1> */}
      <div ref={el} className='roboto-mono-sidebar-text'></div>
      
    </div>
  );
}