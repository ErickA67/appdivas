import { Stack, router } from 'expo-router';
import { useState } from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet,
  Modal, Pressable, SafeAreaView, StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Skin Care', href: '/skincare' },
  { label: 'Cabelos', href: '/cabelo' },
  { label: 'Maquiagem', href: '/maquiagem' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Configuração', href: '/configuracao' },
];

function MenuButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingLeft: 0 }}>
      <Ionicons name="menu" size={26} color="#ffffff" />
    </TouchableOpacity>
  );
}

function LayoutInner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, isDark } = useTheme();

  const navigate = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => router.push(href as any), 300);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.headerBg },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          contentStyle: { backgroundColor: theme.background },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Divas",
            headerLeft: () => <MenuButton onPress={() => setMenuOpen(true)} />,
          }}
        />
        <Stack.Screen name="skincare" options={{ title: 'Skin Care' }} />
        <Stack.Screen name="cabelo" options={{ title: 'Cabelos' }} />
        <Stack.Screen name="maquiagem" options={{ title: 'Maquiagem' }} />
        <Stack.Screen name="promocoes" options={{ title: 'Promoções' }} />
        <Stack.Screen name="sobre" options={{ title: 'Sobre' }} />
        <Stack.Screen name="configuracao" options={{ title: 'Configuração' }} />
        <Stack.Screen name="quiz" options={{ title: 'Quiz' }} />
      </Stack>

      <Modal
        visible={menuOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setMenuOpen(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.overlay} onPress={() => setMenuOpen(false)} />
          <View style={[styles.drawer, { backgroundColor: theme.surface }]}>
            <View style={[styles.drawerHeader, { backgroundColor: theme.headerBg }]}>
              <Text style={styles.drawerTitle}>Menu</Text>
              <TouchableOpacity onPress={() => setMenuOpen(false)}>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.href}
                style={[styles.menuItem, { borderBottomColor: theme.border }]}
                onPress={() => navigate(item.href)}
              >
                <Text style={[styles.menuItemText, { color: theme.text }]}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <LayoutInner />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1,},
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)' },
  drawer: { width: 280, height: '100%' },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  drawerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  menuItem: { padding: 16, borderBottomWidth: 1 },
  menuItemText: { fontSize: 16 },
});
