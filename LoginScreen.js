import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Defs, LinearGradient, Stop } from 'react-native-svg';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  function SvgTop() {
    return (
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={Dimensions.get('window').width}
    height={Dimensions.get('window').height}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path fill="#E4E4D0" d="M0 0h449v844H0z" />
      <Path
        fill="url(#b)"
        d="M451.032 71.575C440.654 132.716 204.548 300.622.022-9.101 10.152-16.663 36.92 40.42 205.65 12.182c17.055-2.854 269.868-84.865 245.382 59.393Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={312.671}
        x2={168.982}
        y1={179.072}
        y2={-97.072}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#94A684" />
        <Stop offset={0.354} stopColor="#94A684" stopOpacity={0.98} />
        <Stop offset={0.589} stopColor="#94A684" stopOpacity={0.985} />
        <Stop offset={0.917} stopColor="#94A684" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h449v844H0z" />
      </ClipPath>
    </Defs>
  </Svg>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <SvgTop />
      <View style={styles.container}>
        <Text style={styles.titulo}>GardenSense</Text>
        <Text style={styles.subTitle}>Sign In to your account</Text>
        <TextInput placeholder="example@email.com" style={styles.textInput} />
        <TextInput
          placeholder="password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  titulo: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    padding: 20,
  },
  subTitle: {
    
    fontSize: 20,
    color: 'grey',
  },
  textInput: {
    width: '100%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  signInButton: {
    marginTop: 30,
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 20,
  },
});
