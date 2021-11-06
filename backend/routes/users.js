import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, friends[], events[], groups[]) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}