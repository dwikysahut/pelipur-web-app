// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    // await runtime.register();
    try {
      await navigator.serviceWorker.register('./sw.js');
      console.log('service worker registration success');
    } catch (error) {
      console.log('service worker registration success');
    }

    return;
  }
  console.log('Service worker not supported in this browser');
};
export default swRegister;
