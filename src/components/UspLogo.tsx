// UspLogo.tsx
export default function UspLogo({ className = '' }: { className?: string }) {
  // Gabarit demandé
  const W = 80 // largeur ~80
  const H = 120 // hauteur ~120
  const BANNER_H = H * (1 / 5) // 1/5 -> 24
  const MID_H = H * (3 / 5) // 3/5 -> 72
  const BOTTOM_H = H * (1 / 5) // 1/5 -> 24
  const CONTENT_TOP = BANNER_H // début des bandes
  const BOTTOM_START_Y = BANNER_H + MID_H // 24 + 72 = 96

  // Bandes 1:3:1 (7 slots égaux, 3 rouges aux positions 1,3,5)
  const SLOTS = 7
  const SLOT_W = W / SLOTS

  // Texte: même largeur visuelle pour les 2 lignes
  const TEXT_PAD = 6 // marge interne dans le bandeau
  const TEXT_WIDTH = W - TEXT_PAD * 2

  // --- FORME BLASON : côtés droits -> large arrondi en bas (sans pointe) ---
  // Symétrique, “épaules” verticales jusqu'à y=96, puis 2 courbes vers le bas arrondi (y max = 120)
  const SHIELD_PATH = `
      M 0 0
      H ${W}
      V ${BOTTOM_START_Y}
      C ${W} ${H - BOTTOM_H * 0.5}, ${W - 18} ${H}, ${W / 2} ${H}
      C ${18} ${H}, 0 ${H - BOTTOM_H * 0.5}, 0 ${BOTTOM_START_Y}
      Z
    `

  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${H + 4}`}
      className={className}
      aria-hidden="true"
      role="img"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="clip-shield">
          <path d={SHIELD_PATH} />
        </clipPath>
      </defs>

      {/* Corps du blason */}
      <path d={SHIELD_PATH} fill="#000" />

      {/* Bandes rouges (mêmes largeurs que les noires), découpées par le blason */}
      <g clipPath="url(#clip-shield)">
        <rect
          x={SLOT_W * 1}
          y={CONTENT_TOP}
          width={SLOT_W}
          height={H}
          fill="#d00"
        />
        <rect
          x={SLOT_W * 3}
          y={CONTENT_TOP}
          width={SLOT_W}
          height={H}
          fill="#d00"
        />
        <rect
          x={SLOT_W * 5}
          y={CONTENT_TOP}
          width={SLOT_W}
          height={H}
          fill="#d00"
        />
      </g>

      {/* Bandeau blanc en haut (1/5 de la hauteur) */}
      <rect x={0} y={0} width={W} height={BANNER_H} fill="#fff" />

      {/* Contours nets */}
      <path d={SHIELD_PATH} fill="none" stroke="#000" strokeWidth={2.2} />
      <rect
        x={0}
        y={0}
        width={W}
        height={BANNER_H}
        fill="none"
        stroke="#000"
        strokeWidth={2.2}
      />

      {/* Textes (même largeur grâce à textLength) */}
      <text
        x={W / 2}
        y={BANNER_H * 0.42} // ~42% du bandeau
        fontFamily="system-ui, Arial, sans-serif"
        fontSize={7}
        textAnchor="middle"
        fontWeight="500"
        fill="#000"
        lengthAdjust="spacingAndGlyphs"
        textLength={TEXT_WIDTH}
        style={{ textTransform: 'uppercase' }}
      >
        US PRÉCIGNÉ
      </text>
      <text
        x={W / 2}
        y={BANNER_H * 0.82} // ~82% du bandeau (2e ligne)
        fontFamily="system-ui, Arial, sans-serif"
        fontSize={7}
        textAnchor="middle"
        fontWeight="500"
        fill="#000"
        lengthAdjust="spacingAndGlyphs"
        textLength={TEXT_WIDTH}
        style={{ textTransform: 'uppercase' }}
      >
        OMNISPORTS
      </text>
    </svg>
  )
}
