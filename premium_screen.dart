import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'app_settings.dart';
import 'services/paypal_service.dart';
import 'widgets/localized_text.dart';

class PlanFeature {
  final String text;
  final bool included;
  PlanFeature({required this.text, required this.included});
}

class PlanModel {
  final String name;
  final String price;
  final String savings;
  final List<PlanFeature> features;

  PlanModel({
    required this.name,
    required this.price,
    required this.savings,
    required this.features,
  });
}

class FeatureComparison {
  final String name;
  final String info;
  final List<dynamic> eq;

  FeatureComparison({
    required this.name,
    required this.info,
    required this.eq,
  });
}

class FeatureCategory {
  final String title;
  final List<FeatureComparison> features;

  FeatureCategory({
    required this.title,
    required this.features,
  });
}

// Données des plans
final List<PlanModel> planData = [
  PlanModel(
    name: 'Essentiel',
    price: '12,95 \$',
    savings: '24 \$',
    features: [
      PlanFeature(text: '2 graphiques par onglet', included: true),
      PlanFeature(text: '5 indicateurs par graphique', included: true),
      PlanFeature(text: '10 000 bars historiques', included: true),
      PlanFeature(text: '10 connexions parallèles sur les graphiques', included: true),
      PlanFeature(text: '20 alertes de prix', included: true),
      PlanFeature(text: '20 alertes techniques', included: true),
      PlanFeature(text: '0 alertes de liste de surveillance', included: false),
      PlanFeature(text: 'Applications Web, de bureau et mobiles', included: true),
      PlanFeature(text: 'Pas de publicités', included: true),
    ],
  ),
  PlanModel(
    name: 'Plus',
    price: '29,95 \$',
    savings: '60 \$',
    features: [
      PlanFeature(text: '4 graphiques par onglet', included: true),
      PlanFeature(text: '10 indicateurs par graphique', included: true),
      PlanFeature(text: '10 000 bars historiques', included: true),
      PlanFeature(text: '20 connexions parallèles sur les graphiques', included: true),
      PlanFeature(text: '100 alertes de prix', included: true),
      PlanFeature(text: '100 alertes techniques', included: true),
      PlanFeature(text: '0 alertes de liste de surveillance', included: false),
      PlanFeature(text: 'Applications Web, de bureau et mobiles', included: true),
      PlanFeature(text: 'Pas de publicités', included: true),
    ],
  ),
  PlanModel(
    name: 'Prime',
    price: '59,95 \$',
    savings: '120 \$',
    features: [
      PlanFeature(text: '8 graphiques par onglet', included: true),
      PlanFeature(text: '25 indicateurs par graphique', included: true),
      PlanFeature(text: '20 000 bars historiques', included: true),
      PlanFeature(text: '50 connexions parallèles sur les graphiques', included: true),
      PlanFeature(text: '400 alertes de prix', included: true),
      PlanFeature(text: '400 alertes techniques', included: true),
      PlanFeature(text: '2 alertes de liste de surveillance', included: true),
      PlanFeature(text: 'Applications Web, de bureau et mobiles', included: true),
      PlanFeature(text: 'Pas de publicités', included: true),
    ],
  ),
  PlanModel(
    name: 'Ultime',
    price: '199,95 \$',
    savings: '480 \$',
    features: [
      PlanFeature(text: '16 graphiques par onglet', included: true),
      PlanFeature(text: '50 indicateurs par graphique', included: true),
      PlanFeature(text: 'bars historiques de 40 000', included: true),
      PlanFeature(text: '200 connexions parallèles sur les graphiques', included: true),
      PlanFeature(text: '1 000 alertes de prix', included: true),
      PlanFeature(text: '1 000 alertes techniques', included: true),
      PlanFeature(text: '15 alertes de liste de surveillance', included: true),
      PlanFeature(text: 'Applications Web, de bureau et mobiles', included: true),
      PlanFeature(text: 'Pas de publicités', included: true),
    ],
  ),
];

