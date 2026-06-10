import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Story } from '@/components/story';
import { MaterialsSection } from '@/components/materials-section';
import { Mission } from '@/components/mission';
import { Footer } from '@/components/footer';
import { SITE_URL } from '@/lib/site';
import { allMaterials } from '@/lib/data-generated';

function buildStructuredData() {
  const topMaterials = allMaterials.slice(0, 5).map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: item.title,
      url: item.url,
      encodingFormat:
        item.type === 'audio'
          ? 'audio/mpeg'
          : item.type === 'video'
            ? 'video/x-msvideo'
            : item.type === 'pdf'
              ? 'application/pdf'
              : 'application/msword',
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ReligiousOrganization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Giubileo — Senza Misura',
        alternateName: 'Senza Misura',
        url: SITE_URL,
        logo: `${SITE_URL}/hero/hero-4.jpg`,
        image: `${SITE_URL}/hero/hero-4.jpg`,
        description:
          'Ministero evangelico dedicato alla proclamazione del Vangelo con potenza e passione. Materiali gratuiti: predicazioni, musica cristiana, libri e insegnamenti biblici.',
        founder: { '@id': `${SITE_URL}/#person` },
        sameAs: [],
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Corrado Salmè',
        url: SITE_URL,
        jobTitle: 'Pastore e Ministro del Vangelo',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        knowsAbout: [
          'Bibbia',
          'Predicazioni',
          'Musica cristiana',
          'Insegnamenti biblici',
          'Vangelo',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Senza Misura',
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/#materials`,
        url: `${SITE_URL}/#materiali`,
        name: 'Materiali — Senza Misura',
        description:
          'Predicazioni, musica cristiana, libri e insegnamenti biblici gratuiti messi a disposizione dal ministero Senza Misura.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: topMaterials,
        },
      },
    ],
  };
}

export default function Home() {
  const structuredData = buildStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MaterialsSection />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
