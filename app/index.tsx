import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sessões Das Diva's </Text>

      <Link href="/skincare" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Skin Care</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/cabelo" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Cabelos</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/maquiagem" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Maquiagem</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/promocoes" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Promoções</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, color: '#C2185B', marginBottom: 30, fontWeight: 'bold' },
  button: { backgroundColor: '#C2185B', padding: 15, margin: 10, borderRadius: 10, width: 200 },
  text: { color: '#fff', textAlign: 'center', fontSize: 16 }
});