final List<FeatureCategory> featureCategories = [
  FeatureCategory(
    title: "Charts",
    features: [
      FeatureComparison(name: "Charts per tab", info: "", eq: ["2", "4", "8", "16"]),
      FeatureComparison(name: "Indicators per chart", info: "", eq: ["5", "10", "25", "50"]),
      FeatureComparison(name: "Historical bars", info: "", eq: ["10K", "10K", "20K", "40K"]),
      FeatureComparison(name: "Parallel chart connections", info: "", eq: [false, "20", "50", "200"]),
    ],
  ),
  FeatureCategory(
    title: "Alerts",
    features: [
      FeatureComparison(name: "Price alerts", info: "", eq: ["20", "100", "400", "1,000"]),
      FeatureComparison(name: "Technical alerts", info: "", eq: ["20", "100", "400", "1,000"]),
      FeatureComparison(name: "Alerts that don't expire", info: "", eq: [false, false, true, true]),
    ],
  ),
  FeatureCategory(
    title: "Data and features",
    features: [
      FeatureComparison(name: "Web, desktop and mobile apps", info: "", eq: [true, true, true, true]),
      FeatureComparison(name: "No ads", info: "", eq: [true, true, true, true]),
      FeatureComparison(name: "Volume profile", info: "", eq: [true, true, true, true]),
      FeatureComparison(name: "Custom timeframes", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Custom Range Bars", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Multiple watchlists", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Bar Replay", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Indicators on indicators", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Chart data export", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Intraday Renko, Kagi, Line Break", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Charts based on custom formulas", info: "", eq: [false, true, true, true]),
      FeatureComparison(name: "Time price opportunity", info: "", eq: [false, false, true, true]),
      FeatureComparison(name: "Auto chart patterns", info: "", eq: [false, false, true, true]),
      FeatureComparison(name: "Publishing invite-only scripts", info: "", eq: [false, false, false, true]),
      FeatureComparison(name: "Second-based intervals", info: "", eq: [false, false, false, true]),
    ],
  ),
];

class PremiumScreen extends StatefulWidget {
  const PremiumScreen({Key? key}) : super(key: key);

  @override
  State<PremiumScreen> createState() => _PremiumScreenState();
}

class _PremiumScreenState extends State<PremiumScreen> {
  bool isAnnual = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0B0E14),
      body: Stack(
        children: [
          // Arrière-plan stylisé
          Positioned.fill(
            child: Opacity(
              opacity: 0.6,
              child: Image.network(
                'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=3000',
                fit: BoxFit.cover,
              ),
            ),
          ),
          Positioned.fill(
            child: Container(
              color: const Color(0xFF050508).withOpacity(0.8),
            ),
          ),
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [
                    const Color(0xFF0A0A0F).withOpacity(0.9),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),

          // Contenu principal
          CustomScrollView(
            slivers: [
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.only(top: 100.0, left: 24, right: 24, bottom: 40),
                  child: Column(
                    children: [
                      // Toggle Switch
                      Wrap(
                        alignment: WrapAlignment.center,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        spacing: 24,
                        runSpacing: 16,
                        children: [
                          GestureDetector(
                            onTap: () => setState(() => isAnnual = false),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Container(
                                  width: 16,
                                  height: 16,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    border: Border.all(color: !isAnnual ? Colors.white : Colors.grey),
                                    color: !isAnnual ? Colors.white : Colors.transparent,
                                  ),
                                  child: !isAnnual
                                      ? Center(child: Container(width: 6, height: 6, decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.black)))
                                      : null,
                                ),
                                const SizedBox(width: 8),
                                Text(
                                  "Mensuel",
                                  style: TextStyle(
                                    color: !isAnnual ? Colors.white : Colors.grey,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          GestureDetector(
                            onTap: () => setState(() => isAnnual = true),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Container(
                                  width: 16,
                                  height: 16,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    border: Border.all(color: isAnnual ? Colors.white : Colors.grey),
                                    color: isAnnual ? Colors.white : Colors.transparent,
                                  ),
                                  child: isAnnual
                                      ? Center(child: Container(width: 6, height: 6, decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.black)))
                                      : null,
                                ),
                                const SizedBox(width: 8),
                                Text(
                                  "Annuellement",
                                  style: TextStyle(
                                    color: isAnnual ? Colors.white : Colors.grey,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: Colors.white.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(6),
                              border: Border.all(color: Colors.white.withOpacity(0.05)),
                            ),
                            child: const Text(
                              "Économisez jusqu'à 17% 🤩",
                              style: TextStyle(color: Colors.white, fontSize: 13),
                            ),
                          ),
                        ],
                      ),

                      const SizedBox(height: 32),

                      // Cartes de prix (Scrollable horizontalement sur mobile)
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Container(
                          decoration: BoxDecoration(
                            gradient: const LinearGradient(
                              colors: [Color(0xFF00D2FF), Color(0xFF9B51E0), Color(0xFFF500A2)],
                            ),
                            borderRadius: BorderRadius.circular(24),
                          ),
                          padding: const EdgeInsets.all(1.5),
                          child: Container(
                            decoration: BoxDecoration(
                              color: const Color(0xFF050508),
                              borderRadius: BorderRadius.circular(22.5),
                            ),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: List.generate(planData.length, (i) {
                                final plan = planData[i];
                                final gradients = [
                                  const Color(0xFF00D2FF),
                                  const Color(0xFF3A7BD5),
                                  const Color(0xFF9B51E0),
                                  const Color(0xFFF500A2)
                                ];
                                
                                return Container(
                                  width: 320,
                                  decoration: BoxDecoration(
                                    border: i != planData.length - 1
                                        ? Border(right: BorderSide(color: Colors.white.withOpacity(0.1)))
                                        : null,
                                  ),
                                  child: Stack(
                                    children: [
                                      Positioned(
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 250,
                                        child: Container(
                                          decoration: BoxDecoration(
                                            gradient: LinearGradient(
                                              begin: Alignment.topCenter,
                                              end: Alignment.bottomCenter,
                                              colors: [
                                                gradients[i].withOpacity(0.2),
                                                Colors.transparent,
                                              ],
                                            ),
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.all(24.0),
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              plan.name,
                                              style: const TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.bold),
                                            ),
                                            const SizedBox(height: 24),
                                            Row(
                                              crossAxisAlignment: CrossAxisAlignment.start,
                                              children: [
                                                Text(
                                                  plan.price,
                                                  style: const TextStyle(color: Colors.white, fontSize: 40, fontWeight: FontWeight.bold, height: 1),
                                                ),
                                                Padding(
                                                  padding: const EdgeInsets.only(left: 4, top: 4),
                                                  child: Column(
                                                    crossAxisAlignment: CrossAxisAlignment.start,
                                                    children: const [
                                                      Text("/", style: TextStyle(color: Colors.grey, fontSize: 13, height: 1)),
                                                      Text("mois", style: TextStyle(color: Colors.grey, fontSize: 13, height: 1)),
                                                    ],
                                                  ),
                                                )
                                              ],
                                            ),
                                            const SizedBox(height: 8),
                                            const Text(
                                              "facturé annuellement",
                                              style: TextStyle(color: Colors.grey, fontSize: 12, fontWeight: FontWeight.w500),
                                            ),
                                            const SizedBox(height: 16),
                                            Row(
                                              children: [
                                                Text(
                                                  "Économisez ${plan.savings} une année ",
                                                  style: const TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.w500),
                                                ),
                                                const Icon(Icons.info_outline, color: Colors.grey, size: 14),
                                              ],
                                            ),
                                            const SizedBox(height: 32),
                                            ElevatedButton(
                                              onPressed: () {},
                                              style: ElevatedButton.styleFrom(
                                                backgroundColor: Colors.white,
                                                foregroundColor: Colors.black,
                                                minimumSize: const Size(double.infinity, 48),
                                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
                                              ),
                                              child: const Text(
                                                "Essayez gratuitement pendant 7...",
                                                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14.5),
                                              ),
                                            ),
                                            const SizedBox(height: 12),
                                            RichText(
                                              textAlign: TextAlign.center,
                                              text: const TextSpan(
                                                style: TextStyle(color: Colors.grey, fontSize: 11),
                                                children: [
                                                  TextSpan(text: "ou passez l'essai gratuit et "),
                                                  TextSpan(text: "payez maintenant", style: TextStyle(color: Colors.blue)),
                                                ],
                                              ),
                                            ),
                                            const SizedBox(height: 32),
                                            ...plan.features.map((feature) {
                                              return Padding(
                                                padding: const EdgeInsets.only(bottom: 16.0),
                                                child: Row(
                                                  crossAxisAlignment: CrossAxisAlignment.start,
                                                  children: [
                                                    feature.included
                                                        ? const Icon(Icons.check, color: Colors.white, size: 16)
                                                        : const Icon(Icons.close, color: Colors.grey, size: 16),
                                                    const SizedBox(width: 12),
                                                    Expanded(
                                                      child: Container(
                                                        decoration: BoxDecoration(
                                                          border: Border(
                                                            bottom: BorderSide(
                                                              color: feature.included ? Colors.grey.shade400 : Colors.grey.shade800,
                                                            ),
                                                          ),
                                                        ),
                                                        padding: const EdgeInsets.only(bottom: 6),
                                                        child: Text(
                                                          feature.text,
                                                          style: TextStyle(
                                                            color: feature.included ? Colors.white : Colors.grey.shade600,
                                                            fontSize: 13,
                                                            height: 1.2,
                                                          ),
                                                        ),
                                                      ),
                                                    )
                                                  ],
                                                ),
                                              );
                                            }).toList(),
                                          ],
                                        ),
                                      ),
                                    ],
                                  ),
                                );
                              }),
                            ),
                          ),
                        ),
                      ),
                      
                      const SizedBox(height: 32),

                      // Notes de bas de page
                      const Text(
                        "1. TradingView, Inc. est enregistrée à la taxe de vente dans certains pays. Par conséquent, selon votre lieu de résidence, une taxe de vente pourrait être ajoutée à votre facture finale.",
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.grey, fontSize: 12),
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        "2. Seul l'abonnement Ultimate est réservé aux utilisateurs professionnels. Découvrez qui est considéré comme professionnel.",
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.grey, fontSize: 12),
                      ),

                      const SizedBox(height: 60),

                      // Tableau de comparaison (Scrollable)
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Container(
                          width: 850, 
                          decoration: BoxDecoration(
                            color: Colors.black.withOpacity(0.4),
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(color: Colors.white.withOpacity(0.05)),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              // En-tête du tableau
                              Container(
                                decoration: BoxDecoration(
                                  color: Colors.black.withOpacity(0.8),
                                  border: Border(bottom: BorderSide(color: Colors.grey.withOpacity(0.3))),
                                ),
                                padding: const EdgeInsets.all(24),
                                child: Row(
                                  children: [
                                    const Expanded(child: SizedBox()), 
                                    ...List.generate(planData.length, (i) {
                                      final plan = planData[i];
                                      final isPlus = i == 1;
                                      return Expanded(
                                        child: Column(
                                          children: [
                                            Text(
                                              plan.name,
                                              style: TextStyle(
                                                fontSize: 17,
                                                fontWeight: FontWeight.bold,
                                                color: isPlus ? Colors.blue : Colors.white,
                                              ),
                                            ),
                                            const SizedBox(height: 16),
                                            Container(
                                              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                                              decoration: BoxDecoration(
                                                color: isPlus ? Colors.blue : Colors.transparent,
                                                borderRadius: BorderRadius.circular(100),
                                                border: Border.all(color: isPlus ? Colors.blue : Colors.white.withOpacity(0.2)),
                                              ),
                                              child: const Text(
                                                "Try free for 7 days",
                                                style: TextStyle(fontSize: 13, color: Colors.white, fontWeight: FontWeight.bold),
                                                textAlign: TextAlign.center,
                                              ),
                                            )
                                          ],
                                        ),
                                      );
                                    }),
                                  ],
                                ),
                              ),
                              
                              // Détail des catégories
                              ...featureCategories.map((category) {
                                return Padding(
                                  padding: const EdgeInsets.only(top: 24, bottom: 16),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.only(left: 40, bottom: 24),
                                        child: Text(
                                          category.title,
                                          style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                      Container(
                                        decoration: BoxDecoration(
                                          border: Border(top: BorderSide(color: Colors.grey.withOpacity(0.3))),
                                        ),
                                        child: Column(
                                          children: category.features.map((feature) {
                                            return Container(
                                              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
                                              decoration: BoxDecoration(
                                                border: Border(bottom: BorderSide(color: Colors.grey.withOpacity(0.3))),
                                              ),
                                              child: Row(
                                                children: [
                                                  Expanded(
                                                    child: Text(
                                                      feature.name,
                                                      style: const TextStyle(color: Colors.grey, fontSize: 14, fontWeight: FontWeight.w500),
                                                    ),
                                                  ),
                                                  ...feature.eq.map((val) {
                                                    return Expanded(
                                                      child: Center(
                                                        child: val is bool
                                                          ? Icon(
                                                              val ? Icons.check : Icons.close,
                                                              color: val ? Colors.white : Colors.grey,
                                                              size: 18,
                                                            )
                                                          : Text(
                                                              val.toString(),
                                                              style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.bold),
                                                            ),
                                                      ),
                                                    );
                                                  }).toList()
                                                ],
                                              ),
                                            );
                                          }).toList(),
                                        ),
                                      )
                                    ],
                                  ),
                                );
                              }).toList(),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
