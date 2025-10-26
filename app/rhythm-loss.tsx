import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function RhythmLossScreen() {
  const handleUseFreeze = () => {
    // Handle using freeze to save rhythm
    router.push('/dashboard');
  };

  const handleStartOver = () => {
    // Handle starting over
    router.push('/onboarding/goal-setting');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Blur background */}
        <View style={styles.blurBackground} />

        {/* Icon container */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <View style={styles.iconBorder}>
              <View style={styles.iconContent}>
                {/* Broken rhythm icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                  style={styles.rhythmIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Title and subtitle */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ритм нарушен</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ты пропустил день. Твоя цепочка из </Text>
            <Text style={styles.subtitleHighlight}>0 дней</Text>
            <Text style={styles.subtitle}> прервана.</Text>
          </View>
        </View>

        {/* Days counter */}
        <View style={styles.daysCard}>
          <Text style={styles.daysValue}>0</Text>
          <Text style={styles.daysLabel}>пройденых дней</Text>
        </View>

        {/* Freeze info */}
        <View style={styles.freezeInfo}>
          <Image
            source={{ uri: 'http://localhost:3845/assets/8708d5c8a2dd6ead8971a56b6802f55330730de6.svg' }}
            style={styles.freezeIcon}
            resizeMode="contain"
          />
          <Text style={styles.freezeText}>
            У вас есть <Text style={styles.freezeHighlight}>3 фриза</Text>
          </Text>
        </View>

        {/* Action buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.freezeButton} onPress={handleUseFreeze}>
            <View style={styles.freezeButtonContent}>
              <View style={styles.freezeButtonIcon}>
                <Image
                  source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                  style={styles.freezeIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.freezeButtonText}>
                <Text style={styles.freezeButtonTitle}>Использовать фриз</Text>
                <Text style={styles.freezeButtonSubtitle}>
                  Сохрани свой ритм, списав один фриз. Коснись токеном, чтобы продолжить.
                </Text>
              </View>
              <View style={styles.freezeButtonBadge}>
                <Text style={styles.freezeButtonBadgeText}>3 доступно</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startOverButton} onPress={handleStartOver}>
            <View style={styles.startOverButtonContent}>
              <View style={styles.startOverButtonIcon}>
                <Image
                  source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                  style={styles.startOverIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.startOverButtonText}>
                <Text style={styles.startOverButtonTitle}>Начать заново</Text>
                <Text style={styles.startOverButtonSubtitle}>
                  Сбрось свой ритм и поставь новую цель. Это не конец — это новое начало.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Продолжить</Text>
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
    paddingHorizontal: 33,
    paddingTop: 18,
  },
  blurBackground: {
    position: 'absolute',
    left: 33,
    top: 215.25,
    width: 384,
    height: 384,
    borderRadius: 192,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconContainer: {
    position: 'absolute',
    left: 161,
    top: 207.5,
    width: 130,
    height: 130,
  },
  iconBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'rgba(70, 8, 9, 0.3)',
  },
  iconBorder: {
    width: 130,
    height: 130,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(130, 24, 26, 0.3)',
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
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(251, 44, 54, 0.3)',
    borderRadius: 8,
  },
  rhythmIcon: {
    width: 40,
    height: 40,
  },
  freezeIcon: {
    width: 24,
    height: 24,
  },
  startOverIcon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    position: 'absolute',
    left: 128.06,
    top: 369.5,
    width: 195.875,
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.3955,
  },
  subtitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9F9FA9',
    textAlign: 'center',
    letterSpacing: -0.3125,
  },
  subtitleHighlight: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -0.3125,
  },
  daysCard: {
    position: 'absolute',
    left: 34,
    top: 501.5,
    width: 384,
    height: 142,
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 16,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  daysValue: {
    fontSize: 48,
    fontWeight: '400',
    color: '#FB2C36',
    letterSpacing: 0.3516,
  },
  daysLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  freezeInfo: {
    position: 'absolute',
    left: 129.86,
    top: 675.5,
    width: 192.281,
    height: 46,
    backgroundColor: 'rgba(22, 36, 86, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(28, 57, 142, 0.3)',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    gap: 8,
  },
  freezeIcon: {
    width: 16,
    height: 16,
  },
  freezeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  freezeHighlight: {
    color: '#51A2FF',
  },
  buttonContainer: {
    position: 'absolute',
    left: 33,
    top: 345.5,
    width: 384,
    gap: 16,
  },
  freezeButton: {
    height: 186,
    backgroundColor: 'rgba(28, 57, 142, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(28, 57, 142, 0.3)',
    borderRadius: 16,
    padding: 25,
  },
  freezeButtonContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  freezeButtonIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(43, 127, 255, 0.2)',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freezeButtonText: {
    flex: 1,
    gap: 12,
  },
  freezeButtonTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.4492,
  },
  freezeButtonSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  freezeButtonBadge: {
    backgroundColor: 'rgba(43, 127, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  freezeButtonBadgeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#51A2FF',
    letterSpacing: -0.1504,
  },
  startOverButton: {
    height: 186,
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 16,
  },
  startOverButtonContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 25,
    gap: 12,
  },
  startOverButtonIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(39, 39, 42, 0.5)',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startOverButtonText: {
    flex: 1,
    gap: 12,
  },
  startOverButtonTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.4492,
  },
  startOverButtonSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  continueButton: {
    position: 'absolute',
    left: 27.5,
    top: 830,
    width: 384,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
});
