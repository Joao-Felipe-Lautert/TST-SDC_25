import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [narracao, setNarracao] = useState(false);
  const [libras, setLibras] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>A</Text>
        </View>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => navigation.navigate('Configuracoes')}
        >
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>SEJA BEM VINDO</Text>
        
        <TouchableOpacity style={styles.userButton}>
          <Text style={styles.userButtonText}>[Nome do Usuário]</Text>
        </TouchableOpacity>

        <Text style={styles.menuTitle}>Menu de Acessibilidades</Text>

        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="volume-high" size={24} color="#2E5A3E" />
            <Text style={styles.menuItemText}>Habilitar Narração</Text>
          </View>
          <Switch
            value={narracao}
            onValueChange={setNarracao}
            trackColor={{ false: '#767577', true: '#4CAF50' }}
            thumbColor={narracao ? '#fff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="hand-left" size={24} color="#2E5A3E" />
            <Text style={styles.menuItemText}>Linguagem de Sinais</Text>
          </View>
          <Switch
            value={libras}
            onValueChange={setLibras}
            trackColor={{ false: '#767577', true: '#4CAF50' }}
            thumbColor={libras ? '#fff' : '#f4f3f4'}
          />
        </View>

        <TouchableOpacity 
          style={styles.preferencesButton}
          onPress={() => navigation.navigate('Preferencias')}
        >
          <Ionicons name="settings" size={24} color="#2E5A3E" />
          <Text style={styles.preferencesText}>Preferências de acessibilidade</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#2E5A3E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  userButton: {
    backgroundColor: '#2E5A3E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 30,
    alignItems: 'center',
  },
  userButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginBottom: 15,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  preferencesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    marginTop: 20,
  },
  preferencesText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
    fontWeight: '500',
  },
});

