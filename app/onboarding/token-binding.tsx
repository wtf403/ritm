import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function TokenBindingScreen() {
  const handleReadyToScan = () => {
    router.push('/onboarding/goal-setting');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Blur background */}
        <View style={styles.blurBackground} />

        {/* Title and subtitle */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Привяжи свой токен</Text>
          <Text style={styles.subtitle}>
            Поднеси NFC-токен к задней части телефона
          </Text>
        </View>

        {/* Icon container */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <View style={styles.iconBorder}>
              <View style={styles.iconContent}>
                {/* NFC binding icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/7111cff9a4dc23e8dce9e3f3e971ce2c38cea9d6.svg' }}
                  style={styles.bindingIcon1}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/98e159aa321d06d140ae659b1ad290e1bfb5adaf.svg' }}
                  style={styles.bindingIcon2}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/519e7199353900fb0beac80ae28fb49b60ed3930.svg' }}
                  style={styles.bindingIcon3}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/38a564e6304b4748601da3059d00f62d03e1ad7d.svg' }}
                  style={styles.bindingIcon4}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Ready button */}
        <TouchableOpacity style={styles.readyButton} onPress={handleReadyToScan}>
          <Text style={styles.readyButtonText}>Готов к сканированию</Text>
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
    paddingHorizontal: 42,
    paddingTop: 32,
  },
  blurBackground: {
    position: 'absolute',
    left: 27.5,
    top: 245.66,
    width: 384,
    height: 384,
    borderRadius: 192,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  textContainer: {
    position: 'absolute',
    left: 45.77,
    top: 242.5,
    width: 347.469,
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.3955,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9F9FA9',
    textAlign: 'center',
    letterSpacing: -0.3125,
  },
  iconContainer: {
    position: 'absolute',
    left: 130.5,
    top: 364.5,
    width: 178,
    height: 178,
  },
  iconBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 178,
    height: 178,
    borderRadius: 89,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  iconBorder: {
    width: 178,
    height: 178,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContent: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bindingIcon1: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 10,
    left: 10,
  },
  bindingIcon2: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 20,
    left: 20,
  },
  bindingIcon3: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 25,
    left: 25,
  },
  bindingIcon4: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 30,
    left: 30,
  },
  readyButton: {
    position: 'absolute',
    left: 42,
    top: 836,
    width: 384,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  readyButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
});
