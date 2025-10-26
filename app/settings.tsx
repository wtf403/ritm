import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const POPULAR_APPS = [
  { name: 'Instagram', emoji: '📸', selected: false },
  { name: 'TikTok', emoji: '🎵', selected: false },
  { name: 'YouTube', emoji: '📺', selected: false },
  { name: 'Twitter', emoji: '🐦', selected: false },
  { name: 'Facebook', emoji: '👥', selected: false },
  { name: 'Telegram', emoji: '✈️', selected: false },
];

export default function SettingsScreen() {
  const [activeTab, setActiveTab] = useState<'apps' | 'sites'>('apps');
  const [selectedApps, setSelectedApps] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [customApp, setCustomApp] = useState('');

  const handleAppToggle = (appName: string) => {
    const newSelected = new Set(selectedApps);
    if (newSelected.has(appName)) {
      newSelected.delete(appName);
    } else {
      newSelected.add(appName);
    }
    setSelectedApps(newSelected);
  };

  const handleSave = () => {
    // Save settings and navigate back
    router.back();
  };

  const handleAddCustomApp = () => {
    if (customApp.trim()) {
      // Add custom app logic
      console.log('Adding custom app:', customApp);
      setCustomApp('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <View style={styles.backIcon}>
              <Image
                source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
                style={styles.backIconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.backText}>Назад</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Блокировка</Text>
        </View>

        <Text style={styles.subtitle}>Выбери что блокировать во время сессии</Text>

        {/* Tab selector */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'apps' && styles.tabActive]}
            onPress={() => setActiveTab('apps')}
          >
            <View style={styles.tabIcon}>
              <Image
                source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                style={styles.tabIconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={[styles.tabText, activeTab === 'apps' && styles.tabTextActive]}>
              Приложения
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'sites' && styles.tabActive]}
            onPress={() => setActiveTab('sites')}
          >
            <View style={styles.tabIcon}>
              <Image
                source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                style={styles.tabIconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={[styles.tabText, activeTab === 'sites' && styles.tabTextActive]}>
              Сайты
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Image
              source={{ uri: 'http://localhost:3845/assets/2d175f23764b45ea74b47b55742e8b2f16339f2d.svg' }}
              style={styles.searchIconImage}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Поиск..."
            placeholderTextColor="#A1A1A1"
          />
        </View>

        {/* Add custom app */}
        <View style={styles.addAppContainer}>
          <Text style={styles.addAppLabel}>Добавить приложение</Text>
          <View style={styles.addAppInputContainer}>
            <TextInput
              style={styles.addAppInput}
              value={customApp}
              onChangeText={setCustomApp}
              placeholder="Название приложения"
              placeholderTextColor="#A1A1A1"
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddCustomApp}>
              <View style={styles.addButtonIcon}>
                <Image
                  source={{ uri: 'http://localhost:3845/assets/48c5e348c5ba28dfe52ea4ba02175fc29c018725.svg' }}
                  style={styles.addButtonIconImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular apps */}
        <View style={styles.popularContainer}>
          <Text style={styles.popularLabel}>Популярные</Text>
          <View style={styles.appsList}>
            {POPULAR_APPS.map((app) => (
              <TouchableOpacity
                key={app.name}
                style={styles.appItem}
                onPress={() => handleAppToggle(app.name)}
              >
                <View style={styles.appInfo}>
                  <Text style={styles.appEmoji}>{app.emoji}</Text>
                  <Text style={styles.appName}>{app.name}</Text>
                </View>
                <View style={[
                  styles.checkbox,
                  selectedApps.has(app.name) && styles.checkboxSelected
                ]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.selectedInfo}>
            <Text style={styles.selectedLabel}>Выбрано</Text>
            <Text style={styles.selectedCount}>{selectedApps.size}</Text>
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Сохранить</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingTop: 18,
    paddingBottom: 24,
    gap: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.0703,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.0703,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
    paddingHorizontal: 34,
    marginBottom: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(24, 24, 27, 0.5)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 14,
    marginHorizontal: 34,
    marginBottom: 24,
    padding: 5,
  },
  tab: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 10,
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
  },
  tabIcon: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
  },
  tabTextActive: {
    color: '#000000',
  },
  searchContainer: {
    position: 'relative',
    marginHorizontal: 34,
    marginBottom: 24,
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 10,
    width: 16,
    height: 16,
    zIndex: 1,
  },
  searchInput: {
    height: 36,
    backgroundColor: 'rgba(38, 38, 38, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 12,
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: -0.1504,
  },
  addAppContainer: {
    marginHorizontal: 34,
    marginBottom: 24,
    gap: 12,
  },
  addAppLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  addAppInputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  addAppInput: {
    flex: 1,
    height: 36,
    backgroundColor: 'rgba(38, 38, 38, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: -0.1504,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonIcon: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularContainer: {
    marginHorizontal: 34,
    marginBottom: 24,
    gap: 12,
  },
  popularLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717B',
    letterSpacing: -0.1504,
  },
  appsList: {
    gap: 8,
  },
  appItem: {
    height: 66,
    backgroundColor: 'rgba(24, 24, 27, 0.5)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
  },
  appInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  appEmoji: {
    fontSize: 24,
  },
  appName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: -0.3125,
  },
  checkbox: {
    width: 16,
    height: 16,
    backgroundColor: 'rgba(38, 38, 38, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 4,
  },
  checkboxSelected: {
    backgroundColor: '#FFFFFF',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#262626',
    paddingHorizontal: 34,
    paddingVertical: 17,
    gap: 16,
  },
  selectedInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9F9FA9',
    letterSpacing: -0.1504,
  },
  selectedCount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: -0.3125,
  },
  saveButton: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
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
  backIconImage: {
    width: 16,
    height: 16,
  },
  tabIconImage: {
    width: 16,
    height: 16,
  },
  searchIconImage: {
    width: 16,
    height: 16,
  },
  addButtonIconImage: {
    width: 16,
    height: 16,
  },
});
