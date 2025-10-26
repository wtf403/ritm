import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function FocusSkillScreen() {
  const handleNext = () => {
    router.push('/onboarding/nfc-token');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Progress indicators */}
        <View style={styles.progressContainer}>
          <View style={styles.progressDot} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
        </View>

        {/* Blur background */}
        <View style={styles.blurBackground} />

        {/* Icon container */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <View style={styles.iconBorder}>
              <View style={styles.iconContent}>
                {/* Focus skill icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                  style={styles.focusIcon1}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/9efa9de66a7622e7ef3d9f8994a7241e8d757f6b.svg' }}
                  style={styles.focusIcon2}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/349322617fc321eae9b896179f5e9d16a3d1c1ba.svg' }}
                  style={styles.focusIcon3}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Фокус — это навык</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Тренируй внимание каждый день и возвращай контроль над своим временем
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
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 5,
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
  focusIcon1: {
    position: 'absolute',
    width: 48,
    height: 48,
    top: 8,
    left: 8,
  },
  focusIcon2: {
    position: 'absolute',
    width: 32,
    height: 32,
    top: 16,
    left: 16,
  },
  focusIcon3: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 20,
    left: 20,
  },
  title: {
    position: 'absolute',
    left: 91.41,
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
