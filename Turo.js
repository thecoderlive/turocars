import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import TuroList from './TuroList'

const Turo = () => (
<ScrollView style={styles.turo} showsVerticalScrollIndicator={false}>
<TuroList item={item.turo_list}/>
</ScrollView>
)

export default Turo;

const styles = StyleSheet.create({

});