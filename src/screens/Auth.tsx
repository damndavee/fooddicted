import { KeyboardAvoidingView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { AuthScreenProps } from '../hoc/withMain';
import { Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import { AuthScreenIcon } from '../components/common/Icons'; 
import { COLORS } from '../utils/tokens';
import FormControlInputComponent from '../components/common/FormControlInput';

const AuthScreen = (props: AuthScreenProps) => {
  const { currentRoute, texts } = props;

  return (
    <KeyboardAvoidingView behavior='height' style={styles.rootContainer} >
      <LinearGradient locations={[0.1, 0.1]} start={{x: 0, y: 0.8}} end={{x: 0.2, y: 1}} colors={[COLORS.tertiary_light, COLORS.secondary]} style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            {currentRoute === 'signup' && (
              <FormControlInputComponent 
                errorMessage='This is error message'
                id='nick'
                isValid
                onChange={() => console.log("TYPING!!")}
                placeholder='Enter nickname...'
                type='text'
                variant='outline'
                icon='person-outline'
              />
            )}
            <FormControlInputComponent 
              errorMessage='This is error message'
              id='email'
              isValid
              onChange={() => console.log("TYPING!!")}
              placeholder='Enter email address...'
              type='text'
              variant='outline'
              icon='at-outline'
            />
            <FormControlInputComponent 
              errorMessage='This is error message'
              id='password'
              isValid
              onChange={() => console.log("TYPING!!")}
              placeholder='Enter password...'
              type='text'
              variant='outline'
              icon='lock-closed-outline'
            />
            {currentRoute === 'signup' && (
              <FormControlInputComponent 
                errorMessage='This is error message'
                id='confirmPassword'
                isValid
                onChange={() => console.log("TYPING!!")}
                placeholder='Confirm password...'
                type='text'
                variant='outline'
                icon='lock-closed-outline'
              />
            )}
            <Button _text={{color: 'lightText'}} paddingTop={3} paddingBottom={3} style={styles.button} variant="outline">{texts.btnText}</Button>
          </View>
          <Button _text={{color: 'lightText'}} variant="link">{texts.link}</Button>
        </View>
        
        <View style={styles.iconContainer}>
          <AuthScreenIcon style={styles.icon} />
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  iconContainer: {
    width: "100%",
    alignItems: 'center'
  },
  formContainer: {
    flex: 1,
    width: '100%'
  },
  form: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: "#fff",
  },
  icon: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: COLORS.primary2,
    borderWidth: 0,
    borderRadius: 0,
  }
})