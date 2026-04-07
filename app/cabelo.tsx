import { View, Text, StyleSheet, Image } from 'react-native';

export default function Cabelo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cabelos</Text>

      <Image
        source={{ uri: 'https://tse2.mm.bing.net/th/id/OIP.V7AWTn4IDN2TJEfuhmdOdwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'}}
        style={styles.image}
      />

      <Text style={styles.product}>Shampoo Nutritivo</Text>
      <Text style={styles.desc}>
        Deixa o cabelo macio, brilhante e saudável.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, color: '#ff69b4', marginBottom: 20 },
  image: { width: 150, height: 150 },
  product: { fontSize: 18, marginTop: 10, fontWeight: 'bold' },
  desc: { textAlign: 'center', padding: 10 }
});