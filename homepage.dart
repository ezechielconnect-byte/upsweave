import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:async';
import 'dart:math';
import 'dart:ui';

import 'app_settings.dart';
import 'TradingScreen.dart';
import 'portfolio_screen.dart';
import 'settings_screen.dart';
import 'premium_screen.dart';
import 'haptic_service.dart';
import 'trading_provider.dart';
import 'trades_provider.dart';
import 'services/firebase_service.dart';
import 'widgets/asset_logo_widget.dart';
import 'widgets/localized_text.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with TickerProviderStateMixin {
  int _selectedIndex = 0;

  // État du menu flottant
  bool _isMenuOpen = false;
  late AnimationController _menuAnimationController;
  late Animation<double> _menuAnimation;

  // État de la sous-barre de navigation
  bool _isSubNavVisible = false;
  late AnimationController _subNavAnimationController;
  late Animation<double> _subNavAnimation;

  // Configuration de la navigation liquide
  final double navHeight = 64.0;
  final double pillWidth = 120.0;
  final double circleWidth = 64.0;
  final double bulgeSize = 84.0;
  final double whiteCircleSize = 56.0;
  final double totalWidth = 360.0;

  double _getCenterPosition(int index) {
    // Les centres : [30, 90, 180, 270, 330] sur une largeur totale de 360
    final centers = [30.0, 90.0, 180.0, 270.0, 330.0];
    return centers[index];
  }

  int get _activeVisualIndex => _isMenuOpen ? 2 : (_selectedIndex > 4 ? 4 : _selectedIndex);

  final screens = [
    const HomepageScreen(),
    const TradingScreen(), // Pas de paramètre pour la navigation normale
    const PremiumScreen(),
    const PortfolioScreen(),
    const SettingsScreen(),
  ];

  @override
  void initState() {
    super.initState();
    _menuAnimationController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );
    _menuAnimation = CurvedAnimation(
      parent: _menuAnimationController,
      curve: Curves.easeInOut,
    );

    _subNavAnimationController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );
    _subNavAnimation = CurvedAnimation(
      parent: _subNavAnimationController,
      curve: Curves.easeInOut,
    );

    // Afficher le message de bienvenue si c'est la première fois
    _checkAndShowWelcomeMessage();
  }

  /// Vérifier et afficher le message d'accueil pour les nouveaux utilisateurs
  Future<void> _checkAndShowWelcomeMessage() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final hasSeenWelcome = prefs.getBool('has_seen_welcome_message') ?? false;

      if (!hasSeenWelcome) {
        // Attendre que le widget soit construit
        await Future.delayed(const Duration(milliseconds: 500));
        
        if (mounted) {
          _showWelcomeDialog();
          // Marquer comme vu
          await prefs.setBool('has_seen_welcome_message', true);
        }
      }
    } catch (e) {
      print('❌ Erreur affichage message de bienvenue: $e');
    }
  }

  /// Afficher le dialogue de bienvenue
  void _showWelcomeDialog() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => Dialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        backgroundColor: Colors.transparent,
        child: Container(
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xFF1A1A2E),
                Color(0xFF16213E),
                Color(0xFF0F0F23),
              ],
            ),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(
              color: const Color(0xFF5CB3FF).withOpacity(0.3),
              width: 1,
            ),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF5CB3FF).withOpacity(0.2),
                blurRadius: 20,
                spreadRadius: 5,
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Icône de bienvenue
                Container(
                  width: 80,
                  height: 80,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [
                        Color(0xFF5CB3FF),
                        Color(0xFF4A9EFF),
                      ],
                    ),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: const Color(0xFF5CB3FF).withOpacity(0.5),
                        blurRadius: 15,
                        spreadRadius: 3,
                      ),
                    ],
                  ),
                  child: const Icon(
                    Icons.info_outline_rounded,
                    color: Colors.white,
                    size: 45,
                  ),
                ),
                const SizedBox(height: 20),

                // Titre
                const Text(
                  'Bienvenue sur RWams Trader !',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 16),

                // Message principal
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: const Color(0xFF5CB3FF).withOpacity(0.1),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(
                      color: const Color(0xFF5CB3FF).withOpacity(0.3),
                      width: 1,
                    ),
                  ),
                  child: Column(
                    children: [
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Icon(
                            Icons.school,
                            color: Color(0xFF4CAF50),
                            size: 20,
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              'Simulateur de Trading Éducatif',
                              style: TextStyle(
                                color: Colors.white.withOpacity(0.9),
                                fontSize: 16,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Icon(
                            Icons.security,
                            color: Color(0xFF4CAF50),
                            size: 20,
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              'Aucun risque financier - Argent virtuel uniquement',
                              style: TextStyle(
                                color: Colors.white.withOpacity(0.9),
                                fontSize: 15,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Icon(
                            Icons.trending_up,
                            color: Color(0xFF5CB3FF),
                            size: 20,
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              'Apprenez le trading avec des prix de marché réels',
                              style: TextStyle(
                                color: Colors.white.withOpacity(0.85),
                                fontSize: 15,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Icon(
                            Icons.lightbulb_outline,
                            color: Color(0xFFFFA500),
                            size: 20,
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              'Pratiquez sans risque et développez vos compétences',
                              style: TextStyle(
                                color: Colors.white.withOpacity(0.85),
                                fontSize: 15,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 24),

                // Bouton de confirmation
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF5CB3FF),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                      elevation: 5,
                      shadowColor: const Color(0xFF5CB3FF).withOpacity(0.5),
                    ),
                    child: const Text(
                      'J\'ai compris',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  static String _formatPriceForDisplay(String symbol, double price) {
    final type = _getAssetTypeFromSymbol(symbol);
    if (type == 'forex') {
      if (symbol.contains('JPY')) {
        return "${price.toStringAsFixed(2)}";
      }
      return "${price.toStringAsFixed(5)}";
    }
    if (type == 'stock') {
      return price.toStringAsFixed(2);
    }
    if (price >= 1) {
      return price.toStringAsFixed(2);
    }
    return price.toStringAsFixed(4);
  }

  // Détecter le type d'actif à partir du symbole
  static String _getAssetTypeFromSymbol(String symbol) {
    // Forex si contient une barre
    if (symbol.contains('/')) return 'forex';

    // Quelques tickers d'actions courantes
    const stockTickers = {
      'AAPL','GOOGL','MSFT','TSLA','AMZN','META','NVDA','NFLX','AMD','INTC','CRM','ADBE','PYPL','UBER','SPOT','SQ','ROKU','ZM','DOCU','SNOW','COIN','PINS','PTON','CRWD','OKTA','PLTR','RBLX','U','DDOG','NET','ASAN','TWLO','Z','ABNB'
    };

    if (stockTickers.contains(symbol)) return 'stock';

    // Par défaut: crypto
    return 'crypto';
  }

  @override
  void dispose() {
    _menuAnimationController.dispose();
    _subNavAnimationController.dispose();
    super.dispose();
  }

  /// Toggle le menu flottant
  void _toggleFloatingMenu() {
    setState(() {
      _isMenuOpen = !_isMenuOpen;
      if (_isMenuOpen) {
        _menuAnimationController.forward();
      } else {
        _menuAnimationController.reverse();
      }
    });
  }

  /// Fermer le menu flottant
  void _closeFloatingMenu() {
    setState(() {
      _isMenuOpen = false;
      _menuAnimationController.reverse();
    });
  }

  /// Toggle la sous-barre de navigation
  void _toggleSubNavigation() {
    // Feedback haptique pour confirmer l'action
    HapticFeedback.lightImpact();

    setState(() {
      _isSubNavVisible = !_isSubNavVisible;
      if (_isSubNavVisible) {
        _subNavAnimationController.forward();
      } else {
        _subNavAnimationController.reverse();
      }
    });

    // Feedback visuel avec SnackBar
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          _isSubNavVisible ? context.t('sub_menu_open') : context.t('sub_menu_closed'),
          style: const TextStyle(color: Colors.white),
        ),
        backgroundColor: const Color(0xFF5CB3FF),
        duration: const Duration(milliseconds: 800),
        behavior: SnackBarBehavior.floating,
        margin: const EdgeInsets.only(bottom: 100),
      ),
    );
  }

  Widget _buildCenterFab(SettingsProvider settings) {
    return Container(
      width: 64,
      height: 64,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: settings.accentColor,
        boxShadow: [
          BoxShadow(
            color: settings.accentColor.withValues(alpha: 0.4),
            blurRadius: 15,
            offset: const Offset(0, 4),
          )
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(32),
          onTap: _toggleFloatingMenu,
          child: Center(
            child: AnimatedRotation(
              turns: _isMenuOpen ? 0.125 : 0.0,
              duration: const Duration(milliseconds: 300),
              child: const Icon(
                Icons.add,
                color: Colors.white,
                size: 32,
              ),
            ),
          ),
        ),
      ),
    );
  }

  /// Construire les icônes flottantes (menu centré au dessus du FAB)
  Widget _buildFloatingMenu(SettingsProvider settings) {
    return Stack(
      children: [
        // Overlay pour fermer le menu
        if (_isMenuOpen)
          Positioned.fill(
            child: GestureDetector(
              onTap: _closeFloatingMenu,
              child: Container(
                color: Colors.black.withValues(alpha: 0.3),
              ),
            ),
          ),

        // Menu rapide
        AnimatedBuilder(
          animation: _menuAnimation,
          builder: (context, child) {
            return Positioned(
              right: 20,
              bottom: 120, // Juste au dessus de la navbar
              child: IgnorePointer(
                ignoring: _menuAnimation.value == 0,
                child: Opacity(
                  opacity: _menuAnimation.value,
                  child: Transform.translate(
                    offset: Offset(0, 40 * (1 - _menuAnimation.value)),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.end, // Alignés à droite
                      children: [
                        _buildQuickAction(
                          settings: settings,
                          icon: Icons.person,
                          label: context.t('profile'),
                          onTap: () {
                            _closeFloatingMenu();
                            Navigator.pushNamed(context, '/profile');
                          },
                        ),
                        _buildQuickAction(
                          settings: settings,
                          icon: Icons.credit_card,
                          label: context.t('my_card'),
                          onTap: () {
                            _closeFloatingMenu();
                            Navigator.pushNamed(context, '/mycard');
                          },
                        ),
                        _buildQuickAction(
                          settings: settings,
                          icon: Icons.dashboard,
                          label: context.t('dashboard'),
                          onTap: () {
                            _closeFloatingMenu();
                            Navigator.pushNamed(context, '/dashboard');
                          },
                        ),
                        _buildQuickAction(
                          settings: settings,
                          icon: Icons.notifications,
                          label: context.t('notification'),
                          onTap: () {
                            _closeFloatingMenu();
                            Navigator.pushNamed(context, '/notifications');
                          },
                        ),
                        _buildQuickAction(
                          settings: settings,
                          icon: Icons.star,
                          label: context.t('virtual_assistant'),
                          isHighlighted: false,
                          onTap: () {
                            _closeFloatingMenu();
                            Navigator.pushNamed(context, '/virtual_assistant');
                          },
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        ),

        // Le bouton flottant (FAB) d'origine, ancré à droite
        Positioned(
          right: 20,
          bottom: MediaQuery.of(context).padding.bottom > 0 ? 80 : 90,
          child: Container(
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: settings.accentColor,
              boxShadow: [
                BoxShadow(
                  color: settings.accentColor.withValues(alpha: 0.4),
                  blurRadius: 15,
                  offset: const Offset(0, 4),
                )
              ],
            ),
            child: Material(
              color: Colors.transparent,
              child: InkWell(
                borderRadius: BorderRadius.circular(28),
                onTap: _toggleFloatingMenu,
                child: Center(
                  child: AnimatedRotation(
                    turns: _isMenuOpen ? 0.125 : 0.0,
                    duration: const Duration(milliseconds: 300),
                    child: const Icon(
                      Icons.add,
                      color: Colors.white,
                      size: 28,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),

        // Flèche de navigation à gauche (anciennement à droite) pour l'équilibre visuel, si on veut
        if (!_isMenuOpen)
          Positioned(
            left: 20,
            bottom: MediaQuery.of(context).padding.bottom > 0 ? 80 : 90,
            child: Consumer<SettingsProvider>(
              builder: (context, settings, child) {
                return GestureDetector(
                  onTap: _toggleSubNavigation,
                  child: Semantics(
                    button: true,
                    label: _isSubNavVisible
                        ? 'Masquer la sous-barre'
                        : 'Afficher la sous-barre',
                    child: Container(
                      width: 44,
                      height: 36,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            settings.accentColor,
                            settings.accentColor.withValues(alpha: 0.8),
                          ],
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                        ),
                        borderRadius: BorderRadius.circular(18),
                        border: Border.all(
                          color: Colors.white.withValues(alpha: 0.95),
                          width: 2,
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.4),
                            blurRadius: 12,
                            spreadRadius: 2,
                            offset: const Offset(0, 4),
                          ),
                          BoxShadow(
                            color: settings.accentColor.withValues(alpha: 0.45),
                            blurRadius: 18,
                            spreadRadius: 1,
                          ),
                        ],
                      ),
                      child: Center(
                        child: AnimatedRotation(
                          turns: _isSubNavVisible ? 0.5 : 0.0,
                          duration: const Duration(milliseconds: 300),
                          child: const Icon(
                            Icons.expand_more,
                            color: Colors.white,
                            size: 22,
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
      ],
    );
  }

  /// Construire la barre de navigation complète avec sous-barre
  Widget _buildNavigationBar(SettingsProvider settings) {
    final List<IconData> navIcons = [
      Icons.home_outlined,
      Icons.pie_chart_outline,
      Icons.workspace_premium_outlined,
      Icons.account_balance_wallet_outlined,
      Icons.person_outline,
    ];

    // Couleur bleue pour la navbar avec un ombre
    const Color navBarColor = Color(0xFF1D54D4);

    return SafeArea(
      bottom: false,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Sous-barre de navigation (cachée par défaut)
          if (_isSubNavVisible)
            AnimatedBuilder(
              animation: _subNavAnimation,
              builder: (context, child) {
                return SizeTransition(
                  sizeFactor: _subNavAnimation,
                  child: Container(
                    margin: const EdgeInsets.symmetric(horizontal: 16),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.4),
                          offset: const Offset(0, 8),
                          blurRadius: 20,
                        ),
                      ],
                    ),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(20),
                      child: Container(
                        height: 60,
                        decoration: BoxDecoration(
                          color: settings.cardColor.withValues(alpha: 0.95),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            _buildSubNavItem(
                              icon: Icons.leaderboard,
                              label: context.t('rankings'),
                              onTap: () => _navigateToRanking(settings),
                              settings: settings,
                            ),
                            _buildSubNavItem(
                              icon: Icons.credit_card,
                              label: context.t('my_card'),
                              onTap: () => _navigateToMyCard(settings),
                              settings: settings,
                            ),
                            _buildSubNavItem(
                              icon: Icons.emoji_events,
                              label: context.t('tournaments'),
                              onTap: () => _navigateToTournaments(settings),
                              settings: settings,
                            ),
                            _buildSubNavItem(
                              icon: Icons.apps,
                              label: context.t('other_apps'),
                              onTap: () => _navigateToOtherApps(settings),
                              settings: settings,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                );
              },
            ),

          // -------- La Navigation Liquide --------
          Align(
            alignment: Alignment.bottomCenter,
            child: Padding(
              padding: EdgeInsets.only(
                  bottom: MediaQuery.of(context).padding.bottom == 0 ? 20.0 : MediaQuery.of(context).padding.bottom,
              ),
              child: SizedBox(
                height: 100, // Hauteur globale conteneur (pour laisser dépasser le liquide)
                width: totalWidth,
                child: Stack(
                  children: [
                    // ===== Ombre Douce Derrière la Barre =====
                    Positioned(
                      top: 10,
                      bottom: 10,
                      left: 10,
                      right: 10,
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(32),
                          boxShadow: [
                            BoxShadow(
                              color: navBarColor.withValues(alpha: 0.4),
                              blurRadius: 24,
                              offset: const Offset(0, 10),
                            ),
                          ],
                        ),
                      ),
                    ),

                    // ===== 1. CALQUE ARRIÈRE PLAN LIQUIDE =====
                    ColorFiltered(
                      colorFilter: const ColorFilter.matrix([
                        1, 0, 0, 0, 0,
                        0, 1, 0, 0, 0,
                        0, 0, 1, 0, 0,
                        0, 0, 0, 20, -2300, // Effet Gouey (fusion des pixels)
                      ]),
                      child: ImageFiltered(
                        imageFilter: ImageFilter.blur(sigmaX: 8, sigmaY: 8),
                        child: Stack(
                          children: [
                            // Le pont de gauche à droite qui relie les éléments
                            Positioned(
                              top: (100 - 24) / 2,
                              left: 32,
                              right: 32,
                              height: 24,
                              child: Container(color: navBarColor),
                            ),
                            
                            // La forme de base (2 Pills allongées et le cercle du milieu)
                            Center(
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: [
                                  Container(
                                    width: pillWidth,
                                    height: navHeight,
                                    decoration: BoxDecoration(
                                      color: navBarColor,
                                      borderRadius: BorderRadius.circular(32),
                                    ),
                                  ),
                                  Container(
                                    width: circleWidth,
                                    height: navHeight,
                                    decoration: BoxDecoration(
                                      color: navBarColor,
                                      shape: BoxShape.circle,
                                    ),
                                  ),
                                  Container(
                                    width: pillWidth,
                                    height: navHeight,
                                    decoration: BoxDecoration(
                                      color: navBarColor,
                                      borderRadius: BorderRadius.circular(32),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            
                            // La grosse goutte (bulge) qui bouge et fusionne
                            AnimatedPositioned(
                              duration: const Duration(milliseconds: 400),
                              curve: Curves.easeOutBack,
                              left: _getCenterPosition(_activeVisualIndex) - (bulgeSize / 2),
                              top: (100 - bulgeSize) / 2,
                              child: Container(
                                width: bulgeSize,
                                height: bulgeSize,
                                decoration: const BoxDecoration(
                                  color: navBarColor,
                                  shape: BoxShape.circle,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),

                    // ===== 2. CALQUE PREMIER PLAN (Boutons + Cercle blanc) =====
                    // Cercle indicateur principal
                    AnimatedPositioned(
                      duration: const Duration(milliseconds: 400),
                      curve: Curves.easeOutBack,
                      left: _getCenterPosition(_activeVisualIndex) - (whiteCircleSize / 2),
                      top: (100 - whiteCircleSize) / 2,
                      child: Container(
                        width: whiteCircleSize,
                        height: whiteCircleSize,
                        decoration: BoxDecoration(
                          color: settings.accentColor, // Ou Colors.white si vous voulez qu'il soit blanc
                          shape: BoxShape.circle,
                          boxShadow: [
                            BoxShadow(
                              color: settings.accentColor.withValues(alpha: 0.3),
                              blurRadius: 10,
                              offset: const Offset(0, 4),
                            )
                          ]
                        ),
                      ),
                    ),

                    // Les Icônes cliquables
                    Center(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: List.generate(navIcons.length, (index) {
                          final isActive = _activeVisualIndex == index;
                          return GestureDetector(
                            onTap: () {
                              if (index == 1) {
                                _openTradeScreenFullscreen(settings);
                              } else {
                                if (_isMenuOpen) _closeFloatingMenu();
                                setState(() {
                                  _selectedIndex = index;
                                });
                              }
                            },
                            behavior: HitTestBehavior.opaque,
                            child: SizedBox(
                              width: index == 2 ? circleWidth : 60.0,
                              height: navHeight,
                              child: Center(
                                child: AnimatedSwitcher(
                                  duration: const Duration(milliseconds: 300),
                                  child: Icon(
                                    navIcons[index],
                                    key: ValueKey<int>(isActive ? 1 : 0),
                                    color: isActive 
                                        ? Colors.white 
                                        : Colors.white70, // Couleur des icônes désactivées sur fond bleu
                                    size: 26,
                                  ),
                                ),
                              ),
                            ),
                          );
                        }),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  /// Construire un élément de sous-navigation
  Widget _buildSubNavItem({
    required IconData icon,
    required String label,
    required VoidCallback onTap,
    required SettingsProvider settings,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon,
              color: settings.accentColor,
              size: 20,
            ),
            const SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(
                color: settings.textColor,
                fontSize: 10,
                fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// Construire un élément de la barre de navigation principale
  Widget _buildNavItem(int index, IconData outlinedIcon, IconData filledIcon, SettingsProvider settings) {
    final bool isSelected = _selectedIndex == index;
    return GestureDetector(
      onTap: () {
        if (index == 1) {
          _openTradeScreenFullscreen(settings);
        } else {
          setState(() => _selectedIndex = index);
        }
      },
      behavior: HitTestBehavior.opaque,
      child: SizedBox(
        width: 64,
        height: 76,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedSwitcher(
              duration: const Duration(milliseconds: 200),
              transitionBuilder: (Widget child, Animation<double> animation) {
                return ScaleTransition(scale: animation, child: child);
              },
              child: isSelected
                  ? Container(
                      key: const ValueKey(1),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: settings.accentColor.withValues(alpha: 0.5),
                            blurRadius: 16,
                            spreadRadius: -4,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      child: Icon(filledIcon, color: settings.accentColor, size: 28),
                    )
                  : Icon(outlinedIcon, key: const ValueKey(2), color: settings.subtitleColor, size: 26),
            ),
            const SizedBox(height: 6),
            AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              width: isSelected ? 16 : 0,
              height: 3,
              decoration: BoxDecoration(
                color: settings.accentColor,
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// Navigation vers le classement
  void _navigateToRanking(SettingsProvider settings) {
    Navigator.pushNamed(context, '/rankings');
  }

  /// Navigation vers ma carte
  void _navigateToMyCard(SettingsProvider settings) {
    Navigator.pushNamed(context, '/mycard');
  }

  /// Navigation vers les tournois
  void _navigateToTournaments(SettingsProvider settings) {
    Navigator.pushNamed(context, '/tournaments');
  }

  /// Navigation vers les autres applications
  void _navigateToOtherApps(SettingsProvider settings) {
    Navigator.pushNamed(context, '/other_apps');
  }

  // Élément d'action rapide affiché verticalement près du bouton "+"
  Widget _buildQuickAction({
    required SettingsProvider settings,
    required IconData icon,
    required String label,
    required VoidCallback onTap,
    bool isHighlighted = false,
  }) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Bulle du label
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            margin: const EdgeInsets.only(right: 8),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.95),
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.15),
                  blurRadius: 10,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: Text(
              label,
              style: const TextStyle(
                color: Colors.black87,
                fontSize: 13,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          // Carré de l'icône
          GestureDetector(
            onTap: onTap,
            child: Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(
                gradient: isHighlighted
                    ? const LinearGradient(
                        colors: [
                          Color(0xFFFFC107),
                          Color(0xFFFFD54F),
                        ],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      )
                    : const LinearGradient(
                        colors: [
                          Color(0xFF5CB3FF),
                          Color(0xFF4A9EFF),
                        ],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: isHighlighted
                        ? const Color(0xFFFFC107).withValues(alpha: 0.4)
                        : const Color(0xFF5CB3FF).withValues(alpha: 0.4),
                    blurRadius: 14,
                    offset: const Offset(0, 6),
                  ),
                ],
              ),
              child: Icon(
                icon,
                color: Colors.white,
                size: 22,
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _openTradeScreenFullscreen(SettingsProvider settings) {
    HapticService().triggerButtonPress();

    Navigator.push(
      context,
      PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) =>
            const TradingScreen(),
        transitionDuration: const Duration(milliseconds: 400),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          const begin = Offset(1.0, 0.0);
          const end = Offset.zero;
          const curve = Curves.easeInOutCubic;

          var tween = Tween(begin: begin, end: end).chain(
            CurveTween(curve: curve),
          );

          return SlideTransition(
            position: animation.drive(tween),
            child: child,
          );
        },
        fullscreenDialog: true,
      ),
    );
  }

  @override
  Widget build(BuildContext context) => Consumer<SettingsProvider>(
        builder: (context, settings, child) => Scaffold(
          extendBody: true,
          backgroundColor: settings.backgroundColor,
          bottomNavigationBar: _buildNavigationBar(settings),
          // Icônes flottantes draggables
          body: Stack(
            children: [
              // Contenu principal
              screens[_selectedIndex],
              // Menu flottant
              _buildFloatingMenu(settings),
            ],
          ),
        ),
      );
}

class Asset {
  String symbole, nom;
  double price, changePercent;
  List<FlSpot> chartData;
  Color color;
  String logoPath;
  Asset({
    required this.symbole,
    required this.nom,
    required this.price,
    required this.changePercent,
    required this.chartData,
    required this.color,
    required this.logoPath,
  });
}

List<Asset> seedAssets = [
  // Cryptomonnaies principales
  Asset(
    symbole: 'BTC',
    nom: 'Bitcoin',
    price: 63110.58,
    changePercent: -0.0001,
    chartData: _generateChartData(63110.58),
    color: const Color(0xFFF7931A),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  ),
  Asset(
    symbole: 'ETH',
    nom: 'Ethereum',
    price: 4171.37,
    changePercent: -0.0001,
    chartData: _generateChartData(4171.37),
    color: const Color(0xFF627EEA),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  ),
  Asset(
    symbole: 'SOL',
    nom: 'Solana',
    price: 166.70,
    changePercent: -0.0001,
    chartData: _generateChartData(166.70),
    color: const Color(0xFF9945FF),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
  ),
  Asset(
    symbole: 'ADA',
    nom: 'Cardano',
    price: 0.87,
    changePercent: -0.0001,
    chartData: _generateChartData(0.87),
    color: const Color(0xFF0033AD),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
  ),
  Asset(
    symbole: 'DOT',
    nom: 'Polkadot',
    price: 7.45,
    changePercent: 0.002,
    chartData: _generateChartData(7.45),
    color: const Color(0xFFE6007A),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
  ),
  Asset(
    symbole: 'MATIC',
    nom: 'Polygon',
    price: 0.95,
    changePercent: -0.001,
    chartData: _generateChartData(0.95),
    color: const Color(0xFF8247E5),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
  ),
  Asset(
    symbole: 'AVAX',
    nom: 'Avalanche',
    price: 38.20,
    changePercent: 0.001,
    chartData: _generateChartData(38.20),
    color: const Color(0xFFE84142),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  ),
  Asset(
    symbole: 'LINK',
    nom: 'Chainlink',
    price: 15.80,
    changePercent: -0.002,
    chartData: _generateChartData(15.80),
    color: const Color(0xFF2A5ADA),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
  ),
  Asset(
    symbole: 'UNI',
    nom: 'Uniswap',
    price: 8.45,
    changePercent: 0.003,
    chartData: _generateChartData(8.45),
    color: const Color(0xFFFF007A),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png',
  ),
  Asset(
    symbole: 'ATOM',
    nom: 'Cosmos',
    price: 12.30,
    changePercent: -0.001,
    chartData: _generateChartData(12.30),
    color: const Color(0xFF2E3148),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
  ),
  Asset(
    symbole: 'FTM',
    nom: 'Fantom',
    price: 0.45,
    changePercent: 0.004,
    chartData: _generateChartData(0.45),
    color: const Color(0xFF1969FF),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png',
  ),
  Asset(
    symbole: 'ALGO',
    nom: 'Algorand',
    price: 0.18,
    changePercent: -0.002,
    chartData: _generateChartData(0.18),
    color: const Color(0xFF000000),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png',
  ),
  Asset(
    symbole: 'VET',
    nom: 'VeChain',
    price: 0.035,
    changePercent: 0.001,
    chartData: _generateChartData(0.035),
    color: const Color(0xFF15BDFF),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png',
  ),
  Asset(
    symbole: 'ICP',
    nom: 'Internet Computer',
    price: 12.80,
    changePercent: -0.003,
    chartData: _generateChartData(12.80),
    color: const Color(0xFF29ABE2),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png',
  ),
  Asset(
    symbole: 'FIL',
    nom: 'Filecoin',
    price: 6.20,
    changePercent: 0.002,
    chartData: _generateChartData(6.20),
    color: const Color(0xFF0090FF),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png',
  ),
  Asset(
    symbole: 'THETA',
    nom: 'Theta Network',
    price: 1.85,
    changePercent: -0.001,
    chartData: _generateChartData(1.85),
    color: const Color(0xFF2AB8E6),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png',
  ),
  Asset(
    symbole: 'EOS',
    nom: 'EOS',
    price: 0.95,
    changePercent: 0.001,
    chartData: _generateChartData(0.95),
    color: const Color(0xFF000000),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png',
  ),
  Asset(
    symbole: 'AAVE',
    nom: 'Aave',
    price: 95.50,
    changePercent: 0.002,
    chartData: _generateChartData(95.50),
    color: const Color(0xFFB6509E),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
  ),
  Asset(
    symbole: 'SUSHI',
    nom: 'SushiSwap',
    price: 1.25,
    changePercent: -0.002,
    chartData: _generateChartData(1.25),
    color: const Color(0xFFFA52A0),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png',
  ),
  Asset(
    symbole: 'COMP',
    nom: 'Compound',
    price: 58.30,
    changePercent: 0.001,
    chartData: _generateChartData(58.30),
    color: const Color(0xFF00D395),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png',
  ),
  // NOUVELLES CRYPTOMONNAIES POPULAIRES
  Asset(
    symbole: 'BNB',
    nom: 'Binance Coin',
    price: 315.45,
    changePercent: 0.0025,
    chartData: _generateChartData(315.45),
    color: const Color(0xFFF3BA2F),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  ),
  Asset(
    symbole: 'USDT',
    nom: 'Tether',
    price: 1.00,
    changePercent: 0.0001,
    chartData: _generateChartData(1.00),
    color: const Color(0xFF26A17B),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  ),
  Asset(
    symbole: 'USDC',
    nom: 'USD Coin',
    price: 1.00,
    changePercent: 0.0001,
    chartData: _generateChartData(1.00),
    color: const Color(0xFF2775CA),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  ),
  Asset(
    symbole: 'APT',
    nom: 'Aptos',
    price: 8.75,
    changePercent: 0.0035,
    chartData: _generateChartData(8.75),
    color: const Color(0xFF000000),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png',
  ),
  Asset(
    symbole: 'SUI',
    nom: 'Sui',
    price: 1.45,
    changePercent: 0.0025,
    chartData: _generateChartData(1.45),
    color: const Color(0xFF4FA8FF),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png',
  ),
  Asset(
    symbole: 'ARB',
    nom: 'Arbitrum',
    price: 1.85,
    changePercent: 0.0015,
    chartData: _generateChartData(1.85),
    color: const Color(0xFF2D374B),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png',
  ),
  Asset(
    symbole: 'OP',
    nom: 'Optimism',
    price: 2.15,
    changePercent: -0.0005,
    chartData: _generateChartData(2.15),
    color: const Color(0xFFFF0420),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png',
  ),
  Asset(
    symbole: 'INJ',
    nom: 'Injective',
    price: 24.50,
    changePercent: 0.0045,
    chartData: _generateChartData(24.50),
    color: const Color(0xFF00D4FF),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png',
  ),
  Asset(
    symbole: 'SEI',
    nom: 'Sei',
    price: 0.35,
    changePercent: 0.0025,
    chartData: _generateChartData(0.35),
    color: const Color(0xFF000000),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23149.png',
  ),
  Asset(
    symbole: 'TIA',
    nom: 'Celestia',
    price: 12.80,
    changePercent: 0.0035,
    chartData: _generateChartData(12.80),
    color: const Color(0xFFF4F1F0),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22861.png',
  ),
  Asset(
    symbole: 'WLD',
    nom: 'Worldcoin',
    price: 4.25,
    changePercent: -0.0015,
    chartData: _generateChartData(4.25),
    color: const Color(0xFF1A1A1A),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13504.png',
  ),
  Asset(
    symbole: 'PEPE',
    nom: 'Pepe',
    price: 0.0000012,
    changePercent: 0.0085,
    chartData: _generateChartData(0.0000012),
    color: const Color(0xFF00D4AA),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png',
  ),
  Asset(
    symbole: 'FLOKI',
    nom: 'Floki',
    price: 0.000025,
    changePercent: 0.0045,
    chartData: _generateChartData(0.000025),
    color: const Color(0xFFE84142),
    logoPath: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10804.png',
  ),
];

List<FlSpot> _generateChartData(double basePrice) {
  final random = Random();
  return List.generate(20, (i) {
    final variation = (random.nextDouble() - 0.5) * 0.1;
    final price = basePrice * (1 + variation);
    return FlSpot(i.toDouble(), price);
  });
}

// Données Forex - Supprimé (fonctionnalité à venir)
/*
List<Asset> _getForexAssets() {
  return [
    Asset(
      symbole: 'EUR/USD',
      nom: 'Euro / Dollar US',
      price: 1.0845,
      changePercent: 0.0012,
      chartData: _generateChartData(1.0845),
      color: const Color(0xFF2E7D32),
      logoPath: 'https://flagcdn.com/w40/eu.png',
    ),
    Asset(
      symbole: 'GBP/USD',
      nom: 'Livre Sterling / Dollar US',
      price: 1.2642,
      changePercent: -0.0008,
      chartData: _generateChartData(1.2642),
      color: const Color(0xFF1976D2),
      logoPath: 'https://flagcdn.com/w40/gb.png',
    ),
    Asset(
      symbole: 'USD/JPY',
      nom: 'Dollar US / Yen Japonais',
      price: 149.85,
      changePercent: 0.0025,
      chartData: _generateChartData(149.85),
      color: const Color(0xFFD32F2F),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'AUD/USD',
      nom: 'Dollar Australien / Dollar US',
      price: 0.6543,
      changePercent: -0.0015,
      chartData: _generateChartData(0.6543),
      color: const Color(0xFFF57C00),
      logoPath: 'https://flagcdn.com/w40/au.png',
    ),
    Asset(
      symbole: 'USD/CAD',
      nom: 'Dollar US / Dollar Canadien',
      price: 1.3721,
      changePercent: 0.0009,
      chartData: _generateChartData(1.3721),
      color: const Color(0xFF7B1FA2),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/CHF',
      nom: 'Dollar US / Franc Suisse',
      price: 0.8756,
      changePercent: -0.0003,
      chartData: _generateChartData(0.8756),
      color: const Color(0xFF388E3C),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'EUR/GBP',
      nom: 'Euro / Livre Sterling',
      price: 0.8587,
      changePercent: 0.0018,
      chartData: _generateChartData(0.8587),
      color: const Color(0xFF303F9F),
      logoPath: 'https://flagcdn.com/w40/eu.png',
    ),
    Asset(
      symbole: 'NZD/USD',
      nom: 'Dollar Néo-Zélandais / Dollar US',
      price: 0.6123,
      changePercent: -0.0021,
      chartData: _generateChartData(0.6123),
      color: const Color(0xFF00796B),
      logoPath: 'https://flagcdn.com/w40/nz.png',
    ),
    Asset(
      symbole: 'EUR/JPY',
      nom: 'Euro / Yen Japonais',
      price: 162.45,
      changePercent: 0.0018,
      chartData: _generateChartData(162.45),
      color: const Color(0xFF4CAF50),
      logoPath: 'https://flagcdn.com/w40/eu.png',
    ),
    Asset(
      symbole: 'GBP/JPY',
      nom: 'Livre Sterling / Yen Japonais',
      price: 189.32,
      changePercent: -0.0012,
      chartData: _generateChartData(189.32),
      color: const Color(0xFF5CB3FF),
      logoPath: 'https://flagcdn.com/w40/gb.png',
    ),
    Asset(
      symbole: 'AUD/JPY',
      nom: 'Dollar Australien / Yen Japonais',
      price: 98.76,
      changePercent: 0.0023,
      chartData: _generateChartData(98.76),
      color: const Color(0xFFFF9800),
      logoPath: 'https://flagcdn.com/w40/au.png',
    ),
    Asset(
      symbole: 'EUR/CHF',
      nom: 'Euro / Franc Suisse',
      price: 0.9487,
      changePercent: 0.0008,
      chartData: _generateChartData(0.9487),
      color: const Color(0xFF9C27B0),
      logoPath: 'https://flagcdn.com/w40/eu.png',
    ),
    Asset(
      symbole: 'GBP/CHF',
      nom: 'Livre Sterling / Franc Suisse',
      price: 1.1056,
      changePercent: -0.0005,
      chartData: _generateChartData(1.1056),
      color: const Color(0xFF795548),
      logoPath: 'https://flagcdn.com/w40/gb.png',
    ),
    Asset(
      symbole: 'EUR/AUD',
      nom: 'Euro / Dollar Australien',
      price: 1.6589,
      changePercent: 0.0015,
      chartData: _generateChartData(1.6589),
      color: const Color(0xFF607D8B),
      logoPath: 'https://flagcdn.com/w40/eu.png',
    ),
    Asset(
      symbole: 'EUR/CAD',
      nom: 'Euro / Dollar Canadien',
      price: 1.4876,
      changePercent: -0.0009,
      chartData: _generateChartData(1.4876),
      color: const Color(0xFF3F51B5),
      logoPath: 'https://flagcdn.com/w40/eu.png',
    ),
    Asset(
      symbole: 'GBP/AUD',
      nom: 'Livre Sterling / Dollar Australien',
      price: 1.9345,
      changePercent: 0.0021,
      chartData: _generateChartData(1.9345),
      color: const Color(0xFFE91E63),
      logoPath: 'https://flagcdn.com/w40/gb.png',
    ),
    Asset(
      symbole: 'GBP/CAD',
      nom: 'Livre Sterling / Dollar Canadien',
      price: 1.7321,
      changePercent: -0.0012,
      chartData: _generateChartData(1.7321),
      color: const Color(0xFF009688),
      logoPath: 'https://flagcdn.com/w40/gb.png',
    ),
    // NOUVELLES PAIRES FOREX
    Asset(
      symbole: 'USD/SEK',
      nom: 'Dollar US / Couronne Suédoise',
      price: 10.8542,
      changePercent: 0.0015,
      chartData: _generateChartData(10.8542),
      color: const Color(0xFF4CAF50),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/NOK',
      nom: 'Dollar US / Couronne Norvégienne',
      price: 10.7234,
      changePercent: -0.0008,
      chartData: _generateChartData(10.7234),
      color: const Color(0xFF2196F3),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/DKK',
      nom: 'Dollar US / Couronne Danoise',
      price: 6.8756,
      changePercent: 0.0005,
      chartData: _generateChartData(6.8756),
      color: const Color(0xFF9C27B0),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/PLN',
      nom: 'Dollar US / Zloty Polonais',
      price: 4.1234,
      changePercent: 0.0025,
      chartData: _generateChartData(4.1234),
      color: const Color(0xFFE91E63),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/CZK',
      nom: 'Dollar US / Couronne Tchèque',
      price: 22.4567,
      changePercent: -0.0012,
      chartData: _generateChartData(22.4567),
      color: const Color(0xFFFF9800),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/HUF',
      nom: 'Dollar US / Forint Hongrois',
      price: 365.45,
      changePercent: 0.0035,
      chartData: _generateChartData(365.45),
      color: const Color(0xFF795548),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/TRY',
      nom: 'Dollar US / Lire Turque',
      price: 29.1234,
      changePercent: 0.0045,
      chartData: _generateChartData(29.1234),
      color: const Color(0xFF607D8B),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/ZAR',
      nom: 'Dollar US / Rand Sud-Africain',
      price: 18.7654,
      changePercent: -0.0025,
      chartData: _generateChartData(18.7654),
      color: const Color(0xFF3F51B5),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/MXN',
      nom: 'Dollar US / Peso Mexicain',
      price: 17.2345,
      changePercent: 0.0015,
      chartData: _generateChartData(17.2345),
      color: const Color(0xFF4CAF50),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/BRL',
      nom: 'Dollar US / Real Brésilien',
      price: 5.1234,
      changePercent: -0.0018,
      chartData: _generateChartData(5.1234),
      color: const Color(0xFF009688),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/INR',
      nom: 'Dollar US / Roupie Indienne',
      price: 83.1234,
      changePercent: 0.0005,
      chartData: _generateChartData(83.1234),
      color: const Color(0xFFFF5722),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/CNY',
      nom: 'Dollar US / Yuan Chinois',
      price: 7.2345,
      changePercent: 0.0012,
      chartData: _generateChartData(7.2345),
      color: const Color(0xFFE91E63),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/KRW',
      nom: 'Dollar US / Won Sud-Coréen',
      price: 1312.45,
      changePercent: -0.0008,
      chartData: _generateChartData(1312.45),
      color: const Color(0xFF2196F3),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/SGD',
      nom: 'Dollar US / Dollar de Singapour',
      price: 1.3456,
      changePercent: 0.0005,
      chartData: _generateChartData(1.3456),
      color: const Color(0xFF4CAF50),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
    Asset(
      symbole: 'USD/HKD',
      nom: 'Dollar US / Dollar de Hong Kong',
      price: 7.8234,
      changePercent: 0.0001,
      chartData: _generateChartData(7.8234),
      color: const Color(0xFF9C27B0),
      logoPath: 'https://flagcdn.com/w40/us.png',
    ),
  ];
}
*/

// Données Actions - Supprimé (fonctionnalité à venir)
/*
List<Asset> _getStockAssets() {
  return [
    Asset(
      symbole: 'AAPL',
      nom: 'Apple Inc.',
      price: 185.64,
      changePercent: 0.0234,
      chartData: _generateChartData(185.64),
      color: const Color(0xFF424242),
      logoPath: 'https://logo.clearbit.com/apple.com',
    ),
    Asset(
      symbole: 'GOOGL',
      nom: 'Alphabet Inc.',
      price: 142.56,
      changePercent: 0.0187,
      chartData: _generateChartData(142.56),
      color: const Color(0xFF4285F4),
      logoPath: 'https://logo.clearbit.com/google.com',
    ),
    Asset(
      symbole: 'MSFT',
      nom: 'Microsoft Corporation',
      price: 378.91,
      changePercent: -0.0056,
      chartData: _generateChartData(378.91),
      color: const Color(0xFF00BCF2),
      logoPath: 'https://logo.clearbit.com/microsoft.com',
    ),
    Asset(
      symbole: 'TSLA',
      nom: 'Tesla, Inc.',
      price: 248.87,
      changePercent: 0.0345,
      chartData: _generateChartData(248.87),
      color: const Color(0xFFE31937),
      logoPath: 'https://logo.clearbit.com/tesla.com',
    ),
    Asset(
      symbole: 'AMZN',
      nom: 'Amazon.com, Inc.',
      price: 155.23,
      changePercent: 0.0123,
      chartData: _generateChartData(155.23),
      color: const Color(0xFFFF9900),
      logoPath: 'https://logo.clearbit.com/amazon.com',
    ),
    Asset(
      symbole: 'META',
      nom: 'Meta Platforms, Inc.',
      price: 329.45,
      changePercent: -0.0089,
      chartData: _generateChartData(329.45),
      color: const Color(0xFF1877F2),
      logoPath: 'https://logo.clearbit.com/meta.com',
    ),
    Asset(
      symbole: 'NVDA',
      nom: 'NVIDIA Corporation',
      price: 875.12,
      changePercent: 0.0456,
      chartData: _generateChartData(875.12),
      color: const Color(0xFF76B900),
      logoPath: 'https://logo.clearbit.com/nvidia.com',
    ),
    Asset(
      symbole: 'NFLX',
      nom: 'Netflix, Inc.',
      price: 623.78,
      changePercent: 0.0156,
      chartData: _generateChartData(623.78),
      color: const Color(0xFFE50914),
      logoPath: 'https://logo.clearbit.com/netflix.com',
    ),
    Asset(
      symbole: 'AMD',
      nom: 'Advanced Micro Devices',
      price: 145.67,
      changePercent: 0.0289,
      chartData: _generateChartData(145.67),
      color: const Color(0xFF1976D2),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/AMD.png',
    ),
    Asset(
      symbole: 'INTC',
      nom: 'Intel Corporation',
      price: 45.23,
      changePercent: -0.0123,
      chartData: _generateChartData(45.23),
      color: const Color(0xFF0066CC),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/INTC.png',
    ),
    Asset(
      symbole: 'ADBE',
      nom: 'Adobe Inc.',
      price: 598.45,
      changePercent: 0.0187,
      chartData: _generateChartData(598.45),
      color: const Color(0xFFFF0000),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/ADBE.png',
    ),
    Asset(
      symbole: 'CRM',
      nom: 'Salesforce, Inc.',
      price: 267.89,
      changePercent: -0.0089,
      chartData: _generateChartData(267.89),
      color: const Color(0xFF00A1E0),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/CRM.png',
    ),
    Asset(
      symbole: 'PYPL',
      nom: 'PayPal Holdings, Inc.',
      price: 68.34,
      changePercent: 0.0223,
      chartData: _generateChartData(68.34),
      color: const Color(0xFF0070BA),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/PYPL.png',
    ),
    Asset(
      symbole: 'UBER',
      nom: 'Uber Technologies, Inc.',
      price: 72.56,
      changePercent: 0.0134,
      chartData: _generateChartData(72.56),
      color: const Color(0xFF000000),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/UBER.png',
    ),
    Asset(
      symbole: 'SPOT',
      nom: 'Spotify Technology S.A.',
      price: 198.67,
      changePercent: 0.0167,
      chartData: _generateChartData(198.67),
      color: const Color(0xFF1DB954),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/SPOT.png',
    ),
    Asset(
      symbole: 'TWTR',
      nom: 'Twitter, Inc.',
      price: 54.12,
      changePercent: -0.0056,
      chartData: _generateChartData(54.12),
      color: const Color(0xFF1DA1F2),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/TWTR.png',
    ),
    Asset(
      symbole: 'SNAP',
      nom: 'Snap Inc.',
      price: 12.45,
      changePercent: 0.0345,
      chartData: _generateChartData(12.45),
      color: const Color(0xFFE91E63),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/SNAP.png',
    ),
    Asset(
      symbole: 'ZOOM',
      nom: 'Zoom Video Communications',
      price: 78.23,
      changePercent: -0.0234,
      chartData: _generateChartData(78.23),
      color: const Color(0xFF2D8CFF),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/ZM.png',
    ),
    Asset(
      symbole: 'SHOP',
      nom: 'Shopify Inc.',
      price: 89.67,
      changePercent: 0.0198,
      chartData: _generateChartData(89.67),
      color: const Color(0xFF96BF48),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/SHOP.png',
    ),
    // NOUVELLES ACTIONS POPULAIRES
    Asset(
      symbole: 'COIN',
      nom: 'Coinbase Global, Inc.',
      price: 145.23,
      changePercent: 0.0456,
      chartData: _generateChartData(145.23),
      color: const Color(0xFF0052FF),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/COIN.png',
    ),
    Asset(
      symbole: 'SQ',
      nom: 'Block, Inc.',
      price: 78.45,
      changePercent: 0.0234,
      chartData: _generateChartData(78.45),
      color: const Color(0xFF00D4AA),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/SQ.png',
    ),
    Asset(
      symbole: 'ROKU',
      nom: 'Roku, Inc.',
      price: 65.78,
      changePercent: -0.0123,
      chartData: _generateChartData(65.78),
      color: const Color(0xFF6F1AB6),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/ROKU.png',
    ),
    Asset(
      symbole: 'PINS',
      nom: 'Pinterest, Inc.',
      price: 34.56,
      changePercent: 0.0156,
      chartData: _generateChartData(34.56),
      color: const Color(0xFFE60023),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/PINS.png',
    ),
    Asset(
      symbole: 'DOCU',
      nom: 'DocuSign, Inc.',
      price: 45.67,
      changePercent: -0.0089,
      chartData: _generateChartData(45.67),
      color: const Color(0xFFFF6B35),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/DOCU.png',
    ),
    Asset(
      symbole: 'PTON',
      nom: 'Peloton Interactive, Inc.',
      price: 12.34,
      changePercent: 0.0345,
      chartData: _generateChartData(12.34),
      color: const Color(0xFF000000),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/PTON.png',
    ),
    Asset(
      symbole: 'CRWD',
      nom: 'CrowdStrike Holdings, Inc.',
      price: 234.56,
      changePercent: 0.0256,
      chartData: _generateChartData(234.56),
      color: const Color(0xFF00D4FF),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/CRWD.png',
    ),
    Asset(
      symbole: 'OKTA',
      nom: 'Okta, Inc.',
      price: 89.12,
      changePercent: 0.0187,
      chartData: _generateChartData(89.12),
      color: const Color(0xFF007DC1),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/OKTA.png',
    ),
    Asset(
      symbole: 'SNOW',
      nom: 'Snowflake Inc.',
      price: 156.78,
      changePercent: 0.0123,
      chartData: _generateChartData(156.78),
      color: const Color(0xFF29B5E8),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/SNOW.png',
    ),
    Asset(
      symbole: 'PLTR',
      nom: 'Palantir Technologies Inc.',
      price: 23.45,
      changePercent: 0.0456,
      chartData: _generateChartData(23.45),
      color: const Color(0xFF000000),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/PLTR.png',
    ),
    Asset(
      symbole: 'RBLX',
      nom: 'Roblox Corporation',
      price: 45.67,
      changePercent: 0.0234,
      chartData: _generateChartData(45.67),
      color: const Color(0xFF00D4AA),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/RBLX.png',
    ),
    Asset(
      symbole: 'U',
      nom: 'Unity Software Inc.',
      price: 34.56,
      changePercent: -0.0156,
      chartData: _generateChartData(34.56),
      color: const Color(0xFF000000),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/U.png',
    ),
    Asset(
      symbole: 'DDOG',
      nom: 'Datadog, Inc.',
      price: 123.45,
      changePercent: 0.0187,
      chartData: _generateChartData(123.45),
      color: const Color(0xFF632CA6),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/DDOG.png',
    ),
    Asset(
      symbole: 'NET',
      nom: 'Cloudflare, Inc.',
      price: 67.89,
      changePercent: 0.0256,
      chartData: _generateChartData(67.89),
      color: const Color(0xFFF38020),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/NET.png',
    ),
    Asset(
      symbole: 'ASAN',
      nom: 'Asana, Inc.',
      price: 23.45,
      changePercent: 0.0123,
      chartData: _generateChartData(23.45),
      color: const Color(0xFFF06A6A),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/ASAN.png',
    ),
    Asset(
      symbole: 'TWLO',
      nom: 'Twilio Inc.',
      price: 56.78,
      changePercent: -0.0089,
      chartData: _generateChartData(56.78),
      color: const Color(0xFFF22F8F),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/TWLO.png',
    ),
    Asset(
      symbole: 'ZM',
      nom: 'Zillow Group, Inc.',
      price: 45.67,
      changePercent: 0.0156,
      chartData: _generateChartData(45.67),
      color: const Color(0xFF006AFF),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/ZM.png',
    ),
    Asset(
      symbole: 'ABNB',
      nom: 'Airbnb, Inc.',
      price: 134.56,
      changePercent: 0.0234,
      chartData: _generateChartData(134.56),
      color: const Color(0xFFFF5A5F),
      logoPath: 'https://companiesmarketcap.com/img/company-logos/64/ABNB.png',
    ),
  ];
}
*/

class HomepageScreen extends StatefulWidget {
  const HomepageScreen({super.key});
  @override
  _HomepageScreenState createState() => _HomepageScreenState();
}

class _HomepageScreenState extends State<HomepageScreen>
    with TickerProviderStateMixin {
  late TabController _tabController;
  List<Asset> assets = List.from(seedAssets);
  late Timer timer;
  final random = Random();
  int _selectedCategory = 0; // 0 = Crypto, 1 = Forex, 2 = Actions

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    _startAssetUpdates();
  }

  void _startAssetUpdates() {
    // Mise à jour plus fréquente pour voir les prix bouger
    timer = Timer.periodic(const Duration(milliseconds: 2000), (timer) {
      updateAssets();
    });
  }

  @override
  void dispose() {
    _tabController.dispose();
    timer.cancel();
    super.dispose();
  }


  void updateAssets() {
    // Récupérer le TradingProvider pour les prix API temps réel
    final tradingProvider =
        Provider.of<TradingProvider>(context, listen: false);

    setState(() {
      // Mettre à jour les cryptomonnaies
      assets = assets.map((a) {
        // Récupérer le prix réel depuis TradingProvider
        final stock = tradingProvider.stocks[a.symbole];
        double price = a.price;
        double change = a.changePercent;

        if (stock != null) {
          // Utiliser le prix API réel
          price = stock.price;
          change = stock.change;
        } else {
          // Fallback: simulation plus visible si l'actif n'est pas dans TradingProvider
          final rnd = (random.nextDouble() - 0.5) * 0.01; // Augmenter la volatilité
          change = a.changePercent + rnd;
          price = max(0.0001, a.price * (1 + rnd * 0.5)); // Mouvement de prix plus visible
        }

        // Mettre à jour les données du graphique
        final newChartData = List<FlSpot>.from(a.chartData);
        newChartData.removeAt(0);
        newChartData.add(FlSpot(19, price));

        // Recalculer les indices x
        for (int i = 0; i < newChartData.length; i++) {
          newChartData[i] = FlSpot(i.toDouble(), newChartData[i].y);
        }

        return Asset(
          symbole: a.symbole,
          nom: a.nom,
          price: double.parse(price.toStringAsFixed(2)),
          changePercent: double.parse(change.toStringAsFixed(4)),
          chartData: newChartData,
          color: a.color,
          logoPath: a.logoPath,
        );
      }).toList();
    });
    
    // Les widgets Consumer<TradingProvider> se mettront automatiquement à jour
    // grâce au tradingProvider.notifyListeners() appelé plus haut
  }

  Widget _buildCryptoTab(SettingsProvider settings) {
    return Consumer<TradingProvider>(
      builder: (context, tradingProvider, child) {
        return CustomScrollView(
          slivers: [
            SliverPadding(
              padding: const EdgeInsets.all(16),
              sliver: SliverList(
                delegate: SliverChildListDelegate([
                  buildTopMovers(settings),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Text(
                        context.t('all_crypto_assets'),
                        style: TextStyle(
                          color: settings.textColor,
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: const Color(0xFF00D4AA).withValues(alpha: 0.2),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Container(
                              width: 6,
                              height: 6,
                              decoration: const BoxDecoration(
                                color: Color(0xFF00D4AA),
                                shape: BoxShape.circle,
                              ),
                            ),
                            const SizedBox(width: 4),
                            const Text(
                              'API LIVE',
                              style: TextStyle(
                                color: Color(0xFF00D4AA),
                                fontSize: 10,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                ]),
              ),
            ),
            SliverPadding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              sliver: SliverList(
                delegate: SliverChildBuilderDelegate(
                  (context, index) {
                    if (index >= assets.length) {
                      return const SizedBox(height: 100); // Espacement final
                    }
                    return AssetCard(asset: assets[index], settings: settings);
                  },
                  childCount: assets.length + 1, // +1 pour l'espacement final
                ),
              ),
            ),
          ],
        );
      },
    );
  }

  Widget _buildForexTab(SettingsProvider settings) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(32.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.trending_up,
              size: 80,
              color: settings.accentColor.withValues(alpha: 0.5),
            ),
            const SizedBox(height: 24),
            Text(
              context.t('forex_coming_soon'),
              style: TextStyle(
                color: settings.textColor,
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 16),
            Text(
              context.t('coming_soon_description'),
              style: TextStyle(
                color: settings.subtitleColor,
                fontSize: 14,
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStocksTab(SettingsProvider settings) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(32.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.bar_chart,
              size: 80,
              color: settings.accentColor.withValues(alpha: 0.5),
            ),
            const SizedBox(height: 24),
            Text(
              context.t('stocks_coming_soon'),
              style: TextStyle(
                color: settings.textColor,
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 16),
            Text(
              context.t('coming_soon_description'),
              style: TextStyle(
                color: settings.subtitleColor,
                fontSize: 14,
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  Widget buildTopMovers(SettingsProvider settings) => SizedBox(
        height: 110,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: assets
              .take(3)
              .map((a) => TopMoverCard(asset: a, settings: settings))
              .toList(),
        ),
      );

  Widget buildTopMoversForAssets(
    List<Asset> assetList,
    SettingsProvider settings,
  ) =>
      SizedBox(
        height: 110,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: assetList
              .take(3)
              .map((a) => TopMoverCard(asset: a, settings: settings))
              .toList(),
        ),
      );

  // ─── Helpers couleurs (s'adaptent dark/light) ──────────────
  Color _surface(SettingsProvider s) => s.isDarkTheme
      ? const Color(0xFF13213A)
      : Colors.white;

  Color _hairline(SettingsProvider s) => s.isDarkTheme
      ? Colors.white.withValues(alpha: 0.06)
      : Colors.black.withValues(alpha: 0.05);

  String _formatThousands(String value) {
    final buffer = StringBuffer();
    for (int i = 0; i < value.length; i++) {
      buffer.write(value[i]);
      final remaining = value.length - 1 - i;
      if (remaining > 0 && remaining % 3 == 0) buffer.write(',');
    }
    return buffer.toString();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<SettingsProvider>(
      builder: (context, settings, _) {
        final user = FirebaseService().currentUser;
        final name = user?.displayName?.trim().isNotEmpty == true
            ? user!.displayName!
            : (user?.email.split('@').first ?? 'Trader Pro');

        return Container(
          color: settings.backgroundColor,
          child: SafeArea(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 24),
              children: [
                _buildHomeTopBar(name, user?.photoURL, settings),
                const SizedBox(height: 24),
                _buildBalanceSection(settings),
                const SizedBox(height: 20),
                _buildActionButtons(settings),
                const SizedBox(height: 28),
                _buildSectionHeader('Watchlist', settings),
                const SizedBox(height: 14),
                _buildWatchlist(settings),
                const SizedBox(height: 24),
                _buildSectionHeader('Transactions', settings),
                const SizedBox(height: 14),
                _buildTransactions(settings),
              ],
            ),
          ),
        );
      },
    );
  }

  // ─── Top bar (avatar + Hello + nom + bell) ──────────────────
  Widget _buildHomeTopBar(
      String name, String? photoUrl, SettingsProvider s) {
    return Row(
      children: [
        Container(
          width: 46,
          height: 46,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: s.accentColor.withValues(alpha: 0.15),
          ),
          child: ClipOval(
            child: (photoUrl != null && photoUrl.isNotEmpty)
                ? Image.network(
                    photoUrl,
                    fit: BoxFit.cover,
                    errorBuilder: (_, __, ___) =>
                        Icon(Icons.person, color: s.accentColor, size: 26),
                  )
                : Icon(Icons.person, color: s.accentColor, size: 26),
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Text(
                    'Hello',
                    style: TextStyle(
                      color: s.subtitleColor,
                      fontSize: 13,
                    ),
                  ),
                  const SizedBox(width: 4),
                  const Text('👋', style: TextStyle(fontSize: 14)),
                ],
              ),
              const SizedBox(height: 2),
              Text(
                name,
                style: TextStyle(
                  color: s.textColor,
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                ),
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        ),
        GestureDetector(
          onTap: () => Navigator.pushNamed(context, '/notifications'),
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _surface(s),
              border: Border.all(color: _hairline(s), width: 0.6),
            ),
            child: Icon(
              Icons.notifications_none_rounded,
              color: s.textColor,
              size: 22,
            ),
          ),
        ),
      ],
    );
  }

  // ─── Balance ─────────────────────────────────────────────────
  Widget _buildBalanceSection(SettingsProvider s) {
    return Consumer<TradesProvider>(
      builder: (context, tradesProvider, _) {
        final balance = tradesProvider.balance;
        final parts = balance.toStringAsFixed(2).split('.');
        final intPart = parts[0];
        final decPart = parts[1];

        return Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Current Balance',
                    style: TextStyle(
                      color: s.subtitleColor,
                      fontSize: 14,
                    ),
                  ),
                  const SizedBox(height: 6),
                  RichText(
                    text: TextSpan(
                      style: TextStyle(
                        color: s.textColor,
                        fontSize: 32,
                        fontWeight: FontWeight.w800,
                      ),
                      children: [
                        const TextSpan(text: '\$'),
                        TextSpan(text: _formatThousands(intPart)),
                        TextSpan(
                          text: '.$decPart',
                          style: TextStyle(
                            color: s.subtitleColor,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(
                  horizontal: 14, vertical: 10),
              decoration: BoxDecoration(
                color: _surface(s),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: _hairline(s), width: 0.6),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'USD',
                    style: TextStyle(
                      color: s.textColor,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(width: 4),
                  Icon(Icons.keyboard_arrow_down,
                      color: s.subtitleColor, size: 18),
                ],
              ),
            ),
          ],
        );
      },
    );
  }

  // ─── Catégories (Crypto / Forex / Actions) ──────────────────
  // Design identique à la page "Modèles d'indicateurs".
  Widget _buildActionButtons(SettingsProvider s) {
    const labels = ['Crypto', 'Forex', 'Actions'];
    const icons = [
      Icons.currency_bitcoin,
      Icons.show_chart_rounded,
      Icons.bar_chart_rounded,
    ];

    return Column(
      children: [
        // Barre de progression bleue animée
        Container(
          height: 4,
          decoration: BoxDecoration(
            color: s.accentColor.withValues(alpha: 0.1),
            borderRadius: BorderRadius.circular(2),
          ),
          child: AnimatedAlign(
            duration: const Duration(milliseconds: 300),
            curve: Curves.easeInOut,
            alignment: Alignment(
              -1.0 + (2.0 * _selectedCategory / (labels.length - 1)),
              0,
            ),
            child: FractionallySizedBox(
              widthFactor: 1 / labels.length,
              child: Container(
                height: 4,
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      s.accentColor,
                      s.accentColor.withValues(alpha: 0.8),
                    ],
                  ),
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 12),
        // Pills horizontaux
        SizedBox(
          height: 40,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: labels.length,
            separatorBuilder: (_, __) => const SizedBox(width: 10),
            itemBuilder: (context, index) {
              final isSelected = _selectedCategory == index;
              return GestureDetector(
                onTap: () => setState(() => _selectedCategory = index),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeInOut,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 8,
                  ),
                  decoration: BoxDecoration(
                    gradient: isSelected
                        ? LinearGradient(
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                            colors: [
                              s.accentColor.withValues(alpha: 0.2),
                              s.accentColor.withValues(alpha: 0.1),
                            ],
                          )
                        : null,
                    color: isSelected ? null : Colors.transparent,
                    borderRadius: BorderRadius.circular(25),
                    border: Border.all(
                      color: isSelected
                          ? s.accentColor
                          : s.subtitleColor.withValues(alpha: 0.2),
                      width: isSelected ? 2 : 1,
                    ),
                  ),
                  child: Center(
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          icons[index],
                          size: 16,
                          color: isSelected
                              ? s.accentColor
                              : s.subtitleColor,
                        ),
                        const SizedBox(width: 6),
                        Text(
                          labels[index],
                          style: TextStyle(
                            color: isSelected
                                ? s.accentColor
                                : s.subtitleColor,
                            fontWeight: isSelected
                                ? FontWeight.bold
                                : FontWeight.w500,
                            fontSize: 13,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  // ─── Section header ──────────────────────────────────────────
  Widget _buildSectionHeader(String title, SettingsProvider s) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          title,
          style: TextStyle(
            color: s.textColor,
            fontSize: 18,
            fontWeight: FontWeight.w700,
          ),
        ),
        Text(
          'See All',
          style: TextStyle(
            color: s.subtitleColor,
            fontSize: 13,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }

  // ─── Watchlist (grille 2 colonnes verticale avec ombre) ────
  Widget _buildWatchlist(SettingsProvider s) {
    // Pour l'instant, seul Crypto a des données réelles.
    if (_selectedCategory != 0) {
      return Container(
        padding: const EdgeInsets.all(28),
        decoration: BoxDecoration(
          color: _surface(s),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: _hairline(s), width: 0.6),
        ),
        child: Center(
          child: Text(
            _selectedCategory == 1
                ? 'Forex - bientôt disponible'
                : 'Actions - bientôt disponible',
            style: TextStyle(color: s.subtitleColor),
          ),
        ),
      );
    }

    final items = assets.take(8).toList();
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: items.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 14,
        crossAxisSpacing: 14,
        childAspectRatio: 0.95,
      ),
      itemBuilder: (_, i) => _buildWatchCard(items[i], s),
    );
  }

  Widget _buildWatchCard(Asset asset, SettingsProvider s) {
    final isUp = asset.changePercent >= 0;
    return GestureDetector(
      onTap: () => Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => TradingScreen(selectedAsset: asset.symbole),
        ),
      ),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: _surface(s),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: _hairline(s), width: 0.6),
          boxShadow: [
            BoxShadow(
              color: s.isDarkTheme
                  ? Colors.black.withValues(alpha: 0.35)
                  : Colors.black.withValues(alpha: 0.06),
              blurRadius: 16,
              offset: const Offset(0, 6),
              spreadRadius: 0,
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        asset.symbole,
                        style: TextStyle(
                          color: s.textColor,
                          fontSize: 16,
                          fontWeight: FontWeight.w700,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                      Text(
                        asset.nom,
                        style: TextStyle(
                          color: s.subtitleColor,
                          fontSize: 12,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
                AssetLogoWidget(
                  logoPath: asset.logoPath,
                  symbol: asset.symbole,
                  type: _HomePageState._getAssetTypeFromSymbol(
                      asset.symbole),
                  size: 28,
                ),
              ],
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 40,
              child: LineChart(
                LineChartData(
                  lineTouchData: const LineTouchData(enabled: false),
                  gridData: const FlGridData(show: false),
                  titlesData: const FlTitlesData(show: false),
                  borderData: FlBorderData(show: false),
                  lineBarsData: [
                    LineChartBarData(
                      spots: asset.chartData,
                      isCurved: true,
                      color: isUp ? const Color(0xFF089981) : const Color(0xFFF23645),
                      barWidth: 2,
                      dotData: const FlDotData(show: false),
                      belowBarData: BarAreaData(
                        show: true,
                        gradient: LinearGradient(
                          colors: [
                            (isUp ? const Color(0xFF089981) : const Color(0xFFF23645)).withValues(alpha: 0.4),
                            (isUp ? const Color(0xFF089981) : const Color(0xFFF23645)).withValues(alpha: 0.0),
                          ],
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              '${isUp ? '+' : ''}${(asset.changePercent * 100).toStringAsFixed(2)}%',
              style: TextStyle(
                color: isUp ? const Color(0xFF089981) : const Color(0xFFF23645),
                fontWeight: FontWeight.w700,
                fontSize: 12,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              _HomePageState._formatPriceForDisplay(
                  asset.symbole, asset.price),
              style: TextStyle(
                color: s.textColor,
                fontWeight: FontWeight.w700,
                fontSize: 14,
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ─── Transactions ────────────────────────────────────────────
  Widget _buildTransactions(SettingsProvider s) {
    return Consumer<TradesProvider>(
      builder: (context, tradesProvider, _) {
        final trades = tradesProvider.trades.reversed.take(5).toList();
        if (trades.isEmpty) {
          return Container(
            padding: const EdgeInsets.all(24),
            decoration: BoxDecoration(
              color: _surface(s),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: _hairline(s), width: 0.6),
            ),
            child: Center(
              child: Text(
                'No transactions yet',
                style: TextStyle(color: s.subtitleColor),
              ),
            ),
          );
        }
        return Column(
          children:
              trades.map((t) => _buildTransactionTile(t, s)).toList(),
        );
      },
    );
  }

  Widget _buildTransactionTile(Trade trade, SettingsProvider s) {
    final pnl = trade.profitLoss;
    final isUp = pnl >= 0;

    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    final dt = trade.entryTime;
    final dateStr =
        '${dt.day.toString().padLeft(2, '0')} ${months[dt.month - 1]} ${dt.year}';

    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: _surface(s),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _hairline(s), width: 0.6),
      ),
      child: Row(
        children: [
          Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: s.accentColor.withValues(alpha: 0.15),
            ),
            child: Icon(
              trade.action == 'buy'
                  ? Icons.arrow_upward
                  : Icons.arrow_downward,
              color: s.accentColor,
              size: 20,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  trade.symbol,
                  style: TextStyle(
                    color: s.textColor,
                    fontSize: 15,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  dateStr,
                  style: TextStyle(
                    color: s.subtitleColor,
                    fontSize: 12,
                  ),
                ),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                trade.quantity.toStringAsFixed(3),
                style: TextStyle(
                  color: s.textColor,
                  fontWeight: FontWeight.w700,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                '${isUp ? '+' : ''}\$${pnl.toStringAsFixed(2)}',
                style: TextStyle(
                  color: isUp ? const Color(0xFF089981) : const Color(0xFFF23645),
                  fontWeight: FontWeight.w600,
                  fontSize: 12,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class TopMoverCard extends StatelessWidget {
  final Asset asset;
  final SettingsProvider settings;
  const TopMoverCard({super.key, required this.asset, required this.settings});

  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: () {
          // Navigation vers TradingScreen avec l'asset sélectionné
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => TradingScreen(selectedAsset: asset.symbole),
            ),
          );
        },
        child: Container(
          width: 140,
          margin: const EdgeInsets.only(right: 12),
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: settings.cardColor,
            borderRadius: BorderRadius.circular(12),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.1),
                offset: const Offset(0, 4),
                blurRadius: 12,
                spreadRadius: 0,
              ),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  AssetLogoWidget(
                    logoPath: asset.logoPath,
                    symbol: asset.symbole,
                    type: _HomePageState._getAssetTypeFromSymbol(
                        asset.symbole),
                    size: 24,
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      asset.symbole,
                      style: TextStyle(
                        color: settings.textColor,
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
              Text(
                _HomePageState._formatPriceForDisplay(asset.symbole, asset.price),
                style: TextStyle(color: settings.textColor, fontSize: 14),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                decoration: BoxDecoration(
                  color: asset.changePercent >= 0
                      ? const Color(0xFF089981).withValues(alpha: 0.2)
                      : const Color(0xFFF23645).withValues(alpha: 0.2),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text(
                  "${(asset.changePercent * 100).toStringAsFixed(2)}%",
                  style: TextStyle(
                    color: asset.changePercent >= 0 ? const Color(0xFF089981) : const Color(0xFFF23645),
                    fontSize: 12,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
        ),
      );
}

class AssetCard extends StatelessWidget {
  final Asset asset;
  final SettingsProvider settings;
  const AssetCard({super.key, required this.asset, required this.settings});

  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: () {
          // Navigation vers TradingScreen avec l'asset sélectionné
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => TradingScreen(selectedAsset: asset.symbole),
            ),
          );
        },
        child: Container(
          margin: const EdgeInsets.symmetric(vertical: 6),
          decoration: BoxDecoration(
            color: settings.cardColor,
            borderRadius: BorderRadius.circular(12),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.08),
                offset: const Offset(0, 2),
                blurRadius: 8,
                spreadRadius: 0,
              ),
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.04),
                offset: const Offset(0, 4),
                blurRadius: 16,
                spreadRadius: 0,
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                // Logo de la cryptomonnaie
                AssetLogoWidget(
                  logoPath: asset.logoPath,
                  size: 32,
                  symbol: asset.symbole,
                  type: _HomePageState._getAssetTypeFromSymbol(
                      asset.symbole),
                ),
                const SizedBox(width: 12),

                // Informations de l'asset (nom et symbole)
                Expanded(
                  flex: 3,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        asset.symbole,
                        style: TextStyle(
                          color: settings.textColor,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        asset.nom,
                        style: TextStyle(
                            color: settings.subtitleColor, fontSize: 14),
                      ),
                    ],
                  ),
                ),

                // Prix et pourcentage
                Expanded(
                  flex: 2,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        _HomePageState._formatPriceForDisplay(asset.symbole, asset.price),
                        style: TextStyle(
                          color: settings.textColor,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 8,
                          vertical: 2,
                        ),
                        decoration: BoxDecoration(
                          color: asset.changePercent >= 0
                              ? const Color(0xFF089981).withValues(alpha: 0.2)
                              : const Color(0xFFF23645).withValues(alpha: 0.2),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Text(
                          "${(asset.changePercent * 100).toStringAsFixed(2)}%",
                          style: TextStyle(
                            color: asset.changePercent >= 0
                                ? const Color(0xFF089981)
                                : const Color(0xFFF23645),
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      );
}

/// Peintre pour les particules flottantes
class FloatingParticlesPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.fill
      ..strokeWidth = 1.0;

    final random = Random(42); // Seed fixe pour des particules cohérentes

    // Dessiner des particules aléatoires
    for (int i = 0; i < 20; i++) {
      final x = random.nextDouble() * size.width;
      final y = random.nextDouble() * size.height;
      final radius = random.nextDouble() * 3 + 1;

      // Couleurs variées
      final colors = [
        const Color(0xFF5CB3FF),
        const Color(0xFF9C27B0),
        const Color(0xFFFFD93D),
        const Color(0xFF4CAF50),
      ];

      paint.color = colors[i % colors.length].withValues(alpha: 0.3);
      canvas.drawCircle(Offset(x, y), radius, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
