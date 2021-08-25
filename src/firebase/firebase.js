import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  // hidden
};
initializeApp(firebaseConfig);

// utils
const db = getFirestore();

// // collection references
// const usersCollection = db.collection("users");
// const postsCollection = db.collection("posts");
// const commentsCollection = db.collection("comments");
// const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  // auth,
  // usersCollection,
  // postsCollection,
  // commentsCollection,
  // likesCollection,
};

export const addPlaceToFirebase = async ({
  name,
  contact,
  email,
  imageURL,
  location,
  type,
  secondaryType,
}) => {
  try {
    const docRef = await addDoc(collection(db, "SMEs"), {
      name,
      contact,
      email,
      imageURL,
      location,
      type,
      secondaryType,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// const cardsData = [
//   {
//     name: "Mamak",
//     contact: "0123456789",
//     email: "mamak@gmail.com",
//     imageURL:
//       "https://sm.mashable.com/t/mashable_sea/photo/default/big-tree-nasi-lemak4_nfvk.960.jpg",
//     location: "Kuala Lumpur",
//     type: "F&B",
//     secondaryType: "Indian Food",
//   },
//   {
//     name: "Mamak",
//     contact: "0123456789",
//     email: "mamak@gmail.com",
//     imageURL:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65yoe8XQdvJvmeQteeBgWDO0na2G5nodcqOiIiGB3FpGhld_8_LPhJEHGszVi1-drcDE&usqp=CAU",
//     location: "Kuala Lumpur",
//     type: "F&B",
//     secondaryType: "Indian Food",
//   },
//   {
//     name: "Mamak",
//     contact: "0123456789",
//     email: "mamak@gmail.com",
//     imageURL:
//       "https://www.tripsavvy.com/thmb/rr3Yl32W0CuDZIqcDkRiVHDm0vk=/1024x576/smart/filters:no_upscale()/286808815_23bb97625d_o-59627ebd3df78cdc68bac91e.jpg",
//     location: "Kuala Lumpur",
//     type: "F&B",
//     secondaryType: "Indian Food",
//   },
// ];

// cardsData.forEach((data) => addPlaceToFirebase(data));
