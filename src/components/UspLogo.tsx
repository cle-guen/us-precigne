// UspLogo.tsx

export default function UspLogo({
  className = '',
  bottomText,
  centerImageSrc,
  centerImageScale = 0.65,
  centerImageYOffset = 0,
}: {
  className?: string
  bottomText: string
  centerImageSrc?: string
  centerImageScale?: number
  centerImageYOffset?: number
}) {
  const W = 80
  const H = 120
  const BANNER_H = H * (1 / 5) // 24
  const MID_H = H * (3 / 5) // 72
  const BOTTOM_H = H * (1 / 5) // 24
  const CONTENT_TOP = BANNER_H // 24
  const BOTTOM_START_Y = BANNER_H + MID_H // 96

  const SLOTS = 7
  const SLOT_W = W / SLOTS

  // Forme arrondie (ta version actuelle)
  const SHIELD_PATH = `
      M 0 0
      H ${W}
      V ${BOTTOM_START_Y}
      C ${W} ${H - BOTTOM_H * 0.5}, ${W - 18} ${H}, ${W / 2} ${H}
      C ${18} ${H}, 0 ${H - BOTTOM_H * 0.5}, 0 ${BOTTOM_START_Y}
      Z
    `

  // Taille/position du logo central
  const boxW = W * centerImageScale
  const boxH = boxW // carré
  const boxX = (W - boxW) / 2
  const boxY = CONTENT_TOP + (MID_H - boxH) / 1 + centerImageYOffset // centré dans la zone médiane

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

      {/* Corps */}
      <path d={SHIELD_PATH} fill="#000" />

      {/* Bandes rouges */}
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

      {/* Logo central - version compatible Safari */}
      {centerImageSrc && (
        <image
          x={boxX}
          y={boxY}
          width={boxW}
          height={boxH}
          href={centerImageSrc}
          clipPath="url(#clip-shield)"
          preserveAspectRatio="xMidYMid meet"
        />
      )}

      {/* Bandeau haut */}
      <rect x={0} y={0} width={W} height={BANNER_H} fill="#fff" />

      {/* Contours */}
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

      {/* Textes */}
      <text
        x={W / 2}
        y={BANNER_H * 0.42}
        fontFamily="system-ui, Arial, sans-serif"
        fontSize={7}
        textAnchor="middle"
        fontWeight="500"
        fill="#000"
        lengthAdjust="spacingAndGlyphs"
        style={{ textTransform: 'uppercase' }}
      >
        US PRÉCIGNÉ
      </text>
      <text
        x={W / 2}
        y={BANNER_H * 0.82}
        fontFamily="system-ui, Arial, sans-serif"
        fontSize={7}
        textAnchor="middle"
        fontWeight="500"
        fill="#000"
        lengthAdjust="spacingAndGlyphs"
        style={{ textTransform: 'uppercase' }}
      >
        {bottomText}
      </text>
    </svg>
  )
}
