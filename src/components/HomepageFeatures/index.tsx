import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is RPKI?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Resource Public Key Infrastructure (RPKI) is a security framework used to secure the Internet's routing infrastructure. RPKI allows organisations such as Internet Service Providers (ISPs) and network operators to verify the legitimacy of routes advertised on the Internet.
      </>
    ),
  },
  {
    title: 'What are ROAs?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Route Origin Authorizations (ROAs) are cryptographic objects used in the Resource Public Key Infrastructure (RPKI) framework to specify which Autonomous Systems (AS) are authorized to originate specific IP address space on the Internet.
      </>
    ),
  },
  {
    title: 'What is Route Object Validation?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Route Object Validation (ROV) refers to the process of validating routing information using external databases or repositories to verify the legitimacy of route announcements on the Internet. This validation helps ensure that routing information is accurate and originates from authorised entities, thereby enhancing the security and reliability of Internet routing.
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

export default function HomepageFeatures(): JSX.Element {
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
