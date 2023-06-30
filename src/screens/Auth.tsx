import { StyleSheet, Text, View } from 'react-native';
import { AuthScreenProps } from '../hoc/withMain';
import { Button } from 'native-base';

const AuthScreen = (props: AuthScreenProps) => {

  const { currentRoute, texts } = props;

  return (
    <View>
      <Text>Auth</Text>
      <Button>{texts.btnText}</Button>
    </View>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({})