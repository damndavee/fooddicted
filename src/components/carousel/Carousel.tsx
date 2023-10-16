import * as React from "react";
import { View, Text, Dimensions } from "react-native";

import Carousel from "react-native-reanimated-carousel";
import CarouselItem from "./CarouselItem";
import PaginationItem from "./PaginationItem";
import { useSharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DetailedRecipeType } from "../../store/recipes/recipes.type";
import { COLORS } from "../../utils/tokens";

type CarouselProps = {
  data: DetailedRecipeType[];
}

const NativeCarousel = (props: CarouselProps) => {
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
          autoPlayReverse={true}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          maxScrollDistancePerSwipe={width}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          data={props.data}
          onSnapToItem={index => setCurrentIndex(index)}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({item}) => <CarouselItem item={item} currentIndex={currentIndex} variant="big" background={COLORS.navbar} />}
          />
         {!!progressValue && (
           <View style={{flexDirection: "row", justifyContent: "space-between", width: 100, alignSelf: "center"}}>
              {props.data.map((item, index) => {
                return (
                  <PaginationItem
                    backgroundColor={COLORS.navbar}
                    animValue={progressValue}
                    index={index}
                    key={index}
                    isRotate={false}
                    length={props.data.length}
                    />
                );
              })}
            </View>
      )}
      </GestureHandlerRootView>
  );
}

export default NativeCarousel;