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
  const height = Dimensions.get('window').height;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
       <Carousel
          style={{
            width,
            height: height * 0.6,
            alignItems: "center",
            justifyContent: "center",
          }}
          width={width}
          height={height * 0.6}
          pagingEnabled={true}
          snapEnabled={true}
          loop={true}
          autoPlay={false}
          autoPlayReverse={false}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          data={props.data}
          // customConfig={() => ({ type: "positive", viewCount: 5 })}
          onSnapToItem={index => setCurrentIndex(index)}
          // modeConfig={{
          //   snapDirection: 'right',
          //   moveSize: 2000,
          //   scaleInterval: 0.13,
          //   showLength: 3.82,
          //   stackInterval: 33,
          // }}
          renderItem={({item}) => <CarouselItem item={item} currentIndex={currentIndex} />}
          />
         {!!progressValue && (
           <View style={{ flexDirection: "row", justifyContent: "space-between", width: 100, alignSelf: "center", marginVertical: 10 }}>
              {props.data.map((item, index) => {
                return (
                  <PaginationItem
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