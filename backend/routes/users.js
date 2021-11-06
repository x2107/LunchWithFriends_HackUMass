import { getDatabase, ref, set } from "firebase/database";

function CreateUser(userId, name) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name
  });
}

function AddUserFriends(userId, friendUserId) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      friends: friendUserId
    });

}

function AddUserEvents(userId, EventId) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      friends: EventId
    });

}

function AddUserEvents(userId, groupId) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      groups: GroupId
    });

}
