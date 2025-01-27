import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy-to-use.svg').default,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        JWT Smith is designed with simplicity in mind, ensuring developers can easily integrate robust authentication and authorization into their applications.
      </>
    ),
  },
  {
    title: 'Middleware Protection',
    Svg: require('@site/static/img/middleware-protection.svg').default,
    description: (
      <>
        Secure your APIs effortlessly with powerful middleware that validates tokens and enforces access controls for every endpoint.
      </>
    ),
  },
  {
    title: 'Customizability',
    Svg: require('@site/static/img/customizability.svg').default,
    description: (
      <>
        Tailor every aspect of the module to your needs, from token generation to role-based access control, ensuring it fits perfectly into your project.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
