import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function PreferenciasScreen({ navigation }) {
  const [vozSelecionada, setVozSelecionada] = useState('voz1');
  const [tamanhoMaos, setTamanhoMaos] = useState('pequeno');
  const [transparencia, setTransparencia] = useState(0.5);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Preferências de acessibilidade</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Opções de Narração</Text>
          <Text style={styles.sectionSubtitle}>Selecione a voz da sua preferência</Text>
          
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={vozSelecionada}
              onValueChange={(itemValue) => setVozSelecionada(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Voz 1" value="voz1" />
              <Picker.Item label="Voz 2" value="voz2" />
              <Picker.Item label="Voz 3" value="voz3" />
            </Picker>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Opções de Libras</Text>
          
          <Text style={styles.sectionSubtitle}>Tamanho das mãos</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={tamanhoMaos}
              onValueChange={(itemValue) => setTamanhoMaos(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Pequeno" value="pequeno" />
              <Picker.Item label="Médio" value="medio" />
              <Picker.Item label="Grande" value="grande" />
            </Picker>
          </View>

          <Text style={styles.sectionSubtitle}>Selecione a transparência das mãos:</Text>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              value={transparencia}
              onValueChange={setTransparencia}
              minimumTrackTintColor="#4CAF50"
              maximumTrackTintColor="#ddd"
              thumbStyle={styles.sliderThumb}
            />
          </View>

          <View style={styles.handsPreview}>
            <Ionicons name="hand-left" size={60} color="#4CAF50" style={{opacity: transparencia}} />
            <Text style={styles.previewText}>Visualização</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1E3A8A',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    backgroundColor: '#2563EB',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    color: '#333',
  },
  sliderContainer: {
    marginVertical: 15,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderThumb: {
    backgroundColor: '#4CAF50',
    width: 20,
    height: 20,
  },
  handsPreview: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  previewText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 14,
  },
});

