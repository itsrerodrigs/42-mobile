import React, { act, use, useRef } from "react";
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { styles } from '../styles/weatherAppStyles';

const { width } = Dimensions.get('window');

const Swiper = ({ activeIndex, onSwipe }) => {
    const scrollRef = useRef();

    const scrollToIndex = (index) => {
        scrollRef.current.scrollTo({ x: index * width, animated: true });
    };

    React.useEffect(() => {
        scrollToIndex(activeIndex);
    }, [activeIndex]);

    const handleScrollEnd = (event) => {
        const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        onSwipe(newIndex);
    };

    return (
        <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        style={styles.swiperContainer}
    >
        <View style={styles.currentPage}><Text style={styles.pageText}>Currently</Text></View>
        <View style={styles.todayPage}><Text style={styles.pageText}>Today</Text></View>
        <View style={styles.weeklyPage}><Text style={styles.pageText}>Weekly</Text></View>
    </ScrollView>
    );
};

export default Swiper;