import { postRequest, putRequest } from './RequestUtils';
import { getUser } from './Authenticate';

function SaveUserInfo(
  dataJSON,
  toLocal = Boolean(localStorage.getItem('authToken'))
) {
  const authToken = String(dataJSON['authToken']);
  const userInfo = JSON.stringify({
    name: dataJSON['data']['name'],
    email: dataJSON['data']['email'],
    officeId: dataJSON['data']['officeId'],
    officeLocation: dataJSON['data']['location'],
  });
  sessionStorage.setItem('authToken', authToken);
  sessionStorage.setItem('userInfo', userInfo);
  if (toLocal) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userInfo', userInfo);
  }
}

function UpdateUserInfo(
  userJSON,
  toLocal = Boolean(localStorage.getItem('authToken'))
) {
  sessionStorage.setItem('userInfo', JSON.stringify(userJSON));
  if (toLocal) {
    localStorage.setItem('userInfo', JSON.stringify(userJSON));
  }
}

export async function LoginUser(email, password, remember) {
  const body = {
    email: email,
    password: password,
  };
  return await postRequest('/login', body, null).then((resJSON) => {
    if (resJSON.status === 200) {
      SaveUserInfo(resJSON, remember);
    }
    return resJSON;
  });
}

export async function SignUpUser(email, password) {
  let message = null;
  const body = {
    email: email,
    password: password,
  };
  await postRequest('/signup', body, null).then((resJSON) => {
    // Setting up popup message
    message = resJSON.message;
  });
  return message;
}

export async function changeLocation(officeId, coordinates) {
  const body = {
    officeId: officeId,
  };
  await putRequest('/update-user', body, String(getUser())).then(() => {
    const userdata = JSON.parse(sessionStorage.getItem('userInfo'));
    userdata['officeId'] = officeId;
    userdata['officeLocation'] = coordinates;
    UpdateUserInfo(userdata);
  });
}
