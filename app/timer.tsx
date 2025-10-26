import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function TimerScreen() {
  const [timeLeft, setTimeLeft] = useState(20); // 20 seconds for demo
  const [isRunning, setIsRunning] = useState(false);
  const [focusPercentage, setFocusPercentage] = useState(100);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            // Navigate to completion screen or show completion modal
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handlePause = () => {
    setIsRunning(false);
    router.push('/pause');
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Focus info */}
        <View style={styles.focusInfo}>
          <Text style={styles.focusLabel}>Фокус на</Text>
          <Text style={styles.focusValue}>Проект</Text>
        </View>

        {/* Blur background */}
        <View style={styles.blurBackground} />

        {/* Timer circle */}
        <View style={styles.timerContainer}>
          <View style={styles.timerCircle}>
            <Image
              source={{ uri: 'http://localhost:3845/assets/91f208b22913ac50f03a4f0e7645dca79b40f6a4.svg' }}
              style={styles.timerIcon}
              resizeMode="contain"
            />
            <View style={styles.timerContent}>
              <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
              <Text style={styles.timerLabel}>в фокусе</Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>минут</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statValue}>{focusPercentage}%</Text>
            <Text style={styles.statLabel}>фокус</Text>
          </View>
        </View>

        {/* Pause button */}
        <TouchableOpacity style={styles.pauseButton} onPress={handlePause}>
          <Image
            source={{ uri: 'http://localhost:3845/assets/8708d5c8a2dd6ead8971a56b6802f55330730de6.svg' }}
            style={styles.pauseIcon}
            resizeMode="contain"
          />
          <Text style={styles.pauseText}>Пауза</Text>
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
    paddingTop: 56,
  },
  focusInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  focusLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
    marginBottom: 4,
  },
  focusValue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.3125,
  },
  blurBackground: {
    position: 'absolute',
    left: 68.21,
    top: 297.21,
    width: 302.578,
    height: 302.578,
    borderRadius: 151.289,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  timerContainer: {
    position: 'absolute',
    left: 75.5,
    top: 258.5,
    width: 288,
    height: 288,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerCircle: {
    width: 288,
    height: 288,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerIcon: {
    position: 'absolute',
    width: 288,
    height: 288,
  },
  timerContent: {
    alignItems: 'center',
    gap: 8,
  },
  timerText: {
    fontSize: 60,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -1.2363,
  },
  timerLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  statsContainer: {
    position: 'absolute',
    left: 136.3,
    top: 578.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 0.0703,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  statDivider: {
    width: 1,
    height: 56,
    backgroundColor: '#262626',
  },
  pauseButton: {
    position: 'absolute',
    left: 28,
    bottom: 70,
    width: 384,
    height: 56,
    backgroundColor: 'rgba(38, 38, 38, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  pauseIcon: {
    width: 16,
    height: 16,
  },
  pauseText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: -0.1504,
  },
});
