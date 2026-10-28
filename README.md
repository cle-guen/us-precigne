# Union Sportive de Précigné

Site informatif statique : accueil, actualités, mentions légales et cinq sections sportives. Les textes sont dans `src/data` ; les images et PDF sont dans `public`.

## Installation et vérification

Utiliser Node 24 LTS et pnpm 12.15.0, fixé par `packageManager`. Installer avec `pnpm install --frozen-lockfile` et démarrer avec `pnpm dev`. Après compilation, `pnpm start` sert l’export en local sur http://localhost:3000 ; aucun serveur n’est ajouté au site publié.

- `pnpm typecheck` : vérification TypeScript.
- `pnpm lint` : ESLint et règles Next.js, sans avertissement accepté.
- `pnpm format:check` : formatage du projet.
- `pnpm test` : traitement du texte, médias locaux et comportement des fenêtres.
- `pnpm build` : compilation et export dans `out/`.
- `pnpm check:export` : pages attendues, liens et ressources locales de l’export.

Le projet utilise uniquement `pnpm-lock.yaml`. Ne pas ajouter de verrou npm parallèle.

## Versions des outils

Next.js et React sont mis à jour vers leurs versions stables vérifiées le 28 octobre 2026. TypeScript 6.0.3 est conservé pour l’API attendue par typescript-eslint et le plugin Prettier ; TypeScript 7 n’est pas encore pris en charge par ce linter. ESLint 10 est utilisé, car ESLint 9 est en fin de support. Trois exceptions de contraintes de pairs, limitées aux plugins import/jsx-a11y/react, sont documentées dans `pnpm-workspace.yaml` : leurs contraintes déclarées s’arrêtent encore à ESLint 9, mais les règles configurées passent sur ce projet sous ESLint 10. Retirer ces exceptions lorsque les paquets amont déclarent cette compatibilité.

Les versions corrigées de quatre dépendances indirectes sont fixées dans le même fichier pour éviter les alertes connues. Les scripts de dépendances autorisés sont limités aux outils natifs nécessaires ; aucune autorisation globale n’est donnée.

## Hébergement et consommation

`output: 'export'` est conservé : aucune base Neon, aucun compte administrateur, aucune API applicative et aucun serveur Next.js nécessaire pour consulter le site. Les changements éditoriaux nécessitent une nouvelle compilation. Vercel était l’hébergeur public observé pendant l’audit.

`vercel.json` définit les en-têtes de sécurité pour Vercel, car `headers()` de Next.js n’est pas appliqué à un export statique. Si l’hébergement change, configurer ces en-têtes chez le nouvel hébergeur. Les images restent non optimisées côté serveur ; les AVIF/WebP locaux évitent une fonction de transformation à chaque consultation. Vercel Speed Insights est conservé : ses mesures techniques de performance doivent être décrites de manière cohérente dans les informations de confidentialité du site.

`NEXT_PUBLIC_BASE_URL` permet de définir le domaine des URL canoniques et du sitemap ; sa valeur est publique et doit être fixée avant la compilation. Par défaut : https://www.unionsportiveprecigne.com.

## Contenus à confirmer par l’association

Les documents tennis portent encore la saison 2025/2026. Plusieurs annonces concernent 2022, 2023 et 2025, ainsi que le forum de septembre 2026 déjà passé au moment de l’audit. Certains textes sportifs citent des responsables et des effectifs anciens. Aucun tarif, horaire, responsable ni document récent n’a été inventé ou remplacé automatiquement. Faire valider les nouvelles informations par l’association avant de les publier.

## Publication

Les contrôles GitHub s’exécuteront après le prochain push. Relire les changements locaux, effectuer soi-même le commit et le push, puis vérifier le statut du déploiement Vercel et les pages publiques. Rien n’est publié automatiquement depuis les scripts de contrôle du projet.
