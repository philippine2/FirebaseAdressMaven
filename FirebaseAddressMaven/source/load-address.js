import { setLocalStorage } from './assets/address-local-storage';
import { getFirebaseToken, makeParams } from './getFirebaseToken';

const loadData = () => {
    return new Promise(function(resolve, reject) {
        getFirebaseToken().then(response => {
            fetch('/address-list-db' + makeParams({ token: response.token }))
                .then(response => response.json())
                .then(response => {
                    setLocalStorage(response);
                    resolve(response);
                })
                .catch(ex => {
                    console.log(ex);
                    reject(ex);
                });
        });
    });
};

export { loadData };
