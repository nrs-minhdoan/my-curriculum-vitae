import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-160662152-1", {
    alwaysSendToDefaultTracker: false
  });
  ReactGA.pageview(window.location.href);
}

initializeReactGA();
