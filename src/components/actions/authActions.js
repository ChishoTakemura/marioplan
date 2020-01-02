export const signIn = credentials => {
  return (dispatch, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: ' LOGIN_SUCCESS' });
      })
      .catch(() => {
        dispatch({ type: 'LOGIN_ERROR' });
      });
  };
};

export const signOut = () => {
  return (dispatch, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection('user')
          .doc(resp.user.uid)
          .set({
            fireName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          }).then(() => {
            dispatch({ type:'SIGNUP_SUCCESS'})
          }).catch(err => {
            dispatch({type:'SIGNUP_ERROR', err})
          })
      });
  };
};