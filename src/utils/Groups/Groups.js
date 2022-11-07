import React from 'react'
import {getUser} from "../Authentication/Authenticate";
const example = "{ \"status\": 200, \"message\": \"Success\", \"data\": [ { \"id\": 6, \"officeId\": 1, \"restaurantId\": \"ChIJ-5aEPlQnj0YRFrphwJ8aXy8\", \"groupMember\": [ { \"userId\": 1, \"user\": { \"name\": \"zeebaramzan undefined\" } } ], \"restaurant\": { \"name\": \"Primo Contanti Oy\" } }, { \"id\": 7, \"officeId\": 1, \"restaurantId\": \"ChIJIU42_LbfjkYRaqJ_9DqnIfs\", \"groupMember\": [ { \"userId\": 1, \"user\": { \"name\": \"zeebaramzan undefined\" } } ], \"restaurant\": { \"name\": \"FIMA Forum for Intelligent Machines ry\" } }, { \"id\": 8, \"officeId\": 1, \"restaurantId\": \"ChIJd8SNoLDfjkYRG8S0J4jX3TY\", \"groupMember\": [ { \"userId\": 1, \"user\": { \"name\": \"zeebaramzan undefined\" } } ], \"restaurant\": { \"name\": \"Citycon Oyj\" } } ] }"



export async function GetAllGroups() {
    const user2 = getUser();
    const host = process.env.REACT_APP_SERVER;


    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Authorization': user2
        }
    }
    const res = await fetch(host + "/get-groups-list", requestOptions)
    await res.json().then((resJSON) => {
        console.log(resJSON);

        try{
            sessionStorage.setItem("groups", JSON.stringify(JSON.parse(example).data))
        }
        catch (e){
            sessionStorage.setItem("groups","[]");
        }
    })

}
// Get specified group from the current sessionStorage
export function GetGroup(groupId){
    // Finding the exact group
    const group = JSON.parse(example).data.find(function (i) {
        if (i.id === groupId) {
            return i;
        }
    })
    if (group) {
        return group;
    }
    return null;
}

