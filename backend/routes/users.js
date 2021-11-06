import { getDatabase, ref, set, } from "firebase/database";

function CreateUser(name) {
  const db = getDatabase();
  const res = await db.collection('users').add({
    username: name,
    friends: [],
    events: [],
    groups: []
  });
  
  console.log('Added document with ID: ', res.id);
}

function AddUserFriends(userId, friendId) {
    const db = getDatabase();
    const userRef = db.collection('users').doc(userId);
    const unionRes = await userRef.update({
        friends: FieldValue.arrayUnion(friendId)
    })
    console.log('Friend Added: ', friendId);
}

function RemoveUserFriends(userId, friendUserId) {
    const db = getDatabase();
    const userRef = db.collection('users').doc(userId);
    const unionRes = await userRef.update({
        friends: FieldValue.arrayRemove(friendId)
    })
    console.log('Friend Removed: ', friendId);
}

function GetFriends(userId) {
    const db = getDatabase();
    get(child(dbRef, `users/${userId}/friendUserId`)).then((snapshot) => {
        if (snapshot.exists()) {
          return(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
}

function AddUserEvent(userId, eventId) {
    const db = getDatabase();
    const userRef = db.collection('users').doc(userId);
    const unionRes = await userRef.update({
        events: FieldValue.arrayUnion(eventId)
    })
    console.log('Event Added: ', eventId);
}

function RemoveUserEvent(userId, eventId) {
    const db = getDatabase();
    const userRef = db.collection('users').doc(userId);
    const unionRes = await userRef.update({
        events: FieldValue.arrayRemove(eventId)
    })
    console.log('Event Removed: ', eventId);
}

function AddUserGroup(userId, groupId) {
    const db = getDatabase();
    const userRef = db.collection('users').doc(userId);
    const unionRes = await userRef.update({
        groups: FieldValue.arrayUnion(groupId)
    })
    console.log('Event Added: ', groupId);
}

function RemoveUserGroup(userId, groupId) {
    const db = getDatabase();
    const userRef = db.collection('users').doc(userId);
    const unionRes = await userRef.update({
        groups: FieldValue.arrayRemove(groupId)
    })
    console.log('Event Removed: ', groupId);
}
