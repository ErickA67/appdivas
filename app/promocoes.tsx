import { View, Text, StyleSheet, Image } from 'react-native';

export default function Promocoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promoções</Text>

      <Image
        source={{ uri: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3fci9g1jry011' }}
        style={styles.image}
      />

      <Text style={styles.product}>Kit Beleza Completo</Text>
      <Text style={styles.desc}>
        Combo especial com desconto para você arrasar!
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