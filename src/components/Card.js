import React from 'react';
import '../scss/components/Card.scss';

const Card = ({ children, className }) => {
  const classname = className || '';

  return <div className={` ${classname}`}>{children}</div>;
};

const CardHeader = ({ children }) => <div className="graph-card-header">{children}</div>;

const CardBody = ({ children }) => <div className="graph-card-body">{children}</div>;

const CardFooter = ({ children }) => <div className="graph-card-footer">{children}</div>;

export { Card, CardHeader, CardBody, CardFooter };
