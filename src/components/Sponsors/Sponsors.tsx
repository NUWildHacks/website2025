import React from 'react';
import './Sponsors.scss';

const Sponsors: React.FC = () => {
  const sponsors = [
    { name: 'Sponsor 1', logo: '/sponsor1.png', link: 'https://sponsor1.com' },
    { name: 'Sponsor 2', logo: '/sponsor2.png', link: 'https://sponsor2.com' },
    { name: 'Sponsor 3', logo: '/sponsor3.png', link: 'https://sponsor3.com' },
    { name: 'Sponsor 4', logo: '/sponsor4.png', link: 'https://sponsor4.com' },
    { name: 'Sponsor 5', logo: '/sponsor5.png', link: 'https://sponsor5.com' },
    { name: 'Sponsor 6', logo: '/sponsor6.png', link: 'https://sponsor6.com' },
    { name: 'Sponsor 7', logo: '/sponsor7.png', link: 'https://sponsor7.com' },
    { name: 'Sponsor 8', logo: '/sponsor8.png', link: 'https://sponsor8.com' },
  ];

  return (
    <section id="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsors__container">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsors__card"
          >
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="sponsors__logo"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
