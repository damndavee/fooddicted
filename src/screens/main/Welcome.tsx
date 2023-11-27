import { ImageBackground, StyleSheet, View } from 'react-native';
import { Heading, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { MainScreenIcon } from '../../components/common/Icons';
import { COLORS, SPACINGS } from '../../utils/tokens';
import { WelcomeScreenProps } from '../../hoc/withMain';
import Button from '../../components/buttons/Button';

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const { onGoToAuth } = props;

  return (
    // <LinearGradient locations={[0.1, 0.1]} start={{x: 0, y: 0.7}} end={{x: 1, y: 1}} colors={[COLORS.primary, COLORS.secondaryLight]} style={styles.rootContainer} >
    <ImageBackground source={require('../../../assets/welcomeScreen.jpg')} resizeMode='cover' style={styles.imgBackground}>
      <View style={styles.rootContainer}>
        {/* <View style={styles.iconContainer}>
          <MainScreenIcon style={styles.icon} />
        </View> */}
        <View style={styles.descriptionContainer}>
          <View style={styles.headingContainer}>
            <Heading size="2xl" color="white" >Fooddicted</Heading>
          </View>
          <View style={styles.description}>
            <Text style={[styles.descriptionHeader, {color: '#0059D4'}]}>Get Your cooking</Text>
            <Text style={[styles.descriptionText, {color: '#0059D4'}]}>easier than it used to!</Text>
          </View>
        </View>
        <View style={{ gap: SPACINGS.big }}>
          <Button fullWidth label='Log in' onPress={onGoToAuth.bind(this, 'signin')} size='Medium' type='SecondaryLight' variant='Filled' />
          <Button fullWidth label='Sign up' onPress={onGoToAuth.bind(this, 'signup')} size='Medium' type='SecondaryLight' variant='Outline' />
        </View>
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    height: '80%',
    padding: SPACINGS.xlarge,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: "100%",
    alignItems: 'center'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  headingContainer: {
    elevation: 2,
  },
  descriptionContainer: {
    width: "100%",
  },
  icon: {
    marginTop: 50,
    width: 235,
    height: 235,
  },
  description: {
    width: '70%',
  },
  descriptionHeader: {
    paddingTop: SPACINGS.medium,
    fontWeight: 'bold',
    fontSize: 24
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    borderBottomColor: COLORS.secondaryDark,
    borderBottomWidth: 1,
  }
})