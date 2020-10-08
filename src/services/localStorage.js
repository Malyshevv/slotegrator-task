const getStorage = function(userData = localStorage.getItem('user')) {
    if(userData) {
        return userData;
    }
};

export default getStorage;