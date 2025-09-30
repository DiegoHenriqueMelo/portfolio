import React from 'react';
import SimpleAuth from './SimpleAuth';
import MetricasApp from './metricas/MetricasApp';

const MetricasPage = () => {
  return (
    <SimpleAuth password="admin123">
      <MetricasApp />
    </SimpleAuth>
  );
};

export default MetricasPage;