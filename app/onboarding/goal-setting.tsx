import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const GOAL_CATEGORIES = ['Учёба', 'Проект', 'Творчество', 'Развитие'];

export default function GoalSettingScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [goalText, setGoalText] = useState('Написать книгу');

  const handleContinue = () => {
    if (selectedCategory && goalText.trim()) {
      router.push('/onboarding/ready');
    }
  };

  const isContinueEnabled = selectedCategory && goalText.trim();

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
                {/* Goal icon */}
                <Image
                  source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                  style={styles.goalIcon1}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/9efa9de66a7622e7ef3d9f8994a7241e8d757f6b.svg' }}
                  style={styles.goalIcon2}
                  resizeMode="contain"
                />
                <Image
                  source={{ uri: 'http://localhost:3845/assets/349322617fc321eae9b896179f5e9d16a3d1c1ba.svg' }}
                  style={styles.goalIcon3}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Title and subtitle */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Твоя первая цель</Text>
          <Text style={styles.subtitle}>
            Что ты хочешь достичь с помощью фокуса?
          </Text>
        </View>

        {/* Input and categories */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={goalText}
            onChangeText={setGoalText}
            placeholder="Написать книгу"
            placeholderTextColor="#52525C"
          />

          <View style={styles.categoriesContainer}>
            {GOAL_CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonSelected
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.categoryButtonTextSelected
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Continue button */}
        <TouchableOpacity
          style={[styles.continueButton, !isContinueEnabled && styles.continueButtonDisabled]}
          onPress={handleContinue}
          disabled={!isContinueEnabled}
        >
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
    paddingHorizontal: 28,
    paddingTop: 32,
  },
  blurBackground: {
    position: 'absolute',
    left: 28,
    top: 154,
    width: 384,
    height: 384,
    borderRadius: 192,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconContainer: {
    position: 'absolute',
    left: 154.5,
    top: 216.5,
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
  goalIcon1: {
    position: 'absolute',
    width: 48,
    height: 48,
    top: 8,
    left: 8,
  },
  goalIcon2: {
    position: 'absolute',
    width: 32,
    height: 32,
    top: 16,
    left: 16,
  },
  goalIcon3: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 20,
    left: 20,
  },
  textContainer: {
    position: 'absolute',
    left: 101.63,
    top: 394.5,
    width: 235.75,
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
  inputContainer: {
    position: 'absolute',
    left: 27.5,
    top: 516.5,
    width: 384,
    gap: 16,
  },
  textInput: {
    height: 56,
    backgroundColor: 'rgba(38, 38, 38, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: -0.1504,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    height: 38,
    backgroundColor: 'rgba(24, 24, 27, 0.5)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 20,
    paddingHorizontal: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
  },
  categoryButtonTextSelected: {
    color: '#FFFFFF',
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
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
});
