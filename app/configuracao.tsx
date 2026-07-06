import { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './src/context/ThemeContext';

function Row({
  label, value, onChange, primary, text, border,
}: {
  label: string; value: boolean; onChange: (v: boolean) => void;
  primary: string; text: string; border: string;
}) {
  return (
    <View style={[styles.row, { borderBottomColor: border }]}>
      <Text style={[styles.label, { color: text }]}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ true: primary, false: '#ccc' }}
      />
    </View>
  );
}

export default function ConfiguracaoScreen() {
  const { theme, isDark, toggleTheme } = useTheme();
  const [notificacoes, setNotificacoes] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Row label="Notificações " value={notificacoes} onChange={setNotificacoes}
        primary={theme.primary} text={theme.text} border={theme.border} />
      <Row label="Modo escuro" value={isDark} onChange={toggleTheme}
        primary={theme.primary} text={theme.text} border={theme.border} />
      <Text style={[styles.versao, { color: theme.textMuted }]}>Versão 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 14, borderBottomWidth: 1,
  },
  label: { fontSize: 16 },
  botao: { marginTop: 30, padding: 14, borderRadius: 10, alignItems: 'center' },
  botaoTxt: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  versao: { textAlign: 'center', marginTop: 20, fontSize: 12 },
});
