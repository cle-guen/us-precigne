/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'US Précigné - Association Omnisports'
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
        {/* Header avec logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          {/* Logo US Précigné */}
          <img
            src="https://usprecigne.fr/images/logos/usp-logo.png"
            alt="US Précigné"
            style={{
              width: '120px',
              height: '180px',
              marginRight: '30px',
              objectFit: 'contain',
            }}
          />

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
              US Précigné
            </h1>
            <p
              style={{
                fontSize: '32px',
                color: '#dc2626',
                margin: '0',
                fontWeight: '600',
              }}
            >
              Association Omnisports
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
          Union Sportive de Précigné - Association omnisports créée en 1921
        </div>

        {/* Sports disponibles */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['Football', 'Gymnastique', 'Judo', 'Tennis', 'Yoga'].map(
            (sport, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f3f4f6',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#374151',
                  border: '2px solid #e5e7eb',
                }}
              >
                {sport}
              </div>
            ),
          )}
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
          usprecigne.fr
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
