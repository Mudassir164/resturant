import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfvt06sTwgTJ_pWX78KpUoMlg_KvCgzx8",
  authDomain: "new12-332807.firebaseapp.com",
  projectId: "new12-332807",
  storageBucket: "new12-332807.appspot.com",
  messagingSenderId: "308336894375",
  appId: "1:308336894375:web:e5f53c427d3c8d9d815682",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
