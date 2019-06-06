import localStorage from './LocalStorage';

class DataController {
	constructor() {
    }

    getItem(value) {
        return new Promise((resolve, reject) => {
            localStorage.get('activity')
            .then(result => {
                resolve(result);
            })
            .catch(error => reject(error))
        })
    }


    addItemToMany(key, value) {
        return localStorage.merge('activity', {[key]: value});
    }

    changeItemList(value) {
        return new Promise((resolve, reject) => {
            localStorage.add('activity', value)
            .then(() => {
                resolve();
            })
            .catch(error => {
                console.log('error: ', error)
            })
        })
    }

    async removeItem(value) {
        return new Promise((resolve, reject) => {
            localStorage.remove('activity', value)
            .then(result => {
                resolve(result);
            })
            .catch(error => reject(error))
        })
    }

};

const dataController = new DataController();
export default dataController;