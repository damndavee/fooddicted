import * as React from "react";
import { View, Text, Dimensions } from "react-native";

import Carousel from "react-native-reanimated-carousel";
import CarouselItem from "./CarouselItem";
import PaginationItem from "./PaginationItem";
import { useSharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const NativeCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const progressValue = useSharedValue<number>(0);

  const width = Dimensions.get('window').width;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
       <Carousel
          style={{
            width: width * 0.86,
          }}
          width={width * 0.86}
          height={width * 0.6}
          pagingEnabled={true}
          snapEnabled={true}
          mode="parallax"
          loop={true}
          autoPlay={false}
          autoPlayReverse={false}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          maxScrollDistancePerSwipe={width}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          data={[...new Array(6).keys()]}
          onSnapToItem={index => setCurrentIndex(index)}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={(item) => <CarouselItem item={item} currentIndex={currentIndex} variant="big" background={colors[item.index]} text={item.index} />}
          />
         {!!progressValue && (
           <View style={{flexDirection: "row", justifyContent: "space-between", width: 100, alignSelf: "center"}}>
              {colors.map((backgroundColor, index) => {
                return (
                  <PaginationItem
                    backgroundColor={backgroundColor}
                    animValue={progressValue}
                    index={index}
                    key={index}
                    isRotate={false}
                    length={colors.length}
                    />
                );
              })}
            </View>
      )}
      </GestureHandlerRootView>
  );
}

export default NativeCarousel;