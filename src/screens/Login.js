import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { colors } from "../global/colors";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/auth";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [triggerLogin, { data, isSuccess, isError, error }] =
    useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) console.log(data);
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setErrorEmail("The data is incorrect. Please check again.");
      setErrorPassword("The data is incorrect. Please check again.");
    }
  }, [isError]);

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
      insertSession(data);
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      console.log(error.path), console.log(error.message);
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          setErrorPassword("");
          break;
        case "password":
          setErrorPassword(error.message);
          setErrorEmail("");
          break;
        default:
          break;
      }
    }
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
          <SubmitButton onPress={onSubmit} title="Login" />
          <Text style={styles.sub}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.subLink}>Register</Text>
          </Pressable>
        </View>
      </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.purple1,
    gap: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 70,
  },
  title: {
    fontSize: 22,
    fontFamily: "FiraSans-BlackItalic",
  },
  sub: {
    fontSize: 16,
    fontFamily: "FiraSans-BlackItalic",
    color: 'white',
  },
  subLink: {
    fontSize: 16,
    fontFamily: "FiraSans-BlackItalic",
    color: colors.beige1,
  },
});
