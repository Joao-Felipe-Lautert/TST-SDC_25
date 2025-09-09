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
import Slider from '@react-native-community/slider';

export default function ConfiguracoesScreen({ navigation }) {
  const [temaEscolhido, setTemaEscolhido] = useState('claro');
  const [tamanhoTexto, setTamanhoTexto] = useState(0.5);

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
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tema de exibição:</Text>
          
          <View style={styles.themeContainer}>
            <TouchableOpacity 
              style={[
                styles.themeOption,
                temaEscolhido === 'claro' && styles.themeOptionSelected
              ]}
              onPress={() => setTemaEscolhido('claro')}
            >
              <View style={styles.themePreview}>
                <View style={styles.themePreviewLight}>
                  <View style={styles.themePreviewHeader} />
                  <View style={styles.themePreviewContent} />
                </View>
              </View>
              <View style={styles.radioContainer}>
                <View style={[
                  styles.radioButton,
                  temaEscolhido === 'claro' && styles.radioButtonSelected
                ]} />
                <Text style={styles.themeLabel}>Claro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                styles.themeOption,
                temaEscolhido === 'escuro' && styles.themeOptionSelected
              ]}
              onPress={() => setTemaEscolhido('escuro')}
            >
              <View style={styles.themePreview}>
                <View style={styles.themePreviewDark}>
                  <View style={styles.themePreviewHeaderDark} />
                  <View style={styles.themePreviewContentDark} />
                </View>
              </View>
              <View style={styles.radioContainer}>
                <View style={[
                  styles.radioButton,
                  temaEscolhido === 'escuro' && styles.radioButtonSelected
                ]} />
                <Text style={styles.themeLabel}>Escuro</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tamanho do Texto:</Text>
          
          <View style={styles.textSizeContainer}>
            <Text style={styles.textSizeLabel}>Aa</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              value={tamanhoTexto}
              onValueChange={setTamanhoTexto}
              minimumTrackTintColor="#4CAF50"
              maximumTrackTintColor="#ddd"
              thumbStyle={styles.sliderThumb}
            />
            <Text style={[styles.textSizeLabel, { fontSize: 20 + (tamanhoTexto * 10) }]}>Aa</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="person-circle" size={24} color="#fff" />
            <Text style={styles.actionButtonText}>Alterar Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Ionicons name="log-out" size={24} color="#fff" />
            <Text style={styles.actionButtonText}>Fazer Log-out</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="information-circle" size={24} color="#fff" />
            <Text style={styles.actionButtonText}>Saiba Mais</Text>
          </TouchableOpacity>
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
    marginBottom: 15,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeOption: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  themeOptionSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
  },
  themePreview: {
    width: 80,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  themePreviewLight: {
    flex: 1,
    backgroundColor: '#fff',
  },
  themePreviewDark: {
    flex: 1,
    backgroundColor: '#333',
  },
  themePreviewHeader: {
    height: 20,
    backgroundColor: '#f0f0f0',
  },
  themePreviewHeaderDark: {
    height: 20,
    backgroundColor: '#555',
  },
  themePreviewContent: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 3,
  },
  themePreviewContentDark: {
    flex: 1,
    backgroundColor: '#444',
    margin: 5,
    borderRadius: 3,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 8,
  },
  radioButtonSelected: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  themeLabel: {
    color: '#fff',
    fontSize: 14,
  },
  textSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSizeLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 15,
  },
  sliderThumb: {
    backgroundColor: '#4CAF50',
    width: 20,
    height: 20,
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
    fontWeight: '500',
  },
});

