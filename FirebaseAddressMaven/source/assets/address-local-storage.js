import { saveByIndex } from './elf-local-storage';
import logger from './elf-logger';

logger.off();

const KEY_SET = ['elven-store', 'elven-count'];

function setLocalStorage(addresses) {
    //console.log('SET LOCAL', addresses);
    localStorage.setItem(KEY_SET[0], '1');
    localStorage.setItem(KEY_SET[1], addresses.length);
    addresses.forEach(function(address, index) {
        saveByIndex(address, index);
    });
    return addresses;
}

function dataLoaded() {
    const elvenStore = localStorage.getItem(KEY_SET[0]);
    return elvenStore === '1';
}

export { setLocalStorage, dataLoaded };
