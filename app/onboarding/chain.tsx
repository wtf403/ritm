import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function ChainScreen() {
  const handleContinue = () => {
    router.push('/onboarding/token-binding');
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
                {/* Chain icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                  style={styles.chainIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Не прерывай цепочку</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Каждый день ты укрепляешь свой Ритм. Один пропуск — и всё начинается заново
        </Text>

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Продолжить</Text>
          <Image
            source={{ uri: 'http://localhost:3845/assets/9c90fa4219a84b827fb774ac986beaf50662afea.svg' }}
            style={styles.continueIcon}
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
    left: 59.5,
    top: 255.66,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconContainer: {
    position: 'absolute',
    left: 154.5,
    top: 311.5,
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
  },
  chainIcon: {
    width: 48,
    height: 48,
  },
  title: {
    position: 'absolute',
    left: 71.16,
    top: 489.5,
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.3955,
  },
  subtitle: {
    position: 'absolute',
    left: 27.5,
    top: 541.5,
    width: 384,
    fontSize: 16,
    fontWeight: '400',
    color: '#9F9FA9',
    textAlign: 'center',
    letterSpacing: -0.3125,
  },
  continueButton: {
    position: 'absolute',
    left: 27.5,
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
  continueButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
  continueIcon: {
    width: 16,
    height: 16,
  },
});
