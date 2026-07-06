import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from './src/context/ThemeContext';

export default function Quiz() {
  const { theme } = useTheme();

  const [oleosa, setOleosa] = useState(0);
  const [seca, setSeca] = useState(0);
  const [sensivel, setSensivel] = useState(0);
  const [resultado, setResultado] = useState('');

  const finalizarQuiz = () => {
    if (oleosa > seca && oleosa > sensivel) {
      setResultado(
        '✨ Pele Oleosa\n\nRecomendamos gel de limpeza facial, sérum de vitamina C e hidratante oil-free.'
      );
    } else if (seca > oleosa && seca > sensivel) {
      setResultado(
        '💧 Pele Seca\n\nRecomendamos hidratantes intensivos, ácido hialurônico e máscaras hidratantes.'
      );
    } else if (sensivel > oleosa && sensivel > seca) {
      setResultado(
        '🌿 Pele Sensível\n\nRecomendamos produtos suaves, sem álcool e com ingredientes calmantes.'
      );
    } else {
      setResultado(
        '😊 Pele Normal\n\nSua pele está equilibrada. Aposte em limpeza, hidratação e proteção solar diária.'
      );
    }
  };

  const responder = (tipo: string) => {
    if (tipo === 'oleosa') setOleosa(oleosa + 1);
    if (tipo === 'seca') setSeca(seca + 1);
    if (tipo === 'sensivel') setSensivel(sensivel + 1);
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >

      <Text style={[styles.title, { color: theme.primary }]}>
        Quiz da Pele ✨
      </Text>

      <Text style={[styles.question, { color: theme.text }]}>
        Como sua pele fica ao final do dia?
      </Text>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('oleosa')}
      >
        <Text style={styles.optionText}>Muito brilhante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('seca')}
      >
        <Text style={styles.optionText}>Ressecada</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('sensivel')}
      >
        <Text style={styles.optionText}>Irritada facilmente</Text>
      </TouchableOpacity>

      <Text style={[styles.question, { color: theme.text }]}>
        Como são seus poros?
      </Text>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('oleosa')}
      >
        <Text style={styles.optionText}>Grandes e visíveis</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('seca')}
      >
        <Text style={styles.optionText}>Pequenos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('sensivel')}
      >
        <Text style={styles.optionText}>Variam bastante</Text>
      </TouchableOpacity>

      <Text style={[styles.question, { color: theme.text }]}>
        Com que frequência sua pele fica vermelha?
      </Text>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('sensivel')}
      >
        <Text style={styles.optionText}>Frequentemente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('oleosa')}
      >
        <Text style={styles.optionText}>Raramente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: theme.primary }]}
        onPress={() => responder('seca')}
      >
        <Text style={styles.optionText}>Às vezes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.finishButton, { backgroundColor: theme.primary }]}
        onPress={finalizarQuiz}
      >
        <Text style={styles.finishButtonText}>Ver Resultado</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <View
          style={[
            styles.resultBox,
            { borderColor: theme.primary },
          ]}
        >
          <Text style={[styles.resultText, { color: theme.text }]}>
            {resultado}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
  },

  option: {
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },

  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  finishButton: {
    padding: 16,
    borderRadius: 30,
    marginTop: 25,
    alignItems: 'center',
  },

  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  resultBox: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    marginTop: 25,
  },

  resultText: {
    fontSize: 16,
    lineHeight: 24,
  },
});