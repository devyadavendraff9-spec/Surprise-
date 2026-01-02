import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_KEY",
  authDomain: "PASTE_DOMAIN",
  projectId: "PASTE_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value);
};

window.signup = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value);
};

onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("auth").hidden = true;
    document.getElementById("planner").hidden = false;
    loadData(user.uid);
  }
});

window.saveCloud = async (uid, data) => {
  await setDoc(doc(db, "plans", uid), { data });
};

window.loadData = async (uid) => {
  const snap = await getDoc(doc(db, "plans", uid));
  if (snap.exists()) {
    window.data = snap.data().data;
    render();
  }
};
