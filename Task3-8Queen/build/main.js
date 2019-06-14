import './assets/main.css';
import App from './App.svelte';
var componentName = 'MyComponent';
if (document.currentScript &&
    document.currentScript.getAttribute('component-name') !== null &&
    document.currentScript.getAttribute('component-name') !== '') {
    componentName = document.currentScript.getAttribute('component-name');
}
;
window[componentName] = App;
export default App;
