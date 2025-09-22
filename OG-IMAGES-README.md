# Images Open Graph (OG) - US Précigné

## 🎯 Images dynamiques avec votre logo SVG

**Bonne nouvelle !** Les images OG sont maintenant générées automatiquement avec votre logo SVG existant. Plus besoin de créer d'images statiques !

### ✅ Images automatiques

- **Page d'accueil** : Logo SVG + "Association Omnisports" + tous les sports
- **Pages sports** : Logo SVG + nom du sport + description
- **Page actualités** : Logo SVG + "Actualités" + éléments visuels

### 🚀 Avantages

- **Cohérence** : Utilise exactement votre logo SVG
- **Automatique** : Se génère à chaque partage
- **Toujours à jour** : Pas de maintenance d'images
- **Qualité** : Vectoriel, parfait à toutes les tailles

## 🎨 Design des images

### Couleurs utilisées

- **Principal** : Rouge #dc2626 (couleur de l'association)
- **Secondaire** : Noir #000000 (logo)
- **Fond** : Blanc #ffffff avec dégradé gris clair
- **Texte** : Gris foncé #1f2937

### Éléments inclus

1. **Logo US Précigné** (version SVG simplifiée)
2. **Nom de l'association** : "US Précigné"
3. **Sous-titre** : "Association Omnisports" ou "Actualités" ou nom du sport
4. **Description** : Texte court et accrocheur
5. **URL** : "usprecigne.fr" en bas à droite

## 🚀 Images dynamiques

Les images dynamiques sont configurées et se génèrent automatiquement :

- **Page d'accueil** : `/og/opengraph-image.tsx`
- **Pages sports** : `/sports/[slug]/opengraph-image.tsx`
- **Page actualités** : `/actualites/opengraph-image.tsx`

## 📱 Test des aperçus

### Outils de test

1. **Facebook** : https://developers.facebook.com/tools/debug/
2. **Twitter** : https://cards-dev.twitter.com/validator
3. **LinkedIn** : https://www.linkedin.com/post-inspector/
4. **WhatsApp** : Partagez le lien dans une conversation

### URLs à tester

- https://usprecigne.fr
- https://usprecigne.fr/sports/football
- https://usprecigne.fr/sports/gym
- https://usprecigne.fr/sports/judo
- https://usprecigne.fr/sports/tennis
- https://usprecigne.fr/sports/yoga
- https://usprecigne.fr/actualites

## ✅ Checklist

- [x] Images OG dynamiques configurées
- [x] Logo SVG intégré dans toutes les images
- [x] Métadonnées Open Graph complètes
- [x] Configuration Twitter Cards
- [ ] Tester sur Facebook Debugger
- [ ] Tester sur Twitter Card Validator
- [ ] Tester sur LinkedIn Post Inspector
- [ ] Tester le partage WhatsApp
- [ ] Vérifier sur mobile et desktop

## 🔧 Configuration technique

Les métadonnées sont configurées dans :

- `src/app/layout.tsx` - Métadonnées globales
- `src/app/sports/[slug]/page.tsx` - Métadonnées pages sports
- `src/app/actualites/page.tsx` - Métadonnées actualités
- `src/lib/metadata.ts` - Configuration centralisée

## 📊 Résultats attendus

Quand vous partagerez un lien, vous verrez :

- **Titre** : "Nom de la page - US Précigné"
- **Description** : Texte descriptif de la page
- **Image** : Image OG avec votre logo SVG (1200x630)
- **URL** : Lien vers la page
- **Site** : "US Précigné"

Cela fonctionnera sur :

- ✅ Facebook
- ✅ Instagram
- ✅ Twitter/X
- ✅ LinkedIn
- ✅ WhatsApp
- ✅ Telegram
- ✅ Discord
- ✅ Slack

## 🎉 Avantages de cette approche

1. **Cohérence visuelle** : Même logo partout
2. **Maintenance zéro** : Pas d'images à gérer
3. **Qualité parfaite** : Vectoriel, net à toutes les tailles
4. **Personnalisation** : Chaque page a son contenu spécifique
5. **Performance** : Génération à la volée, pas de stockage
