import { StyleSheet, Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../global/colors";
import { useRegisterMutation } from "../services/auth";
import { setUser } from "../features/auth/authSlice";


const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerRegister,{data, isSuccess}] = useRegisterMutation()
  const dispatch = useDispatch()

  
  useEffect(() => {
    if(isSuccess) console.log(data)
  },[isSuccess])

  const onSubmit = async () => {
   const {data} = await triggerRegister({email, password})
   dispatch(setUser({email:data.email, idToken:data.idToken}))
  };


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={errorEmail}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={errorPassword}
        />
        <InputForm
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={errorConfirmPassword}
        />
        <SubmitButton onPress={onSubmit} title="Register" />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.purple1,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: "FiraSans-BlackItalic"
    },
  sub: {
    fontSize: 16,
    fontFamily: "FiraSans-BlackItalic",
    color: colors.purple3,
  },
  subLink: {
    fontSize: 16,
    fontFamily: "FiraSans-BlackItalic",
    color: colors.beige1,
  },
});
