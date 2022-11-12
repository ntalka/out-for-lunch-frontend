import React from 'react'
import {getUser} from "../Authentication/Authenticate";
import {getRequest} from "../backend/utils";


export async function GetAllGroups() {
    const user = getUser();
    const resJSON = getRequest("/get-groups-list", String(user))
        .then((resJSON) => {
            if(resJSON.status===200){
                const data = JSON.stringify(resJSON["data"])
                try{
                    sessionStorage.setItem("groups", data)
                }
                catch (e){
                    console.log(e)
                    sessionStorage.setItem("groups","[]");
                }
            }

        })
    return await resJSON;
}
// Get specified group from the current sessionStorage
export function GetGroup(groupId){
    // Finding the exact group
    const group = JSON.parse(sessionStorage.getItem("groups")).find(function (i) {
        if (i.id === groupId) {
            return i;}})
    if (group) {
        return group;
    }
    return null;
}

