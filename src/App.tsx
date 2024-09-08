import React, { useEffect } from "react";
import { db, collection, addDoc } from "./firebase";

export async function test() {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function App() {
  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <h1>Firestore data add test</h1>
    </div>
  );
}

export default App;
