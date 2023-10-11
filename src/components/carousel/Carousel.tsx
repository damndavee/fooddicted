import * as React from "react";
import { View, Text } from "react-native";

import Carousel from "react-native-reanimated-carousel";

const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const NativeCarousel = () => {
  return (
       <Carousel
          style={{
            width: "100%",
            height: 240,
            alignItems: "center",
            justifyContent: "center",
          }}
          width={280}
          height={210}
          pagingEnabled={true}
          snapEnabled={true}
          mode="horizontal-stack"
          loop={true}
          autoPlay={false}
          autoPlayReverse={true}
          data={[...new Array(6).keys()]}
          modeConfig={{
            snapDirection: 'right',
            stackInterval: 18,
          }}
          customConfig={() => ({ type: "positive", viewCount: 5 })}
          renderItem={({ index }) => (
            <View
            style={{flex: 1, borderWidth: 1, justifyContent: 'center', backgroundColor: colors[index]}}
                >
                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                {index}
                </Text>
                </View>
              )}
        />
  );
}

export default NativeCarousel;