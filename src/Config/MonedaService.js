import firebase from '../Config/firebase';

export async function getAllMonedas(search){
    const querySnapshot = await firebase.firestore().collection("Moneda")
    .get()
    return querySnapshot.docs
}
export async function getByIdMoneda(id){
    const querySnapshot = await firebase.firestore().doc(`Moneda/${id}`).get()
    return querySnapshot
}
export async function update(id,payload){
    return await firebase.firestore().doc(`Moneda/${id}`).set(payload)
}
export async function deleteMoneda(id){
    return await firebase.firestore().doc(`Moneda/${id}`).delete()
}