import { View, Text, StyleSheet, Image } from 'react-native';

export default function Skincare() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skin Care</Text>

      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.oAy_XnSLwAfWBZQCRyPfPQHaFh?w=245&h=182&c=7&r=0&o=7&pid=1.7&rm=3' }}
        style={styles.image}
      />

      <Text style={styles.product}>Hidratante Facial</Text>
      <Text style={styles.desc}>
        Mantém sua pele hidratada e saudável o dia todo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, color: '#ff69b4', marginBottom: 20 },
  image: { width: 250, height: 180, borderRadius: 10 },
  product: { fontSize: 18, marginTop: 10, fontWeight: 'bold' },
  desc: { textAlign: 'center', padding: 10 }
});