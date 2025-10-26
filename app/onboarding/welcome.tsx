import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const handleHasToken = () => {
    router.push('/onboarding/focus-skill');
  };

  const handleBuyToken = () => {
    // Handle buy token action
    console.log('Buy token');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Image
              source={{ uri: 'http://localhost:3845/assets/46ce85cf6a384f9e26ccad9cca7d69786202ab9d.png' }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Ритм</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Найди свой ритм. Живи без отвлечений.</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleHasToken}>
            <Text style={styles.primaryButtonText}>У меня есть NFC токен</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleBuyToken}>
            <Text style={styles.secondaryButtonText}>Приобрести в магазине</Text>
          </TouchableOpacity>
        </View>

        {/* Progress indicators */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  logoContainer: {
    width: 80,
    height: 80,
    marginBottom: 48,
  },
  logoBackground: {
    width: 80,
    height: 80,
    borderRadius: 19.407,
    overflow: 'hidden',
  },
  logo: {
    width: '130.86%',
    height: '124.2%',
    position: 'absolute',
    left: '-18.79%',
    top: '-8.96%',
  },
  title: {
    fontSize: 48,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.8484,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#71717B',
    textAlign: 'center',
    marginBottom: 88,
    letterSpacing: -0.3125,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 224,
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
  secondaryButton: {
    backgroundColor: 'rgba(38, 38, 38, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: -0.1504,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  progressDotActive: {
    backgroundColor: '#FFFFFF',
    width: 32,
  },
});
