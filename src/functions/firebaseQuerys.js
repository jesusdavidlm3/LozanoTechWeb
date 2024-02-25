import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase"; 

export async function getUserInfo(id) {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()
    return {
        admin: userData.admin,
        name: userData.name,
    }
}

export async function saveUserInfo(id, admin, name){
    await setDoc(doc(db, "users", id), {
        admin: admin,
        name: name
    });
}