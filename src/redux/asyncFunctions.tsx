import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {getDistance} from 'geolib';

//Function to check existance of user phone number
export const phoneCheck = async (action: any) => {
  try {
    const dummyEmail = action + '@gmail.com';
    console.log(dummyEmail);
    const checkPhone = await auth()
      .signInWithEmailAndPassword(dummyEmail, 'pass')
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    if (checkPhone.code == 'auth/user-not-found') {
      //signUp
      return {data: checkPhone.code};
    } else if (checkPhone.code == 'auth/wrong-password') {
      const confirmation = await auth()
        .signInWithPhoneNumber(action)
        .then(res => res)
        .catch(err => console.log('err', err));
      //@ts-ignore
      return {data: confirmation, confirm: confirmation.confirm};
    } else {
      return {data: checkPhone.code};
    }
  } catch (e) {
    console.log('OTP Error :', e);
  }
};

//Creating user account
export const signUp = async (action: any) => {
  try {
    const dummyEmail = '+91' + action.phoneNumber + '@gmail.com';
    const completePhone = '+91' + action.phoneNumber;

    const data = await auth()
      .createUserWithEmailAndPassword(dummyEmail, 'Dummy@123')
      .then(res => {
        return {res: res, ack: true};
      })
      .catch(err => {
        return {res: err, ack: false};
      });

    if (data.ack == true) {
      console.log(true);

      const confirmation = await auth()
        .signInWithPhoneNumber(completePhone)
        .then(res => res)
        .catch(err => err);

      return {data: confirmation, confirm: confirmation.confirm};
    } else {
      console.log(false);
      return {data: 'Unsuccesfull'};
    }
  } catch (e) {
    console.log(e);
  }
};

//Validating using OTP
export const otpCheck = async (action: any) => {
  try {
    // @ts-ignore
    const res = await action.otpFun.otpConfirm.data
      .confirm(action.otp)
      .then((res: any) => {
        firestore()
          .collection('users')
          .doc(res?.user?.uid)
          .set(action.userDetails)
          .then(res => console.log(res))
          .catch(err => console.log(err));
        return res;
      })
      .catch((err: any) => {
        return err;
      });

    return res;
  } catch (e) {
    console.log(e);
    //@ts-ignore
    return e.code;
  }
};

export const publishRide = async (action: any) => {
  await firestore()
    .collection('PublishRide')
    .doc(action?.id)
    .set(action)
    .then(res => console.log(res))
    .catch(err => console.log(err));

  await firestore()
    .collection('users')
    .doc(action.userID)
    .update({
      PublishedRides: firestore.FieldValue.arrayUnion(action?.id),
    });
};

export const searchRide = async (action: any) => {
  await firestore()
    .collection('BookedRide')
    .doc(action?.id)
    .set(action)
    .then(res => console.log(res))
    .catch(err => console.log(err));

  await firestore()
    .collection('users')
    .doc(action.userID)
    .update({
      BookedRides: firestore.FieldValue.arrayUnion(action?.id),
    });
};

export const searchRideData = async (action: any) => {
  console.log('================== action ==================');
  console.log(action);
  console.log('====================================');

  const searchRideData = await firestore()
    .collection('PublishRide')
    .where('date', '==', action.date)
    .get()
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });

  let searchData: FirebaseFirestoreTypes.DocumentData[] = [];
  searchRideData.forEach((documentSnapshot: any) => {
    searchData.push(documentSnapshot.data());
  });

  let finalRides = [];
  for (let i = 0; i < searchData.length; i++) {
    const pickDistance = getDistance(
      {
        latitude: action.pickUplocation.latitude,
        longitude: action.pickUplocation.longitude,
      },
      {
        latitude: searchData[i].location.pickUp.latitude,
        longitude: searchData[i].location.pickUp.longitude,
      },
    );

    const dropDistance = getDistance(
      {
        latitude: action.droplocation.latitude,
        longitude: action.droplocation.longitude,
      },
      {
        latitude: searchData[i].location.drop.latitude,
        longitude: searchData[i].location.drop.longitude,
      },
    );

    if (
      pickDistance < 20000 &&
      dropDistance < 20000 &&
      searchData[i].count >= action.count
    ) {
      finalRides.push(searchData[i]);
    }
  }

  return finalRides;
};

export const profile = async (action: any) => {
  const data = await firestore()
    .collection('users')
    .doc(action)
    .get()
    .then(res => {
      console.log('res : ', res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });

  return data;
};

export const updateSearchRideSeat = async (action: any) => {
  const collectionRef = firestore().collection('PublishRide');
  const data = await collectionRef
    .where('id', '==', action.id)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const documentRef = collectionRef.doc(documentSnapshot.id);
        return documentRef
          .update({
            count: action.seatBooked,
          })
          .then(() => {
            console.log('Document updated successfully');
          })
          .catch(error => {
            console.error('Error updating document:', error);
          });
      });
    })
    .catch(error => {
      console.error('Error fetching documents:', error);
    });

  return data;
};

export const publishRideData = async (action: any) => {
  const data = await firestore()
    .collection('PublishRide')
    .where('userID', '==', action)
    .get()
    .then(res => {
      console.log('res : ', res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });

  const rides: any[] = [];

  data.forEach((documentSnapshot: any) => {
    rides.push(documentSnapshot.data());
  });

  return rides;
};

export const bookedRideData = async (action: any) => {
  const data = await firestore()
    .collection('BookedRide')
    .where('userID', '==', action)
    .get()
    .then(res => {
      console.log('res : ', res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });

  const rides: any[] = [];

  data.forEach((documentSnapshot: any) => {
    rides.push(documentSnapshot.data());
  });
  return rides;
};

export const updateName = async (action: any) => {
  await firestore()
    .collection('users')
    .doc(action.id)
    .update({
      name: action.name,
    })
    .then(res => {
      console.log('res : ', res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

export const updateEmePhone = async (action: any) => {
  await firestore()
    .collection('users')
    .doc(action.id)
    .update({
      emergencyContactNumber: action.phoneNumber,
    })
    .then(res => {
      console.log('res : ', res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};
