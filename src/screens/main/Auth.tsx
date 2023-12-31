import { KeyboardAvoidingView, StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { AuthScreenProps } from '../../hoc/withMain';
import { LinearGradient } from 'expo-linear-gradient';

import { AuthScreenIcon } from '../../components/common/Icons'; 
import { COLORS } from '../../utils/tokens';
import FormControlInputComponent from '../../components/form/FormControlInput';
import useForm from '../../hooks/useForm';
import { FormType } from '../../store/auth/auth.type';
import Button from '../../components/buttons/Button';
import IconButton from '../../components/buttons/IconButton';

const AuthScreen = (props: AuthScreenProps) => {
  const { currentRoute, texts } = props;

  const {handleChange, handleSubmit, userData, getFieldValidation } = useForm(currentRoute === 'signup');

  return (
    <KeyboardAvoidingView behavior='height' style={styles.rootContainer} >
      {/* <LinearGradient locations={[0.1, 0.1]} start={{x: 0, y: 0.8}} end={{x: 0.2, y: 1}} colors={[COLORS.primaryLight, COLORS.secondaryLight]} style={styles.innerContainer}> */}
        <ImageBackground source={currentRoute === 'signin' ? require('../../../assets/signinScreen.jpg') : require('../../../assets/signupScreen.jpg')} resizeMode='cover' style={styles.imgBackground}>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            {currentRoute === 'signup' && (
              <FormControlInputComponent 
                id='nickname'
                errorMessage={getFieldValidation('nickname')?.errors[0]}
                isValid={getFieldValidation("nickname")?.isValid} 
                onChange={handleChange}
                placeholder='Enter nickname...'
                type='text'
                variant='outline'
                icon='person-outline'
              />
            )}
            <FormControlInputComponent 
              id='email'
              errorMessage={getFieldValidation('email')?.errors[0]}
              isValid={getFieldValidation("email")?.isValid} 
              onChange={handleChange}
              placeholder='Enter email address...'
              type='text'
              variant='outline'
              icon='at-outline'
            />
            <FormControlInputComponent 
              id='password'
              errorMessage={getFieldValidation('password')?.errors[0]}
              isValid={getFieldValidation("password")?.isValid} 
              onChange={handleChange}
              placeholder='Enter password...'
              type='password'
              variant='outline'
              icon='lock-closed-outline'
            />
            {currentRoute === 'signup' && (
              <FormControlInputComponent 
              id='confirmPassword'
              errorMessage={getFieldValidation("confirmPassword")?.errors[0]}
                isValid={getFieldValidation("confirmPassword")?.isValid} 
                onChange={handleChange}
                placeholder='Confirm password...'
                type='password'
                variant='outline'
                icon='lock-closed-outline'
              />
            )}
            {/* <Button android_ripple={{color: COLORS.primary}} onPress={handleSubmit} _text={{color: 'lightText'}} paddingTop={3} paddingBottom={3} style={styles.button} variant="outline">{texts.btnText}</Button> */}
          </View>
          <View style={{ padding: 16, gap: 16 }}>
            <Button fullWidth label='Log in' onPress={() => {}} size='Medium' type='Primary' variant='Filled' />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <IconButton name='ios-logo-github' onPress={() => {}} size='Large' type='Primary' isRounded showBackgroundColor/>
              <IconButton name='ios-logo-facebook' onPress={() => {}} size='Large' type='Primary' isRounded showBackgroundColor/>
              <IconButton name='ios-logo-google' onPress={() => {}} size='Large' type='Primary' isRounded showBackgroundColor/>
            </View>
          </View>
          {/* <Button _text={{color: 'lightText'}} variant="link">{texts.link}</Button> */}
        </View>
        
        {/* <View style={styles.iconContainer}>
          <AuthScreenIcon style={styles.icon} />
        </View> */}
      </ImageBackground>
      {/* </LinearGradient> */}
    </KeyboardAvoidingView>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
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
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: COLORS.tertiaryLight,
    borderWidth: 0,
    borderRadius: 0,
  }
})