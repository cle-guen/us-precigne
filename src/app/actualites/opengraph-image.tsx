import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Actualités - US Précigné'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        }}
      >
        {/* Header avec logo simplifié */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          {/* Logo US Précigné - version simplifiée */}
          <div
            style={{
              width: '120px',
              height: '180px',
              backgroundColor: '#000000',
              borderRadius: '8px',
              marginRight: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Bandes rouges */}
            <div
              style={{
                position: 'absolute',
                left: '17px',
                top: '0',
                width: '17px',
                height: '100%',
                backgroundColor: '#dc2626',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '51px',
                top: '0',
                width: '17px',
                height: '100%',
                backgroundColor: '#dc2626',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '85px',
                top: '0',
                width: '17px',
                height: '100%',
                backgroundColor: '#dc2626',
              }}
            />
            {/* Bandeau blanc */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '36px',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#000000',
                  textAlign: 'center',
                  lineHeight: '1.2',
                }}
              >
                US PRÉCIGNÉ
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#000000',
                  textAlign: 'center',
                  lineHeight: '1.2',
                }}
              >
                OMNISPORTS
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0',
                lineHeight: '1.1',
              }}
            >
              Actualités
            </h1>
            <p
              style={{
                fontSize: '32px',
                color: '#dc2626',
                margin: '0',
                fontWeight: '600',
              }}
            >
              US Précigné
            </p>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '28px',
            color: '#4b5563',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: '1.4',
            marginBottom: '40px',
          }}
        >
          Suivez toute l'actualité de notre association : événements, tournois,
          résultats de compétitions et nouvelles activités
        </div>

        {/* Éléments visuels */}
        <div
          style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              backgroundColor: '#dc2626',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            📰 Événements
          </div>
          <div
            style={{
              backgroundColor: '#dc2626',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            🏆 Tournois
          </div>
          <div
            style={{
              backgroundColor: '#dc2626',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            🎯 Résultats
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            fontSize: '18px',
            color: '#6b7280',
            fontWeight: '500',
          }}
        >
          usprecigne.fr/actualites
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
