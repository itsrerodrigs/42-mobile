import React, { useState } from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import SearchBar from './src/components/SearchBar';
import Swiper from './src/components/Swiper';
import BottomButtons from './src/components/BottomButtons';

import { styles } from './src/styles/weatherAppStyles';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={styles.appContainer}>
      <SearchBar />
      <View style={styles.contentContainer}>
        {activeIndex === 0 && <View><Text>Currently</Text></View>}
        {activeIndex === 1 && <View><Text>Today</Text></View>}
        {activeIndex === 2 && <View><Text>Weekly</Text></View>}
        </View>
        <BottomButtons activeIndex={activeIndex} onPress={setActiveIndex} />
    </SafeAreaView>
  );
}
