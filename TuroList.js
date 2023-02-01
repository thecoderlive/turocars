import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const turoListItem = ({ item }) => (
<View style={styles.turo_list_item}>
<Image
    style={styles.car_image}
    source={{uri: item.car_image}}
    />
<Image
    style={styles.heart_icon}
    source={{uri: item.heart_icon}}
   />
<Text style={styles.price_per_day}>{item.price_per_day}</Text>
<Text style={styles.car_name}>{item.car_name}</Text>
<Text style={styles.year}>{item.year}</Text>
<Image
    style={styles.star_icon}
    source={{uri: item.star_icon}}
   />
<Text style={styles.tip_count}>{item.tip_count}</Text>
<Text style={styles.book_instantly}>{item.book_instantly}</Text>
<Text style={styles.free_delivery}>{item.free_delivery}</Text>
</View>
  );

const TuroList = ({ item }) => (
<FlatList
    style={styles.turo_list}
    data={item}
    renderItem={turoListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default TuroList;

const styles = StyleSheet.create({
car_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
heart_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
price_per_day: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
car_name: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
year: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
star_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
tip_count: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
book_instantly: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
free_delivery: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});