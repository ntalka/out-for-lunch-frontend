import React from 'react';
import { getUser } from './Authenticate';
import { deleteRequest, getRequest, postRequest } from './RequestUtils';

export async function GetAllGroups() {
  const resJSON = getRequest('/get-groups-list', String(getUser())).then(
    (resJSON) => {
      if (resJSON.status === 200) {
        const data = JSON.stringify(resJSON['data']);
        try {
          sessionStorage.setItem('groups', data);
        } catch (e) {
          console.log(e);
          sessionStorage.setItem('groups', '[]');
        }
      }
    }
  );
  return await resJSON;
}
// Get specified group from the current sessionStorage
export function GetGroup(groupId) {
  // Finding the exact group
  const group = JSON.parse(sessionStorage.getItem('groups')).find(function (i) {
    if (i.id === groupId) {
      return i;
    }
  });
  if (group) {
    return group;
  }
  return null;
}

export async function joinGroup(groupId) {
  await postRequest('/join-group/' + groupId, {}, String(getUser())).then(
    () => {}
  );
}

export async function leaveGroup(groupId) {
  await postRequest('/leave-group/' + groupId, {}, String(getUser())).then(
    () => {}
  );
}

export function deleteGroup(groupId, joined) {
  deleteRequest('/delete-group/' + groupId, String(getUser())).then(() => {
    if (joined) {
      sessionStorage.removeItem('myGroup');
    }
    // window.location.reload();
  });
}

export function joinRandomGroup(startTime, endTime) {
  const body = {
    endTime: endTime,
    startTime: startTime,
  };
  postRequest('/join-random-group', body, String(getUser())).then(() => {});
}

export async function createEatAtOffice(startTime) {
  const body = {
    time: startTime,
  };
  await postRequest('/eat-at-office', body, String(getUser())).then(() => {});
}

export async function createGroup(placeId, startTime) {
  const body = {
    time: startTime,
    restaurantId: placeId,
  };
  await postRequest('/create-custom-group', body, String(getUser())).then(
    () => {}
  );
}
