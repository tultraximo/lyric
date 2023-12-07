import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="compensation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-5xl text-primary leading-10 font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-4xl leading-10 tracking-tight text-primary sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-2xl text-primary lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-primary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-primary">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-primary">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
