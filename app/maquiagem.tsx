import { View, Text, StyleSheet, Image } from 'react-native';

export default function Maquiagem() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maquiagem</Text>

      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/023/742/340/non_2x/pink-lipstick-illustration-ai-generative-free-png.png' }}
        style={styles.image}
      />

      <Text style={styles.product}>Batom Matte Rosa</Text>
      <Text style={styles.desc}>
        Cor intensa e longa duração para um look incrível.
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