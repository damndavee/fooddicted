import { StyleSheet, View } from 'react-native';
import { Heading, Text, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { MainScreenIcon } from '../components/common/Icons';
import { COLORS } from '../utils/tokens';
import { WelcomeScreenProps } from '../hoc/withMain';

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const { onGoToAuth, onGoToReadAbout } = props;

  return (
    <LinearGradient locations={[0.1, 0.1]} start={{x: 0, y: 0.7}} end={{x: 1, y: 1}} colors={[COLORS.tertiary, COLORS.secondary]} style={styles.rootContainer} >
      <View style={styles.iconContainer}>
        <MainScreenIcon style={styles.icon} />
      </View>
      <View style={styles.headingContainer}>
        <Heading style={styles.heading}>Food-dicted</Heading>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text style={styles.descriptionHeader}>Get Your cooking</Text>
          <Text style={styles.descriptionText}>easier than it used to!</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <Button variant="ghost" _text={{color: "black", paddingLeft: 5}} onPress={onGoToAuth.bind(this, 'signin')} android_ripple={{color: COLORS.text}} leftIcon={<Ionicons size={24} name='arrow-forward-circle-outline' />} style={styles.button}>Sign in</Button>
        <Button variant="ghost" _text={{color: "black", paddingLeft: 5}} onPress={onGoToAuth.bind(this, 'signup')} android_ripple={{color: COLORS.text}} leftIcon={<Ionicons size={24} name='add-circle-outline' />} style={styles.button}>Sign up</Button>
        <Button variant="ghost" _text={{color: "black", paddingLeft: 5}} onPress={onGoToReadAbout} android_ripple={{color: COLORS.text}} leftIcon={<Ionicons size={24} name='book-outline' />} style={styles.button}>Read about</Button>
      </View>
    </LinearGradient>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  iconContainer: {
    width: "100%",
    alignItems: 'center'
  },
  headingContainer: {
    backgroundColor: COLORS.primary,
    width: "70%",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginLeft: 20,
    marginTop: 20,
    elevation: 2,
  },
  descriptionContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: 'center'
  },
  actionContainer: {
    width: '70%',
    flex: 1,
    alignSelf: 'flex-end',
    marginVertical: 55,
    marginRight: 15,
    elevation: 21
  },
  icon: {
    marginTop: 50,
    width: 235,
    height: 235,
  },
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  description: {
    width: '70%',
  },
  descriptionHeader: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 24
  },
  descriptionText: {
    fontSize: 16
  },
  button: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  }
})