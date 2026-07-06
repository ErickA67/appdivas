import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from './src/context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
return (
  <ScrollView
    contentContainerStyle={[
      styles.container,
      { backgroundColor: theme.background }
    ]}
  >
    <Text style={[styles.title, { color: theme.primary }]}>
      Sessões Das Divas
    </Text>

    <View
      style={[
        styles.banner,
        {
          backgroundColor: theme.bannerBg,
          borderLeftColor: theme.primary
        }
      ]}
    >
      <Text
        style={[
          styles.bannerText,
          { color: theme.textMuted }
        ]}
      >
        Desperte a diva que existe em você com os melhores cosméticos para
        cuidar, iluminar e transformar sua rotina. Descubra produtos
        selecionados para você se sentir ainda mais confiante todos os dias.
      </Text>
    </View>

    {/* Quiz da Pele */}
<TouchableOpacity
  style={[
    styles.quizBanner,
    {
      backgroundColor: theme.bannerBg,
      borderColor: theme.primary,
    },
  ]}
  onPress={() => router.push('/quiz')}
>
      
      <Text style={[styles.quizTitle, { color: theme.primary }]}>
        ✨ Descubra sua Rotina Ideal
      </Text>

      <Text
        style={[
          styles.quizDescription,
          { color: theme.textMuted }
        ]}
      >
        Responda algumas perguntas rápidas e receba recomendações
        personalizadas para sua pele.
      </Text>

      <Text style={[styles.quizButton, { color: theme.primary }]}>
        Fazer Quiz →
      </Text>
    </TouchableOpacity>

    {/* Mais Vendidos */}
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.primary }]}>
        🔥 Mais Vendidos
      </Text>

      <View style={styles.productCard}>
        <Text style={styles.productName}>🧴 Shampoo Nutritivo</Text>
        <Text style={styles.productPrice}>R$ 49,90</Text>
      </View>

      <View style={styles.productCard}>
        <Text style={styles.productName}>💧 Hidratante Facial</Text>
        <Text style={styles.productPrice}>R$ 39,90</Text>
      </View>

      <View style={styles.productCard}>
        <Text style={styles.productName}>✨ Batom Matte Rosa</Text>
        <Text style={styles.productPrice}>R$ 29,90</Text>
      </View>
    </View>

    <TouchableOpacity
      style={[
        styles.promoButton,
        { backgroundColor: theme.primary }
      ]}
      onPress={() => router.push('/promocoes')}
    >
      <Text style={styles.promoButtonText}>
        🎉 Ver Promoções
      </Text>
    </TouchableOpacity>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', paddingVertical: 30, paddingHorizontal: 20 },
  banner: { borderLeftWidth: 4, borderRadius: 10, padding: 18, marginBottom: 20, width: '100%' },
  bannerText: { fontSize: 15, lineHeight: 24, fontStyle: 'italic' },
  promoButton: {
    paddingVertical: 14, paddingHorizontal: 40, borderRadius: 30,
    marginBottom: 30, width: '100%', alignItems: 'center', elevation: 5,
  },
  promoButtonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
  title: { fontSize: 28, marginBottom: 20, fontWeight: 'bold' },
  quizBanner: {
  width: '100%',
  borderWidth: 2,
  borderRadius: 15,
  padding: 20,
  marginBottom: 25,
  alignItems: 'center',
},

quizTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
  textAlign: 'center',
},

quizDescription: {
  textAlign: 'center',
  lineHeight: 22,
  marginBottom: 10,
},

quizButton: {
  fontWeight: 'bold',
  fontSize: 16,
},

section: {
  width: '100%',
  marginBottom: 25,
},

sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 15,
},

productCard: {
  backgroundColor: '#2a1520',
  padding: 15,
  borderRadius: 12,
  marginBottom: 10,
},

productName: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

productPrice: {
  color: '#ff5b9a',
  marginTop: 5,
  fontSize: 15,
},

testimonialCard: {
  backgroundColor: '#2a1520',
  padding: 15,
  borderRadius: 12,
  marginBottom: 10,
},

stars: {
  fontSize: 16,
  marginBottom: 8,
},

comment: {
  color: '#fff',
  marginBottom: 8,
  lineHeight: 22,
},

author: {
  color: '#ffb6cf',
  fontWeight: 'bold',
},

benefit: {
  color: '#fff',
  fontSize: 15,
  marginBottom: 10,
},
});
