import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function ReadyScreen() {
  const handleStartSession = () => {
    router.push('/dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Blur background */}
        <View style={styles.blurBackground} />

        {/* Goal info */}
        <View style={styles.goalInfo}>
          <Text style={styles.goalLabel}>Твоя цель</Text>
          <Text style={styles.goalValue}>Проект</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Готово!</Text>

        {/* Icon container */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <View style={styles.iconBorder}>
              <View style={styles.iconContent}>
                {/* Ready icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                  style={styles.readyIcon1}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/9efa9de66a7622e7ef3d9f8994a7241e8d757f6b.svg' }}
                  style={styles.readyIcon2}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/349322617fc321eae9b896179f5e9d16a3d1c1ba.svg' }}
                  style={styles.readyIcon3}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Session started text */}
        <Text style={styles.sessionText}>Сессия началась</Text>

        {/* Start session button */}
        <TouchableOpacity style={styles.startButton} onPress={handleStartSession}>
          <Text style={styles.startButtonText}>Начать сессию</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 32,
  },
  blurBackground: {
    position: 'absolute',
    left: -66,
    top: 192,
    width: 571.484,
    height: 571.484,
    borderRadius: 285.742,
    backgroundColor: 'rgba(255, 255, 255, 0.29)',
  },
  goalInfo: {
    position: 'absolute',
    left: 158.98,
    top: 241,
    width: 66.031,
    gap: 4,
  },
  goalLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    textAlign: 'center',
    letterSpacing: -0.1504,
  },
  goalValue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -0.3125,
  },
  title: {
    position: 'absolute',
    left: 142.17,
    top: 76,
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.3955,
  },
  iconContainer: {
    position: 'absolute',
    left: 79,
    top: 160,
    width: 226,
    height: 226,
  },
  iconBackground: {
    position: 'absolute',
    left: -105.55,
    top: -105.55,
    width: 437.09,
    height: 437.09,
    borderRadius: 218.545,
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 15,
  },
  iconBorder: {
    position: 'absolute',
    left: -28.25,
    top: -28.25,
    width: 282.5,
    height: 282.5,
    borderRadius: 141.25,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 75.25,
    justifyContent: 'center',
    alignItems: 'center',
    // Note: Gradient background would need to be implemented with a library
  },
  iconContent: {
    width: 132,
    height: 132,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  readyIcon1: {
    position: 'absolute',
    width: 80,
    height: 80,
    top: 26,
    left: 26,
  },
  readyIcon2: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 36,
    left: 36,
  },
  readyIcon3: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 46,
    left: 46,
  },
  sessionText: {
    position: 'absolute',
    left: 127.31,
    top: 450,
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.3125,
  },
  startButton: {
    position: 'absolute',
    left: 28.5,
    top: 850,
    width: 384,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
});
