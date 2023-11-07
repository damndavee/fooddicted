import { StyleSheet, Text, View } from 'react-native';
import { ReadAboutScreenProps } from '../../hoc/withMain';
import { COLORS } from '../../utils/tokens';
import { ScrollView } from 'native-base';

const ReadAboutScreen = (props: ReadAboutScreenProps) => {

    const { versions } = props;

    const extractVersionsDate = () => {
        return versions.map(version => (
            <View style={styles.versionContainer}>
                <View style={styles.header}>
                    <Text style={styles.date}>{version.date}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    {version.changes.map((change: any) => <Text key={change.id}>&bull; {change.desc}</Text>)}
                </View>
            </View>
        ))
    }

    return (
        <ScrollView style={styles.rootContainer}>
            {extractVersionsDate()}
        </ScrollView>
    )
};

export default ReadAboutScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: COLORS.secondaryDark,
    },
    versionContainer: {
        flex: 1,
        backgroundColor: COLORS.secondaryLight,
    },
    bodyContainer: {
        minHeight: 150,
        padding: 10
    },
    header: {
        flex: 1,
        height: 25,
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    date: {
        color: COLORS.secondaryLight
    }
})