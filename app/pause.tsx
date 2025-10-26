import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function PauseScreen() {
  const [timeLeft, setTimeLeft] = useState(119); // 1:59:54 in seconds for demo
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            // Navigate to rhythm loss screen
            router.push('/rhythm-loss');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleContinueSession = () => {
    router.push('/timer');
  };

  const handleCancelSession = () => {
    router.push('/rhythm-loss');
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = ((120 - timeLeft) / 120) * 100; // Assuming 2 minutes total

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
                {/* Pause icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                  style={styles.pauseIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Title and subtitle */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Сессия на паузе</Text>
          <Text style={styles.subtitle}>
            Вернись к работе, пока не истекло время
          </Text>
        </View>

        {/* Timer card */}
        <View style={styles.timerCard}>
          <View style={styles.timerContent}>
            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
            <Text style={styles.timerLabel}>до потери Ритма</Text>
          </View>

          {/* Progress bar */}
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${progressPercentage}%` }
              ]}
            />
          </View>
        </View>

        {/* Warning message */}
        <View style={styles.warningCard}>
          <Text style={styles.warningText}>
            Если время истечет, твой Ритм будет потерян
          </Text>
        </View>

        {/* Action buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinueSession}>
            <Image
              source={{ uri: 'http://localhost:3845/assets/4f3e9354fda0c61d64630d0fc899b11a365d960b.svg' }}
              style={styles.buttonIcon}
              resizeMode="contain"
            />
            <Text style={styles.continueButtonText}>Продолжить сессию</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelSession}>
            <Image
              source={{ uri: 'http://localhost:3845/assets/73591d378e2e0270fb01c379d63c6398366b0d24.svg' }}
              style={styles.buttonIcon}
              resizeMode="contain"
            />
            <Text style={styles.cancelButtonText}>Отменить сессию</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 22,
    paddingTop: 28,
  },
  blurBackground: {
    position: 'absolute',
    left: 22,
    top: 274.16,
    width: 384,
    height: 384,
    borderRadius: 192,
    backgroundColor: 'rgba(67, 32, 4, 0.2)',
  },
  iconContainer: {
    position: 'absolute',
    left: 149,
    top: 163,
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
    backgroundColor: 'rgba(240, 177, 0, 0.2)',
  },
  iconBorder: {
    width: 130,
    height: 130,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(115, 62, 10, 0.3)',
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
    backgroundColor: 'rgba(240, 177, 0, 0.3)',
    borderRadius: 8,
  },
  pauseIcon: {
    width: 40,
    height: 40,
  },
  textContainer: {
    position: 'absolute',
    left: 102.09,
    top: 325,
    width: 223.797,
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
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
  timerCard: {
    position: 'absolute',
    left: 22,
    top: 447,
    width: 384,
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 16,
    padding: 33,
    gap: 24,
  },
  timerContent: {
    alignItems: 'center',
    gap: 8,
  },
  timerText: {
    fontSize: 48,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.8484,
  },
  timerLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#262626',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#F0B100', // Gradient would need a library
    borderRadius: 2,
  },
  warningCard: {
    position: 'absolute',
    left: 41.7,
    top: 649,
    width: 344.594,
    backgroundColor: 'rgba(67, 32, 4, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(115, 62, 10, 0.3)',
    borderRadius: 14,
    paddingHorizontal: 17,
    paddingVertical: 13,
  },
  warningText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F0B100',
    textAlign: 'center',
    letterSpacing: -0.1504,
  },
  buttonContainer: {
    position: 'absolute',
    left: 27.5,
    top: 800,
    width: 384,
    gap: 12,
  },
  continueButton: {
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
  cancelButton: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  buttonIcon: {
    width: 16,
    height: 16,
  },
});
