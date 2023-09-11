import * as React from 'react';

interface EmailTemplateProps {
  emailText: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    emailText,
}) => (
  <div>
    <p>{emailText}</p>
  </div>
);
