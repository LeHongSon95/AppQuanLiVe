import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';


const config = {
  apiKey: "AIzaSyD0UMp2A0PqKAX4K5yEndGNYClR181GKQ0",
  authDomain: "duan1-a072d.firebaseapp.com",
  projectId: "duan1-a072d",
  storageBucket: "duan1-a072d.appspot.com",
  messagingSenderId: "517981875692",
  appId: "1:517981875692:web:9da9b195a5abea58cd24c9",
  measurementId: "G-8W8C1FG91B"
  };

  const app = initializeApp(config);

  const db = getFirestore(app);
  // export default firebase.firestore();

  export {db};
  