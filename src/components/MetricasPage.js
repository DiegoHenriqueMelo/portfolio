import React from 'react';
import SimpleAuth from './SimpleAuth';
import MetricasApp from './metricas/MetricasApp';

const MetricasPage = () => {
  return (
    <SimpleAuth passwordHash="900c4fb97739dc5e2ecfff7619cb09faf42433ac55bb6cbf7c818e602722f4c1">
      <MetricasApp />
    </SimpleAuth>
  );
};

export default MetricasPage;