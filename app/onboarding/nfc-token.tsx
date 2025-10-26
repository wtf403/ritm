import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function NFCTokenScreen() {
  const handleNext = () => {
    router.push('/onboarding/chain');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Progress indicators */}
        <View style={styles.progressContainer}>
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
        </View>

        {/* Blur background */}
        <View style={styles.blurBackground} />

        {/* Icon container */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <View style={styles.iconBorder}>
              <View style={styles.iconContent}>
                {/* NFC token icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/1a9c0645181825cd1ec0f28ce38a768053389751.svg' }}
                  style={styles.nfcIcon1}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/6ad53f66d1735a36b808ce1adb86c4ee8bff5eef.svg' }}
                  style={styles.nfcIcon2}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>NFC-токен</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Физический ритуал начала работы. Коснись токеном телефона, чтобы начать сессию
        </Text>

        {/* Next button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Далее</Text>
          <Image
            source={{ uri: 'http://localhost:3845/assets/9c90fa4219a84b827fb774ac986beaf50662afea.svg' }}
            style={styles.nextIcon}
            resizeMode="contain"
          />
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
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  progressDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  progressDotActive: {
    backgroundColor: '#FFFFFF',
    width: 32,
  },
  blurBackground: {
    position: 'absolute',
    left: 60.5,
    top: 215.66,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconContainer: {
    position: 'absolute',
    left: 155.5,
    top: 271.5,
    width: 130,
    height: 130,
  },
  iconBackground: {
    position: 'absolute',
    left: -32.5,
    top: -32.5,
    width: 195,
    height: 195,
    borderRadius: 97.5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  iconBorder: {
    width: 130,
    height: 130,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContent: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  nfcIcon1: {
    position: 'absolute',
    width: 48,
    height: 48,
    top: 8,
    left: 8,
  },
  nfcIcon2: {
    position: 'absolute',
    width: 32,
    height: 32,
    top: 16,
    left: 16,
  },
  title: {
    position: 'absolute',
    left: 146.2,
    top: 449.5,
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.3955,
  },
  subtitle: {
    position: 'absolute',
    left: 28.5,
    top: 501.5,
    width: 384,
    fontSize: 16,
    fontWeight: '400',
    color: '#9F9FA9',
    textAlign: 'center',
    letterSpacing: -0.3125,
  },
  nextButton: {
    position: 'absolute',
    left: 28.5,
    top: 850,
    width: 384,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  nextButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
  nextIcon: {
    width: 16,
    height: 16,
  },
});
