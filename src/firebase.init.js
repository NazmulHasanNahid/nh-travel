import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCijbp0PXa3dgiRtC7l78t3rQ58itpMdtw",
  authDomain: "nh-travel-f5031.firebaseapp.com",
  projectId: "nh-travel-f5031",
  storageBucket: "nh-travel-f5031.appspot.com",
  messagingSenderId: "980945768162",
  appId: "1:980945768162:web:0068282db3bc0ea283d8bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;