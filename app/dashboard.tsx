import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function DashboardScreen() {
  const handleStartSession = () => {
    router.push('/timer');
  };

  const handleSettings = () => {
    router.push('/settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Ритм</Text>
          </View>

          <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
            <View style={styles.settingsContent}>
              <View style={styles.settingsText}>
                <Text style={styles.settingsTitle}>Блокировки</Text>
                <Text style={styles.settingsSubtitle}>Не настроено</Text>
              </View>
              <View style={styles.settingsIcon}>
                {/* Settings icon placeholder */}
                <View style={styles.iconPlaceholder} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View style={styles.mainContent}>
          {/* NFC Token and Freezes card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.nfcTokenInfo}>
                <View style={styles.nfcTokenIcon}>
                  <View style={styles.iconPlaceholder} />
                </View>
                <Text style={styles.nfcTokenText}>Активен</Text>
              </View>
              <View style={styles.premiumBadge}>
                <Text style={styles.premiumText}>Premium</Text>
              </View>
            </View>

            <View style={styles.freezesCard}>
              <View style={styles.freezesInfo}>
                <View style={styles.freezesIcon}>
                  <Image
                    source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                    style={styles.freezesIconImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.freezesText}>
                  <Text style={styles.freezesLabel}>Фризы</Text>
                  <Text style={styles.freezesValue}>3</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.replenishButton}>
                <Text style={styles.replenishText}>Пополнить</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Stats cards */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <View style={styles.statHeader}>
                <View style={styles.statIcon}>
                  <Image
                    source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                    style={styles.statIconImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.statLabel}>Ритм</Text>
              </View>
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statUnit}>дней</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statHeader}>
                <View style={styles.statIcon}>
                  <Image
                    source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                    style={styles.statIconImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.statLabel}>Сегодня</Text>
              </View>
              <Text style={styles.statValue}>125</Text>
              <Text style={styles.statUnit}>минут</Text>
            </View>
          </View>

          {/* Weekly activity */}
          <View style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityTitle}>4 недели активности</Text>
              <TouchableOpacity style={styles.hideButton}>
                <Image
                  source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                  style={styles.hideIconImage}
                  resizeMode="contain"
                />
                <Text style={styles.hideText}>Скрыть</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.activityScale}>
              <Text style={styles.scaleText}>Меньше</Text>
              <View style={styles.scaleDots}>
                <View style={[styles.scaleDot, styles.scaleDotLow]} />
                <View style={[styles.scaleDot, styles.scaleDotMedium]} />
                <View style={[styles.scaleDot, styles.scaleDotHigh]} />
                <View style={[styles.scaleDot, styles.scaleDotMax]} />
              </View>
              <Text style={styles.scaleText}>Больше</Text>
            </View>

            {/* Activity grid - simplified for now */}
            <View style={styles.activityGrid}>
              {/* This would be a complex grid of activity squares */}
              <Text style={styles.activityPlaceholder}>Activity Grid</Text>
            </View>

            <View style={styles.activityFooter}>
              <Text style={styles.activeDaysText}>Активных дней</Text>
              <Text style={styles.activeDaysValue}>28 / 28</Text>
            </View>
          </View>
        </View>

        {/* Start session button */}
        <TouchableOpacity style={styles.startSessionButton} onPress={handleStartSession}>
          <View style={styles.iconPlaceholder} />
          <Text style={styles.startSessionText}>Начать сессию</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 0.0703,
  },
  settingsButton: {
    height: 40,
  },
  settingsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingsText: {
    gap: 2,
  },
  settingsTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.1504,
  },
  settingsSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#71717B',
  },
  settingsIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#262626',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    paddingHorizontal: 28,
    gap: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    padding: 25,
    gap: 32,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nfcTokenInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nfcTokenIcon: {
    width: 28,
    height: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nfcTokenText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
  },
  premiumBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  premiumText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#9F9FA9',
  },
  freezesCard: {
    backgroundColor: 'rgba(28, 57, 142, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(28, 57, 142, 0.3)',
    borderRadius: 16,
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  freezesInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  freezesIcon: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(43, 127, 255, 0.2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freezesText: {
    gap: 4,
  },
  freezesLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
  },
  freezesValue: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.4492,
  },
  replenishButton: {
    backgroundColor: 'rgba(43, 127, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(43, 127, 255, 0.3)',
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  replenishText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#51A2FF',
    letterSpacing: -0.1504,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 17,
    gap: 8,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statIcon: {
    width: 28,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
  },
  statValue: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 0.3955,
  },
  statUnit: {
    fontSize: 12,
    fontWeight: '400',
    color: '#71717B',
  },
  activityCard: {
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 16,
    padding: 21,
    gap: 16,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
  },
  hideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  hideText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#71717B',
  },
  activityScale: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  scaleText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#52525C',
  },
  scaleDots: {
    flexDirection: 'row',
    gap: 6,
  },
  scaleDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  scaleDotLow: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scaleDotMedium: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  scaleDotHigh: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  scaleDotMax: {
    backgroundColor: '#FFFFFF',
  },
  activityGrid: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityPlaceholder: {
    fontSize: 16,
    color: '#71717B',
  },
  activityFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#262626',
  },
  activeDaysText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#71717B',
  },
  activeDaysValue: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  startSessionButton: {
    margin: 28,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  startSessionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.1504,
  },
  iconPlaceholder: {
    width: 16,
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
  },
  freezesIconImage: {
    width: 16,
    height: 16,
  },
  statIconImage: {
    width: 16,
    height: 16,
  },
  hideIconImage: {
    width: 16,
    height: 16,
  },
});
