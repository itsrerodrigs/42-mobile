import React, { useState } from 'react';
import { View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Swiper from './src/components/Swiper';
import BottomButtons from './src/components/BottomButtons';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0); // 👈 controla a página ativa

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Swiper activeIndex={activeIndex} onSwipe={setActiveIndex} />
      <BottomButtons activeIndex={activeIndex} onPress={setActiveIndex} />
    </View>
  );
}
