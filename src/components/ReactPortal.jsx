import { createPortal } from 'react-dom';
import { useState, useLayoutEffect } from 'react';

const ReactPortal = ({ children, wrapperId }) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not found with wrapperId,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element.parentNode)
        element.parentNode.removeChild(element);
    };
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;
  return createPortal(children, document.getElementById(wrapperId));
};

export default ReactPortal;
