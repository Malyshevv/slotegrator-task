// reducer
const userList =  [
  {
      id: 1,
      name: 'Admin',
      password: '12345',
      image: 'https://memepedia.ru/wp-content/uploads/2019/11/malysh-joda-3.jpg',
      age: '25',
      country: 'Russia',
      city: 'Anapa',
      emai: 'malyshev.dev@ya.ru',
      phone: '+7 000 000 00 00' 
  },
  {
      id: 2,
      name: 'user',
      password: '123456',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUEAFgDPBsxrQwfiphfrnFs-5XMB6FgbtBeA&usqp=CAU',
      age: '35',
      country: 'Russia',
      city: 'Sochi',
      emai: 'sw.test@ya.ru',
      phone: '+7 000 000 00 00' 
  }
];

const auth = function(state = {status: 'logged out', login: 'guest', password: 'password'}, action) {
  switch (action.type) {
    case 'LOGIN':

      var findUser = userList.find(item => item.name === action.login && item.password === action.password);
      
      if(typeof findUser == 'object') {
        
        var userData = JSON.stringify(findUser);
        localStorage.setItem('user',userData);

        return Object.assign({}, state, {
          status: 'logged in',
          login: action.login,
          password: action.password
        })
      }
      
    case 'LOGOUT':
      return Object.assign({}, state, {
        status: 'logged out',
        login: action.login
      })
    default:
      return state;
  }
}

export default auth;