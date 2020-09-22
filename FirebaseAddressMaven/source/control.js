import Go from './Go';
import First from './First';
import App from './App';
import AddressShow from './AddressShow';
import About from './About';
import { renderAppTool } from './TheTheme';
import { initApp } from './elf-firebase';
import { FirebaseLogin } from './FirebaseLogin';
import AddressForm from './AddressForm';
import AddressLister from './AddressLister';

import { loadData } from './load-address';

const APPS = {
    App,
    Go,
    First,
    AddressShow,
    AddressLister,
    About,
    AddressForm,
    FirebaseLogin
};

function renderAppInElement(choice) {
    var AppTool = APPS[choice.dataset.app];
    if (!AppTool) return;
    const props = Object.assign({}, choice.dataset);
    renderAppTool(AppTool, props, choice);
}
const doRender = () => {
    const selectors = document.querySelectorAll('.__react-root');
    selectors.forEach(renderAppInElement);
};

window.onload = function() {
    initApp(() => {
        if (window.firebase.auth().currentUser) {
            loadData()
                .then(result => {
                    console.log('LOAD STATUS', result.status);
                    doRender();
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            doRender();
        }
    });
};

/*window.onload = function() {
    if (!dataLoaded()) {
        loadData();
    }

    document.querySelectorAll('.__react-root').forEach(renderAppInElement);
};*/
