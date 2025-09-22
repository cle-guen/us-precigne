import { sports } from '@/data/sports'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sport - US Précigné'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const sport = sports.find((s) => s.slug === params.slug)

  if (!sport) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            fontSize: '48px',
            color: '#dc2626',
          }}
        >
          Sport non trouvé
        </div>
      ),
      { ...size },
    )
  }

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

          {/* Titre du sport */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0',
                lineHeight: '1.1',
              }}
            >
              {sport.name}
            </h1>
            <p
              style={{
                fontSize: '28px',
                color: '#dc2626',
                margin: '0',
                fontWeight: '600',
              }}
            >
              US Précigné
            </p>
          </div>
        </div>

        {/* Description du sport */}
        <div
          style={{
            fontSize: '24px',
            color: '#4b5563',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: '1.4',
            marginBottom: '40px',
          }}
        >
          {sport.intro}
        </div>

        {/* Call to action */}
        <div
          style={{
            backgroundColor: '#dc2626',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '8px',
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px',
          }}
        >
          Rejoignez-nous !
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
          usprecigne.fr/sports/{sport.slug}
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
