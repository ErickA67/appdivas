import { ScrollView, Text, StyleSheet } from 'react-native';
import { useTheme } from './src/context/ThemeContext';

export default function SobreScreen() {
  const { theme } = useTheme();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }} contentContainerStyle={{ padding: 20 }}>
      <Text style={[styles.titulo, { color: theme.primary }]}>Sobre a Divas 💕</Text>
      <Text style={[styles.texto, { color: theme.text }]}>
        A Loja Divas nasceu do amor pela maquiagem e do desejo de oferecer cosméticos de
        alta qualidade com preços acessíveis. Somos uma loja brasileira focada em produtos
        {'\n\n'}
        Nosso catálogo inclui batons, bases, sombras, blushes, máscaras de cílios, skincare
        e muito mais
        {'\n\n'}
        Acreditamos que toda mulher é uma diva e merece se sentir incrível todos os dias.
        Nossa missão é realçar a beleza única de cada cliente com produtos que combinam
        qualidade, inovação e preços justos.
        {'\n\n'}
        Integrantes:{'\n'} Erick{'\n'} Gabriel Travasso{'\n'} Christian Caires{'\n'} Paulo{'\n'} Giulia.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  texto: { fontSize: 15, lineHeight: 22 },
});
